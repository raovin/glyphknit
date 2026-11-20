import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { EvalGate } from "@/components/demos/eval-gate";
import { Section } from "@/components/section";
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
      <section className="reading-shell py-16 md:py-20">
        <Link
          className="focus-link inline-flex items-center gap-2 text-sm text-[var(--muted)]"
          href="/demos/"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          All demos
        </Link>
        <p className="mono-label mt-6">Independent project / interactive demo</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Model output release gate</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Move the pass threshold to change the release decision, or edit a case to see which check fails.
          The six sample cases use fixed responses. Evaluation runs in your browser.
        </p>
      </section>

      <Section className="pt-0">
        <noscript>
          <p className="mb-6 text-[var(--muted)]">
            Enable JavaScript to edit the sample cases and threshold. You can still read the sample report below.
          </p>
        </noscript>
        <EvalGate />
      </Section>

      <Section title="Reading the result">
        <p className="max-w-2xl text-[var(--muted)]">
          A JSON response can earn partial credit. The case result lists the missing fields.
          The gate compares the weighted score with the threshold. Download the JSON report to inspect the decision and individual scores together.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href="/work/mlops-readiness-scaffold/"
            icon={<ArrowRight aria-hidden="true" size={17} />}
          >
            Read the case study
          </ButtonLink>
          <ButtonLink
            href="/contact/?project=mlops-readiness-scaffold"
            icon={<Mail aria-hidden="true" size={17} />}
            variant="primary"
          >
            Discuss a similar project
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
