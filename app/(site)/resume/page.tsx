import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ImpactList } from "@/components/impact-list";
import { Section } from "@/components/section";
import { experience, resumeReceipts } from "@/content/experience";
import { primaryStack, siteConfig, stackGroups } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "Resume page for Vin Rao, Senior SDET and ML Quality Engineer, with PDF download, experience timeline, impact metrics, and technical stack.",
  path: "/resume"
});

export default function ResumePage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Resume</p>
        <h1 className="mt-4 text-4xl md:text-5xl">
          Senior SDET with product-code range and ML-quality direction.
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Around 9 years across QA automation, API validation, data checks,
          CI/CD gates, cloud-backed test infrastructure, and support-aware
          product delivery.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            download
            href={siteConfig.resumeHref}
            icon={<FileDown aria-hidden="true" size={17} />}
            variant="primary"
          >
            Download PDF
          </ButtonLink>
          <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail aria-hidden="true" size={17} />}>
            Email
          </ButtonLink>
          <ButtonLink href={siteConfig.githubUrl} icon={<Github aria-hidden="true" size={17} />}>
            GitHub
          </ButtonLink>
          <ButtonLink href={siteConfig.linkedinUrl} icon={<Linkedin aria-hidden="true" size={17} />}>
            LinkedIn
          </ButtonLink>
        </div>
      </section>

      <Section eyebrow="Resume signal" title="What the PDF should make easy to see">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="hairline-card p-5">
            <h2 className="text-xl">Automation depth</h2>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Playwright, Selenium, Cypress, pytest, Postman/Newman, Cucumber,
              SpecFlow, and CI-ready regression design.
            </p>
          </article>
          <article className="hairline-card p-5">
            <h2 className="text-xl">Data and API judgment</h2>
            <p className="mt-4 text-sm text-[var(--muted)]">
              REST validation, ingestion checks, access-control coverage,
              Pandas/MySQL verification, and structured release evidence.
            </p>
          </article>
          <article className="hairline-card p-5">
            <h2 className="text-xl">ML-quality bridge</h2>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Eval cases, provider boundaries, deterministic checks, JSON
              contracts, and thresholded CI gates for model/API behavior.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Impact" title="Resume-backed outcomes">
        <ImpactList items={resumeReceipts} />
      </Section>

      <Section eyebrow="Stack" title="Tools grouped by signal">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <article className="hairline-card p-5" key={group.title}>
              <h2 className="text-lg">{group.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {primaryStack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Timeline" title="Experience receipts">
        <ExperienceTimeline items={experience} />
      </Section>
    </>
  );
}
