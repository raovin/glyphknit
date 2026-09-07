import { runAssertion } from "./assertions";
import type { CaseOutcome, EvalCase, GateDecision, GateReport, Provider } from "./types";

/**
 * Fixed responses for the sample suite. This is the swap point: replacing it
 * with a real model client is a one-function change and nothing downstream
 * moves. It is deliberately not a model, and the page says so.
 */
const CANNED: Record<string, string> = {
  "refund-intent":
    "I've classified this as a refund request. Routing to the billing queue with priority normal.",
  "pii-redaction":
    "Customer contact on file: [REDACTED_EMAIL], phone [REDACTED_PHONE]. Order shipped Tuesday.",
  "order-json":
    '{"order":{"id":"A-4471","status":"shipped"},"customer":{"tier":"gold"}}',
  "tone-guard":
    "That is frustrating, and I'm sorry it happened. Here is what I can do about it today.",
  "unsafe-request":
    "I can't help with that. If you've lost access to your own account, the recovery flow is the right path.",
  "sku-format":
    "The item you're asking about is SKU GK-88213, currently in stock at two warehouses."
};

/** Stable 32-bit FNV-1a. Used for run identity, never for security. */
function hash(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

/**
 * Rounds to the precision the UI and the report both show. Comparing the
 * rounded value keeps a displayed 0.800 from failing a 0.80 threshold on
 * binary floating-point error.
 */
function round6(value: number): number {
  return Math.round(value * 1e6) / 1e6;
}

/**
 * Deterministic stand-in. Known ids return their canned response; anything new
 * returns a fixed generic reply, so a case a visitor adds starts red until the
 * system actually satisfies it.
 */
export const deterministicProvider: Provider = ({ id, prompt }) => {
  const canned = CANNED[id];
  if (canned !== undefined) return canned;
  return `Acknowledged. No handler is configured for this request. [stub:${hash(prompt)}]`;
};

export function evaluateCases(
  cases: EvalCase[],
  threshold: number,
  provider: Provider = deterministicProvider
): CaseOutcome[] {
  return cases.map((testCase) => {
    const response = provider({ id: testCase.id, prompt: testCase.prompt });
    const { score, reason } = runAssertion(testCase.kind, response, testCase.expected);
    const clamped = round6(Math.min(1, Math.max(0, Number.isFinite(score) ? score : 0)));
    return {
      id: testCase.id,
      kind: testCase.kind,
      score: clamped,
      passed: clamped >= threshold,
      reason,
      weight: testCase.weight ?? 1,
      response
    };
  });
}

export function decide(outcomes: CaseOutcome[], threshold: number): GateDecision {
  if (outcomes.length === 0) {
    return {
      aggregate: 0,
      threshold,
      passed: false,
      cause: "No evaluable cases. A gate with nothing to check does not pass.",
      failing: []
    };
  }

  const totalWeight = outcomes.reduce((sum, outcome) => sum + outcome.weight, 0);
  const weighted = outcomes.reduce((sum, outcome) => sum + outcome.score * outcome.weight, 0);
  const aggregate = round6(totalWeight > 0 ? weighted / totalWeight : 0);
  const failing = outcomes.filter((outcome) => !outcome.passed).map((outcome) => outcome.id);
  const passed = aggregate >= threshold;

  const cause = passed
    ? `Weighted score ${aggregate.toFixed(3)} meets the ${threshold.toFixed(2)} threshold.`
    : `Weighted score ${aggregate.toFixed(3)} is below the ${threshold.toFixed(2)} threshold.` +
      (failing.length > 0 ? ` Failing: ${failing.join(", ")}.` : "");

  return { aggregate, threshold, passed, cause, failing };
}

/**
 * Run identity is derived from the inputs, not a clock, so the same cases and
 * threshold always produce a byte-identical report.
 */
export function buildReport(
  cases: EvalCase[],
  outcomes: CaseOutcome[],
  decision: GateDecision
): GateReport {
  const fingerprint = hash(JSON.stringify({ cases, threshold: decision.threshold }));
  return {
    schema: "glyphknit.eval-gate/v1",
    runId: `run-${fingerprint}`,
    threshold: decision.threshold,
    aggregate: decision.aggregate,
    decision: decision.passed ? "PASS" : "FAIL",
    cause: decision.cause,
    caseCount: outcomes.length,
    cases: outcomes
  };
}
