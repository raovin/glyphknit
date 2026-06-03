import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/experience-timeline";
import { Section } from "@/components/section";
import { experience } from "@/content/experience";
import { primaryStack, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About Vin Rao, a Senior SDET and ML-quality engineer with a background in QA automation, full-stack side projects, CI/CD testing, data validation, and ML quality.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">About</p>
        <h1 className="mt-4 text-4xl md:text-5xl">
          Quality engineering, product code, and clearer release evidence.
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          {siteConfig.name} is a Senior SDET / ML Quality Engineer based in Lisbon
          time, with nine years across Playwright, pytest, Selenium, Cypress,
          API testing, data validation, CI/CD gates, AWS, Azure, and .NET BDD.
        </p>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-[1fr_0.75fr]">
          <article className="hairline-card p-6">
            <h2 className="text-2xl">Background</h2>
            <div className="mt-5 grid gap-4 text-[var(--muted)]">
              <p>
                The resume backs a specific shape of engineer: someone who can build
                UI automation, API suites, data checks, CI gates, and support scripts,
                then explain the failure in terms a delivery team can act on.
              </p>
              <p>
                The Hamilton College background was Physics, with Computer Science,
                Mathematics, History, and Piano alongside it. That mix shows up in
                the way the work moves between systems thinking, scripts, data,
                and readable release evidence.
              </p>
              <p>
                Recent personal projects extend that pattern into ML and data systems:
                eval cases, structured output checks, reproducible local harnesses,
                and dashboards that avoid false precision.
              </p>
            </div>
          </article>
          <aside className="hairline-card p-6">
            <h2 className="text-2xl">Current signal</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {primaryStack.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-[var(--muted)]">
              Resume PDF is served from the current SDET build in the Canvas repo.
              Public client naming still deserves one final human check before launch.
            </p>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Resume timeline" title="Experience receipts">
        <ExperienceTimeline items={experience} />
      </Section>
    </>
  );
}
