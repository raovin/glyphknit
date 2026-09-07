import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { EvalGate } from "@/components/demos/eval-gate";
import { Section } from "@/components/section";
import { siteConfig } from "@/content/site";
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
        <p className="mono-label mt-6">Live demo</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Model output release gate</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          &quot;Does the model behave well enough to ship?&quot; is usually settled by
          someone skimming outputs and forming an opinion. That does not survive
          contact with a release schedule. This is the same question answered as
          engineering: versioned cases, deterministic assertions, a weighted
          threshold, and a report a pipeline can fail on.
        </p>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Edit a case. Move the threshold. The decision changes underneath you.
        </p>
      </section>

      <Section className="pt-0" eyebrow="Run it">
        <noscript>
          <div className="hairline-card mb-6 border-[var(--danger)] p-5">
            <p className="text-sm text-[var(--text)]">
              The interactive gate needs JavaScript, which is currently disabled.
              The mechanism it demonstrates: each case pairs a prompt with an
              assertion (substring, regular expression, JSON shape, or expected
              refusal). Every case is scored from 0 to 1, the scores are combined
              into a weighted aggregate, and the aggregate is compared against a
              pass threshold to produce a release decision plus a structured JSON
              report. Scoring is deterministic, so the same inputs always yield the
              same report.
            </p>
          </div>
        </noscript>
        <EvalGate />
      </Section>

      <Section eyebrow="Boundaries" title="What this is, and what it is not">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="hairline-card p-5">
            <h3 className="text-lg">What is real</h3>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              <li className="border-l border-[var(--accent)] pl-3">
                The parser, the four assertion kinds, the weighted aggregation, the
                threshold decision, and the report are working code running in your
                browser.
              </li>
              <li className="border-l border-[var(--accent)] pl-3">
                Nothing leaves the page. There is no network call, no API key, and
                no server. Your edits are not transmitted or stored.
              </li>
              <li className="border-l border-[var(--accent)] pl-3">
                Runs are reproducible. The run id is derived from the inputs rather
                than a clock, so identical cases always produce an identical report.
              </li>
            </ul>
          </article>
          <article className="hairline-card p-5">
            <h3 className="text-lg">What is a stand-in</h3>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              <li className="border-l border-[var(--danger)] pl-3">
                Responses come from a deterministic stub, not a live model. The
                provider is a single function, and swapping a real client in is a
                one-function change.
              </li>
              <li className="border-l border-[var(--danger)] pl-3">
                Six sample cases are an illustration of the shape, not a model
                benchmark. A production suite is orders of magnitude larger.
              </li>
              <li className="border-l border-[var(--danger)] pl-3">
                This is a portfolio artifact built from synthetic data. It is not
                client work and contains no client, employer, or personal data.
              </li>
            </ul>
          </article>
        </div>
      </Section>

      <Section eyebrow="What this proves" title="Why a hiring team should care">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="hairline-card p-5">
            <p className="text-sm text-[var(--text)]">
              Subjective behavior becomes a testable contract. That is the same move
              as turning a manual regression pass into a suite, applied to model
              output.
            </p>
          </article>
          <article className="hairline-card p-5">
            <p className="text-sm text-[var(--text)]">
              Partial credit on structured output keeps the aggregate continuous, so
              a threshold is a real dial rather than a formality. Failures name the
              exact missing paths.
            </p>
          </article>
          <article className="hairline-card p-5">
            <p className="text-sm text-[var(--text)]">
              Determinism and a machine-readable report are what let a gate live in
              CI. An eval you cannot reproduce cannot block a release.
            </p>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href="/work/mlops-readiness-scaffold/"
            icon={<ArrowRight aria-hidden="true" size={17} />}
          >
            Related case study
          </ButtonLink>
          <ButtonLink
            href={`mailto:${siteConfig.email}`}
            icon={<Mail aria-hidden="true" size={17} />}
            variant="primary"
          >
            Talk about this work
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
