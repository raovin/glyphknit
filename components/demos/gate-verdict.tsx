import { ShieldAlert, ShieldCheck } from "lucide-react";

import type { GateDecision } from "@/lib/eval/types";

export function GateVerdict({ decision }: { decision: GateDecision }) {
  const passed = decision.passed;
  const percent = Math.round(decision.aggregate * 100);

  return (
    <div
      aria-live="polite"
      className={`hairline-card p-5 ${
        passed ? "border-[var(--accent)]" : "border-[var(--danger)]"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {passed ? (
            <ShieldCheck aria-hidden="true" className="text-[var(--accent-strong)]" size={22} />
          ) : (
            <ShieldAlert aria-hidden="true" className="text-[var(--danger)]" size={22} />
          )}
          <div>
            <p className="mono-label">Release gate</p>
            <p
              className={`text-2xl font-semibold ${
                passed ? "text-[var(--accent-strong)]" : "text-[var(--danger)]"
              }`}
            >
              {passed ? "PASS" : "FAIL"}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="mono-label">Weighted score</p>
          <p className="font-mono text-2xl tabular-nums">{decision.aggregate.toFixed(3)}</p>
          <p className="text-xs text-[var(--faint)]">
            threshold {decision.threshold.toFixed(2)}
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-[var(--surface-soft)]"
      >
        <div
          className={`h-full rounded-full ${passed ? "bg-[var(--accent)]" : "bg-[var(--danger)]"}`}
          style={{ width: `${percent}%` }}
        />
        <div
          className="absolute top-0 h-full w-0.5 bg-[var(--paper)]"
          style={{ left: `${Math.round(decision.threshold * 100)}%` }}
        />
      </div>
      <p className="mt-4 text-sm text-[var(--text)]">{decision.cause}</p>
    </div>
  );
}
