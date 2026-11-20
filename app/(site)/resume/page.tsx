import { ArrowUpRight, FileDown, Github, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Section } from "@/components/section";
import { education, experience, resumeProfile, resumeProjects, resumeSkills } from "@/content/experience";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "Vin Rao's project work, QA and SDET experience, technical skills, and education. Read the public resume or download the matching PDF.",
  path: "/resume"
});

export default function ResumePage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Resume / {resumeProfile.name}</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{resumeProfile.title}</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">{resumeProfile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink download href={siteConfig.resumeHref} icon={<FileDown aria-hidden="true" size={17} />} variant="primary">
            Download PDF
          </ButtonLink>
          <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail aria-hidden="true" size={17} />}>
            Email
          </ButtonLink>
          <ButtonLink href={siteConfig.githubUrl} icon={<Github aria-hidden="true" size={17} />}>
            GitHub
          </ButtonLink>
        </div>
      </section>

      <Section title="Selected projects">
        <div className="grid gap-4">
          {resumeProjects.map((project) => (
            <article className="hairline-card p-5 md:p-7" key={project.title}>
              <h3 className="text-2xl">{project.title}</h3>
              <p className="mt-4 max-w-4xl text-[var(--muted)]">{project.summary}</p>
              <p className="mt-3 text-[var(--paper)]">{project.outcome}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
              </div>
              <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--accent)]" href={project.href}>
                Read project details <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Ownership and earlier employment">
        <ExperienceTimeline items={experience} />
      </Section>

      <Section title="Technical skills">
        <div className="grid gap-4 md:grid-cols-2">
          {resumeSkills.map((group) => (
            <article className="hairline-card p-5" key={group.title}>
              <h3 className="text-xl">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Education" title={education.degree}>
        <article className="hairline-card p-5">
          <h3 className="text-xl">{education.institution}</h3>
          <p className="mt-3 text-[var(--muted)]">{education.period} · {education.location}</p>
        </article>
      </Section>
    </>
  );
}
