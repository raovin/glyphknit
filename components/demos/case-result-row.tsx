import { CheckCircle2, XCircle } from "lucide-react";

import type { CaseOutcome } from "@/lib/eval/types";

const kindLabels: Record<CaseOutcome["kind"], string> = {
  contains: "contains",
  regex: "regex",
  "json-shape": "json shape",
  refusal: "refusal"
};

export function CaseResultRow({ outcome }: { outcome: CaseOutcome }) {
  const percent = Math.round(outcome.score * 100);

  return (
    <li className="min-w-0 border-b border-[var(--line)] py-4 last:border-b-0">
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {outcome.passed ? (
              <CheckCircle2 aria-hidden="true" className="text-[var(--accent-strong)]" size={16} />
            ) : (
              <XCircle aria-hidden="true" className="text-[var(--danger)]" size={16} />
            )}
            <span className="font-mono text-sm font-semibold break-all">{outcome.id}</span>
            <span className="chip whitespace-nowrap">{kindLabels[outcome.kind]}</span>
            {outcome.weight !== 1 ? (
              <span className="chip whitespace-nowrap">weight {outcome.weight}</span>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-[var(--muted)]">{outcome.reason}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span
            className={`text-xs font-semibold tracking-wider ${
              outcome.passed ? "text-[var(--accent-strong)]" : "text-[var(--danger)]"
            }`}
          >
            {outcome.passed ? "PASS" : "FAIL"}
          </span>
          <span className="font-mono text-sm tabular-nums">{outcome.score.toFixed(2)}</span>
        </div>
      </div>
      <div
        aria-label={`Score for ${outcome.id}`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percent}
        className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[var(--surface-soft)]"
        role="progressbar"
      >
        <div
          className={`h-full rounded-full ${
            outcome.passed ? "bg-[var(--accent)]" : "bg-[var(--danger)]"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <details className="mt-3">
        <summary className="focus-link cursor-pointer text-xs text-[var(--faint)] hover:text-[var(--paper)]">
          Show response
        </summary>
        <pre className="mt-2 w-full overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--surface)] p-3 text-xs text-[var(--text)]">
          <code>{outcome.response}</code>
        </pre>
      </details>
    </li>
  );
}
