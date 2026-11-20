import { ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { EvalGate } from "@/components/demos/eval-gate";
import { DemoHeader } from "@/components/lab";
import { DEFAULT_THRESHOLD } from "@/content/demos/eval-gate-cases";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Model output release gate",
  description:
    "A runnable evaluation gate for model and API behavior. Edit versioned cases, move the pass threshold, and download structured release evidence. Deterministic scoring runs entirely in the browser.",
  path: "/demos/eval-gate"
});

export default function EvalGateDemoPage() {
  return (
    <>
      <DemoHeader
        crumb="Release gate"
        intro={
          <p>
            Move the pass threshold to change the release decision, or edit a case to see which check fails. The six sample cases use fixed responses. Evaluation runs in your browser.
          </p>
        }
        kicker="Independent project · interactive demo"
        readout={[
          ["Sample cases", "6 synthetic"],
          ["Responses", "Fixed"],
          ["Default threshold", DEFAULT_THRESHOLD.toFixed(2)],
          ["Runs in", "Your browser"]
        ]}
        title="Model output release gate"
      />

      <section aria-label="Interactive release gate" className="shell">
        <noscript>
          <p className="mb-6 border-l-2 border-accent pl-4 text-muted">Enable JavaScript to edit the sample cases and threshold. You can still read the sample report below.</p>
        </noscript>
        <EvalGate />
      </section>

      <section aria-labelledby="reading-title" className="shell section">
        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <h2 className="display-2" id="reading-title">
            Reading the result
          </h2>
          <div>
            <p className="max-w-[56ch] text-[1.0625rem] leading-relaxed text-fg">
              A JSON response can earn partial credit. The case result lists the missing fields. The gate compares the weighted score with the threshold. Download the JSON report to inspect the decision and individual scores together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/contact/?project=mlops-readiness-scaffold">
                <Mail aria-hidden="true" size={16} />
                Discuss a similar project
              </Link>
              <Link className="btn btn-secondary" href="/work/mlops-readiness-scaffold/">
                Read the case study
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
