export type AssertionKind = "contains" | "regex" | "json-shape" | "refusal";

/** A single versioned expectation. Authored as one JSONL line. */
export type EvalCase = {
  id: string;
  prompt: string;
  kind: AssertionKind;
  /**
   * Interpretation depends on `kind`:
   * - contains:   substring the response must include
   * - regex:      pattern source the response must match
   * - json-shape: comma-separated key paths the JSON response must expose
   * - refusal:    unused; the response must read as a refusal
   */
  expected: string;
  /** Relative weight in the aggregate. Defaults to 1. */
  weight?: number;
};

export type CaseOutcome = {
  id: string;
  kind: AssertionKind;
  /** 0 through 1. Some assertions award partial credit. */
  score: number;
  passed: boolean;
  /** Why the assertion produced this score, in reviewer-readable terms. */
  reason: string;
  weight: number;
  response: string;
};

export type GateDecision = {
  aggregate: number;
  threshold: number;
  passed: boolean;
  cause: string;
  failing: string[];
};

export type GateReport = {
  schema: "glyphknit.eval-gate/v1";
  /** Derived from the inputs, never from a clock, so runs stay reproducible. */
  runId: string;
  threshold: number;
  aggregate: number;
  decision: "PASS" | "FAIL";
  cause: string;
  caseCount: number;
  cases: CaseOutcome[];
};

/**
 * The provider boundary. Swapping a real model client in means implementing
 * this one function; nothing else in the evaluator changes.
 */
export type Provider = (input: { id: string; prompt: string }) => string;
