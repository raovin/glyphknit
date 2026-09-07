"use client";

import { AlertTriangle, Check, Copy, Download, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import { CaseResultRow } from "@/components/demos/case-result-row";
import { GateVerdict } from "@/components/demos/gate-verdict";
import { DEFAULT_THRESHOLD, SAMPLE_CASES_JSONL } from "@/content/demos/eval-gate-cases";
import { buildReport, decide, evaluateCases } from "@/lib/eval/evaluate";
import { parseCases } from "@/lib/eval/parse";
import type { CaseOutcome, GateDecision, GateReport } from "@/lib/eval/types";

type RunState = { outcomes: CaseOutcome[]; decision: GateDecision; report: GateReport };

function runSuite(jsonl: string, threshold: number) {
  const { cases, problems } = parseCases(jsonl);
  const outcomes = evaluateCases(cases, threshold);
  const decision = decide(outcomes, threshold);
  const report = buildReport(cases, outcomes, decision);
  return { cases, problems, run: { outcomes, decision, report } as RunState };
}

export function EvalGate() {
  const [jsonl, setJsonl] = useState(SAMPLE_CASES_JSONL);
  const [threshold, setThreshold] = useState(DEFAULT_THRESHOLD);
  const [copied, setCopied] = useState(false);

  // A malformed line is skipped and reported by line number; every line that
  // still parses is evaluated, so one bad row never blanks the run.
  const { problems, run: shown } = useMemo(() => runSuite(jsonl, threshold), [jsonl, threshold]);

  const reportJson = useMemo(() => JSON.stringify(shown.report, null, 2), [shown.report]);

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(reportJson);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function downloadReport() {
    try {
      const blob = new Blob([reportJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${shown.report.runId}.json`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch {
      // The report stays available inline below, so a blocked download is not fatal.
    }
  }

  function reset() {
    setJsonl(SAMPLE_CASES_JSONL);
    setThreshold(DEFAULT_THRESHOLD);
  }

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4 content-start">
        <div className="hairline-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="mono-label" htmlFor="eval-cases">
              cases.jsonl
            </label>
            <button
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
              onClick={reset}
              type="button"
            >
              <RotateCcw aria-hidden="true" size={14} />
              Reset to sample
            </button>
          </div>
          <textarea
            aria-describedby="eval-cases-help"
            className="mt-3 h-64 w-full resize-y rounded-md border border-[var(--line)] bg-[var(--surface)] p-3 font-mono text-xs leading-relaxed text-[var(--text)]"
            id="eval-cases"
            onChange={(event) => setJsonl(event.target.value)}
            spellCheck={false}
            value={jsonl}
          />
          <p className="mt-2 text-xs text-[var(--faint)]" id="eval-cases-help">
            One JSON object per line: <code>id</code>, <code>prompt</code>, <code>kind</code>{" "}
            (contains, regex, json-shape, refusal), <code>expected</code>, optional{" "}
            <code>weight</code>. Edit a line and the gate recomputes.
          </p>
        </div>

        <div className="hairline-card p-5">
          <div className="flex items-center justify-between gap-4">
            <label className="mono-label" htmlFor="eval-threshold">
              Pass threshold
            </label>
            <span className="font-mono text-lg tabular-nums">{threshold.toFixed(2)}</span>
          </div>
          <input
            className="mt-3 w-full accent-[var(--accent)]"
            id="eval-threshold"
            max={1}
            min={0}
            onChange={(event) => setThreshold(Number(event.target.value))}
            step={0.01}
            type="range"
            value={threshold}
          />
          <p className="mt-2 text-xs text-[var(--faint)]">
            Sets the bar for both the per-case result and the weighted release decision.
          </p>
        </div>

        {problems.length > 0 ? (
          <div className="hairline-card border-[var(--danger)] p-5" role="alert">
            <div className="flex items-center gap-2">
              <AlertTriangle aria-hidden="true" className="text-[var(--danger)]" size={16} />
              <p className="text-sm font-semibold text-[var(--danger)]">
                {problems.length} input {problems.length === 1 ? "problem" : "problems"}
              </p>
            </div>
            <ul className="mt-3 grid gap-1.5">
              {problems.map((problem) => (
                <li className="text-sm text-[var(--muted)]" key={`${problem.line}-${problem.message}`}>
                  <span className="font-mono text-[var(--text)]">
                    {problem.line === 0 ? "input" : `line ${problem.line}`}
                  </span>{" "}
                  {problem.message}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[var(--faint)]">
              Lines that still parse are evaluated. Fix the reported lines to
              include them.
            </p>
          </div>
        ) : null}
      </div>

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4 content-start">
        <GateVerdict decision={shown.decision} />

        <div className="hairline-card p-5">
          <p className="mono-label">
            Case results · {shown.outcomes.length}{" "}
            {shown.outcomes.length === 1 ? "case" : "cases"}
          </p>
          {shown.outcomes.length > 0 ? (
            <ul className="mt-2">
              {shown.outcomes.map((outcome) => (
                <CaseResultRow key={outcome.id} outcome={outcome} />
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-[var(--muted)]">
              No evaluable cases. Add a case above, or reset to the sample suite.
            </p>
          )}
        </div>

        <div className="hairline-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="mono-label">report.json</p>
            <div className="flex flex-wrap gap-2">
              <button
                className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
                onClick={copyReport}
                type="button"
              >
                {copied ? (
                  <Check aria-hidden="true" size={14} />
                ) : (
                  <Copy aria-hidden="true" size={14} />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
              <button
                className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
                onClick={downloadReport}
                type="button"
              >
                <Download aria-hidden="true" size={14} />
                Download
              </button>
            </div>
          </div>
          <pre className="mt-3 max-h-80 w-full overflow-auto rounded-md border border-[var(--line)] bg-[var(--surface)] p-3 text-xs text-[var(--text)]">
            <code>{reportJson}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
