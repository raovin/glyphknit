import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader, SectionHead } from "@/components/editorial";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Work with me",
  description: "Scoped test automation, release engineering, API validation, and data-quality projects with GlyphKnit.",
  path: "/work-with-me"
});

const engagements = [
  {
    numeral: "I",
    title: "Test systems",
    text: "I build browser tests for critical user journeys and API checks for the services behind them.",
    example: "Browser and API tests for a cloud application",
    href: "/work/cloud-backed-sdet-frameworks/"
  },
  {
    numeral: "II",
    title: "Release pipelines",
    text: "I review which checks block a change, which ones can run in parallel, and what a developer sees when a run fails.",
    example: "Cutting CI feedback from three hours to 25 minutes",
    href: "/work/financial-data-quality-platform/"
  },
  {
    numeral: "III",
    title: "Data and eval checks",
    text: "I write checks for expected data and model outputs. In the demo, you can change an expectation and inspect the resulting release decision.",
    example: "Try the model output release gate",
    href: "/demos/eval-gate/"
  }
];

const steps = [
  { title: "The problem", text: "What does your team wait for or still check by hand? A short description is enough." },
  { title: "The current system", text: "The stack, the pipeline, and what has already been tried." },
  { title: "A first outcome", text: "The first result that would make a difference. Include a deadline if you have one." }
];

export default function WorkWithMePage() {
  return (
    <>
      <PageHeader eyebrow={<p className="label">Services</p>} title={<>Contract engineering for tests, data, and <em>releases.</em></>} titleClassName="max-w-[19ch]">
        <p className="lede text-muted">
          I take on scoped projects through GlyphKnit, from a test framework that needs rebuilding to a release pipeline that takes too long to trust.
        </p>
      </PageHeader>

      <section aria-label="Engagements" className="shell">
        <ol className="border-t border-rule">
          {engagements.map((engagement, index) => (
            <li className="border-b border-line" key={engagement.title}>
              <Reveal delay={index * 0.05}>
                <article className="grid gap-6 py-12 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:py-16">
                  <span aria-hidden="true" className="numeral text-[3.5rem] text-accent md:text-[4.5rem]">
                    {engagement.numeral}
                  </span>
                  <h2 className="display-2">{engagement.title}</h2>
                  <div className="md:pt-3">
                    <p className="text-[1.0625rem] leading-relaxed text-fg">{engagement.text}</p>
                    <Link className="arrow-link mt-5" href={engagement.href}>
                      <span>{engagement.example}</span>
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="start-title" className="shell section">
        <SectionHead label="How an engagement starts" />
        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <h2 className="display-2 max-w-[12ch]" id="start-title">
              Tell me what needs <em>fixing.</em>
            </h2>
            <Link className="btn btn-primary mt-10" href="/contact/">
              Discuss a project
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <ol className="grid gap-0 border-t border-line">
            {steps.map((step, index) => (
              <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-3 border-b border-line py-6" key={step.title}>
                <span className="pt-1 font-mono text-[0.8125rem] tabular-nums text-faint">0{index + 1}</span>
                <div>
                  <h3 className="display-3">{step.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
