import { Github, Linkedin, Mail } from "lucide-react";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Vin Rao for senior QA, SDET, ML-quality, test automation, API testing, CI/CD testing, and data validation work.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Contact</p>
        <h1 className="mt-4 text-4xl md:text-5xl">
          Hiring for QA, SDET or ML-quality, or need a contract engineer?
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)]">{siteConfig.availability}</p>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-[1fr_0.8fr]">
          <article className="hairline-card p-6">
            <h2 className="text-2xl">Email</h2>
            <p className="mt-4 font-mono text-lg text-[var(--paper)]">{siteConfig.email}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Best first note: role or problem, stack, timing, and what has already
              been tried.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                icon={<Mail aria-hidden="true" size={17} />}
                variant="primary"
              >
                Email
              </ButtonLink>
              <ButtonLink href={siteConfig.githubUrl} icon={<Github aria-hidden="true" size={17} />}>
                GitHub
              </ButtonLink>
              <ButtonLink href={siteConfig.linkedinUrl} icon={<Linkedin aria-hidden="true" size={17} />}>
                LinkedIn
              </ButtonLink>
            </div>
          </article>
          <aside className="hairline-card p-6">
            <h2 className="text-2xl">Public links</h2>
            <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
              <p>GitHub: {siteConfig.githubUrl}</p>
              <p id="linkedin">LinkedIn: {siteConfig.linkedinUrl}</p>
              <p>Resume: {siteConfig.resumeHref}</p>
              <p>Remaining launch check: TODO(confirm_public_client_naming)</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
