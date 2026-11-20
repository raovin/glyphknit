import { ArrowUpRight, FileDown, Github, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SectionHead, stagger } from "@/components/editorial";
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
    <div className="shell grid gap-14 pb-[clamp(80px,11vw,152px)] pt-14 md:pt-20 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-20">
      <header className="lg:sticky lg:top-[calc(var(--nav-height)+40px)] lg:self-start">
        <p className="fade-in label" style={stagger(0)}>
          Resume
        </p>
        <h1 className="display-1 rise-mask mt-5 !text-[clamp(3rem,2rem+3vw,4.75rem)]">
          <span style={stagger(1)}>{resumeProfile.name}</span>
        </h1>
        <div className="fade-in" style={stagger(2)}>
          <p className="mt-3 font-display text-[1.375rem] italic text-accent">{resumeProfile.title}</p>
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-fg">{resumeProfile.summary}</p>
          <div className="mt-8 grid gap-2">
            <a className="btn btn-primary justify-between" download href={siteConfig.resumeHref}>
              Download PDF
              <FileDown aria-hidden="true" size={16} />
            </a>
            <a className="btn btn-secondary justify-between" href={`mailto:${siteConfig.email}`}>
              Email
              <Mail aria-hidden="true" size={16} />
            </a>
            <a className="btn btn-secondary justify-between" href={siteConfig.githubUrl} rel="noreferrer" target="_blank">
              GitHub
              <Github aria-hidden="true" size={16} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </header>

      <div className="grid gap-20 md:gap-24">
        <section aria-labelledby="experience-title">
          <SectionHead as="h2" id="experience-title" index="01" label="Ownership and earlier employment" />
          <ol className="mt-4">
            {experience.map((item) => (
              <li className="grid gap-4 border-b border-line py-9 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10" key={`${item.publicLabel}-${item.period}`}>
                <div>
                  <p className="font-mono text-[0.8125rem] tabular-nums text-muted">{item.period}</p>
                  <p className={`mt-2 inline-block font-mono text-[0.75rem] ${item.kind === "ownership" ? "text-accent-strong" : "text-faint"}`}>
                    {item.kind === "ownership" ? "Full-time ownership" : "Earlier employment"}
                  </p>
                </div>
                <div>
                  <h3 className="display-3">{item.publicLabel}</h3>
                  <p className="mt-1.5 text-[0.9375rem] text-muted">
                    {item.title} · {item.location}
                  </p>
                  <ul className="mt-5 grid gap-3 text-[0.9375rem] leading-relaxed text-fg">
                    {item.bullets.map((bullet) => (
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent" key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {item.metrics.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <li className="border border-accent/40 bg-accent/5 px-2.5 py-1 font-mono text-[0.75rem] text-accent-strong" key={metric}>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-4 font-mono text-[0.75rem] leading-relaxed text-faint">{item.stack.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="projects-title">
          <SectionHead as="h2" id="projects-title" index="02" label="Selected projects" />
          <ol className="mt-4">
            {resumeProjects.map((project) => (
              <li className="border-b border-line py-9" key={project.title}>
                <h3 className="display-3">
                  <Link className="transition-colors hover:text-accent-strong" href={project.href}>
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-4 max-w-[64ch] text-[0.9375rem] leading-relaxed text-fg">{project.summary}</p>
                <p className="mt-3 max-w-[64ch] text-[0.9375rem] leading-relaxed text-ink">
                  <span className="label mr-2 text-accent-strong">Outcome</span>
                  {project.outcome}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-mono text-[0.75rem] text-faint">{project.stack.join(" · ")}</p>
                  <Link className="arrow-link min-h-0" href={project.href}>
                    <span>Project details</span>
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills-title">
          <SectionHead as="h2" id="skills-title" index="03" label="Technical skills" />
          <dl className="mt-4">
            {resumeSkills.map((group) => (
              <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10" key={group.title}>
                <dt className="font-display text-[1.375rem] leading-tight text-ink">{group.title}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-fg">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="education-title">
          <SectionHead as="h2" id="education-title" index="04" label="Education" />
          <div className="mt-4 grid gap-2 border-b border-line py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
            <p className="font-mono text-[0.8125rem] tabular-nums text-muted">{education.period}</p>
            <div>
              <h3 className="display-3">{education.degree}</h3>
              <p className="mt-1.5 text-[0.9375rem] text-muted">
                {education.institution} · {education.location}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
