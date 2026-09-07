import type { AssertionKind, EvalCase } from "./types";

export type ParseProblem = { line: number; message: string };
export type ParseResult = { cases: EvalCase[]; problems: ParseProblem[] };

const VALID_KINDS: readonly AssertionKind[] = ["contains", "regex", "json-shape", "refusal"];

/** Guards against a paste large enough to stall the page. */
export const MAX_LINES = 200;
export const MAX_INPUT_CHARS = 100_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Parses JSONL into cases. Every failure is reported against its line number
 * and the surviving lines still parse, so one bad row never blanks the run.
 */
export function parseCases(input: string): ParseResult {
  const problems: ParseProblem[] = [];

  if (input.length > MAX_INPUT_CHARS) {
    return {
      cases: [],
      problems: [
        {
          line: 0,
          message: `Input is ${input.length} characters. The limit is ${MAX_INPUT_CHARS}.`
        }
      ]
    };
  }

  const lines = input.split("\n");
  if (lines.length > MAX_LINES) {
    problems.push({
      line: 0,
      message: `Input has ${lines.length} lines. Only the first ${MAX_LINES} are evaluated.`
    });
  }

  const cases: EvalCase[] = [];
  const seen = new Set<string>();

  lines.slice(0, MAX_LINES).forEach((raw, index) => {
    const lineNumber = index + 1;
    const trimmed = raw.trim();
    if (trimmed.length === 0) return;

    let parsed: unknown;
    try {
      parsed = JSON.parse(trimmed);
    } catch {
      problems.push({ line: lineNumber, message: "Not valid JSON." });
      return;
    }

    if (!isRecord(parsed)) {
      problems.push({ line: lineNumber, message: "Expected a JSON object." });
      return;
    }

    const { id, prompt, kind, expected, weight } = parsed;

    if (typeof id !== "string" || id.trim().length === 0) {
      problems.push({ line: lineNumber, message: "Missing a non-empty string `id`." });
      return;
    }
    if (seen.has(id)) {
      problems.push({ line: lineNumber, message: `Duplicate id "${id}".` });
      return;
    }
    if (typeof prompt !== "string") {
      problems.push({ line: lineNumber, message: `Case "${id}" needs a string \`prompt\`.` });
      return;
    }
    if (typeof kind !== "string" || !VALID_KINDS.includes(kind as AssertionKind)) {
      problems.push({
        line: lineNumber,
        message: `Case "${id}" has kind "${String(kind)}". Expected one of ${VALID_KINDS.join(", ")}.`
      });
      return;
    }
    if (typeof expected !== "string") {
      problems.push({ line: lineNumber, message: `Case "${id}" needs a string \`expected\`.` });
      return;
    }

    let resolvedWeight = 1;
    if (weight !== undefined) {
      if (typeof weight !== "number" || !Number.isFinite(weight) || weight <= 0) {
        problems.push({
          line: lineNumber,
          message: `Case "${id}" has a non-positive \`weight\`. Using 1.`
        });
      } else {
        resolvedWeight = weight;
      }
    }

    seen.add(id);
    cases.push({ id, prompt, kind: kind as AssertionKind, expected, weight: resolvedWeight });
  });

  return { cases, problems };
}
