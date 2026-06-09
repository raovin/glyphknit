import { ArrowRight, FileDown, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ImpactList } from "@/components/impact-list";
import { ProjectCard } from "@/components/project-card";
import { RepoCard } from "@/components/repo-card";
import { Section } from "@/components/section";
import { StackBar } from "@/components/stack-bar";
import { featuredProjects } from "@/content/projects/projects";
import { featuredRepos } from "@/content/repos/repos";
import { experience } from "@/content/experience";
import {
  impactItems,
  primaryStack,
  siteConfig,
  stackGroups,
  workStyle
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="site-shell grid min-h-[calc(100vh-64px)] items-center gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="reveal">
          <p className="mono-label">Senior SDET · ML quality · EU remote</p>
          <h1 className="mt-5 max-w-4xl text-4xl text-balance md:text-6xl">
            {siteConfig.name} - {siteConfig.primaryTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-2xl leading-tight text-[var(--paper)]">
            Most SDETs test the app. I&apos;ve shipped the app.
          </p>
          <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
            Around 9 years building test automation in Python, TypeScript and C#,
            now extending it to ML and data pipelines.
          </p>
          <p className="mt-5 max-w-2xl border-l-2 border-[var(--accent)] pl-4 text-sm text-[var(--text)]">
            {siteConfig.availability}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href="/work"
              icon={<ArrowRight aria-hidden="true" size={17} />}
              variant="primary"
            >
              View work
            </ButtonLink>
            <ButtonLink
              href={siteConfig.resumePageHref}
              icon={<FileDown aria-hidden="true" size={17} />}
            >
              Resume
            </ButtonLink>
          </div>
        </div>
        <div className="hairline-card reveal overflow-hidden p-5">
          <Image
            alt="GlyphKnit system diagram"
            className="h-auto w-full"
            height={620}
            priority
            src="/images/glyphknit-system.svg"
            width={720}
          />
          <div className="mt-5 grid gap-3 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
            <p>
              Test infrastructure, API checks, data validation, and release evidence
              designed as one system.
            </p>
          </div>
        </div>
      </section>

      <StackBar items={primaryStack} meta={siteConfig.locationLine} />

      <Section
        description="Resume-backed case studies that show the delivery pattern, impact, and technical surface without relying on private code."
        eyebrow="01 / Featured projects"
        id="featured"
        title="Work that proves the resume"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard compact key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        description="Repo cards separate public source, private-source case studies, local artifacts, and planned demos."
        eyebrow="02 / Featured code demos"
        title="Code with a review path"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredRepos.map((repo) => (
            <RepoCard key={repo.slug} repo={repo} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="focus-link inline-flex items-center gap-2 text-sm font-semibold" href="/code">
            See all code cards
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Section>

      <Section
        description="Tools pulled from the resume and the approved public repo scan."
        eyebrow="03 / Technical stack"
        title="Built around fast, legible release feedback"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <article className="hairline-card p-5" key={group.title}>
              <h3 className="text-lg">{group.title}</h3>
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
      </Section>

      <Section
        description="Concrete outcomes pulled from the Canvas and Folio resume sources."
        eyebrow="04 / Impact"
        title="Resume-backed outcomes"
      >
        <ImpactList items={impactItems} />
      </Section>

      <Section
        description="A compact timeline of the experience behind the case studies."
        eyebrow="05 / Resume track record"
        title="Nine years across automation, APIs, data, and cloud"
      >
        <ExperienceTimeline compact items={experience} />
      </Section>

      <Section eyebrow="06 / Work style" title="Quality as a system">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workStyle.map((item) => (
            <article className="hairline-card p-5" key={item}>
              <p className="text-sm text-[var(--text)]">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="07 / About" title="A quality engineer who writes product code">
        <div className="grid gap-6 md:grid-cols-[1fr_0.55fr]">
          <p className="text-lg text-[var(--muted)]">
            Physics background from Hamilton College, around 9 years in QA and
            test engineering across Canada, the United States, and Portugal, and
            a working habit of shipping side projects. The current direction is
            quality engineering for ML and data systems: testable behavior,
            validated data paths, and release evidence a team can trust.
          </p>
          <div className="flex items-start md:justify-end">
            <ButtonLink href="/about" icon={<ArrowRight aria-hidden="true" size={17} />}>
              Read about
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="pb-10" eyebrow="08 / Contact" title="Hiring for QA, SDET or ML-quality, or need a contract engineer? Let&apos;s talk.">
        <div className="flex flex-wrap gap-3">
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
          <ButtonLink href={siteConfig.linkedinUrl}>LinkedIn</ButtonLink>
        </div>
      </Section>
    </>
  );
}
