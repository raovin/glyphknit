import { ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Work With Me",
  description:
    "Work with Vin Rao on senior QA/SDET, ML-quality, test automation, API validation, CI/CD testing, and selective contract engineering engagements.",
  path: "/work-with-me"
});

const engagementModels = [
  {
    title: "Senior QA/SDET role",
    text: "Best fit for teams that need durable automation strategy, application-code fluency, and CI release evidence."
  },
  {
    title: "ML-quality engagement",
    text: "Useful when eval cases, structured response checks, data validation, or lightweight model/API gates need to move from idea to CI."
  },
  {
    title: "Scoped contract build",
    text: "A practical path for an internal tool, API test harness, Playwright suite, or data-validation layer with docs and hand-off."
  }
];

export default function WorkWithMePage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Work with me</p>
        <h1 className="mt-4 text-4xl md:text-5xl">
          Open to senior roles and select contract engagements.
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          {siteConfig.availability} The consulting page is secondary to the
          hiring path, not a signal of being unavailable for full-time work.
        </p>
      </section>

      <Section eyebrow="Engagement fit" title="Where the work is strongest">
        <div className="grid gap-4 md:grid-cols-3">
          {engagementModels.map((model) => (
            <article className="hairline-card p-5" key={model.title}>
              <h2 className="text-xl">{model.title}</h2>
              <p className="mt-4 text-sm text-[var(--muted)]">{model.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="First conversation" title="Useful context to send">
        <div className="grid gap-5 md:grid-cols-[1fr_0.6fr]">
          <ul className="grid gap-3 text-sm text-[var(--muted)]">
            <li className="border-l border-[var(--accent)] pl-3">
              The product or release bottleneck.
            </li>
            <li className="border-l border-[var(--accent)] pl-3">
              Current stack, test tools, CI system, and data sources.
            </li>
            <li className="border-l border-[var(--accent)] pl-3">
              Hiring or contract timeline.
            </li>
            <li className="border-l border-[var(--accent)] pl-3">
              What a useful first outcome would look like.
            </li>
          </ul>
          <div className="flex flex-col gap-3 md:items-start">
            <ButtonLink
              href={`mailto:${siteConfig.email}`}
              icon={<Mail aria-hidden="true" size={17} />}
              variant="primary"
            >
              Email
            </ButtonLink>
            <Link className="focus-link inline-flex items-center gap-2 text-sm font-semibold" href="/work">
              Review work
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
