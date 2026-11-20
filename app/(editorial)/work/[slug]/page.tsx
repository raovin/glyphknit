import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Play } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseRow, originLabel } from "@/components/case-row";
import { CaseToc } from "@/components/case-toc";
import { SectionHead, stagger } from "@/components/editorial";
import { ReadingProgress } from "@/components/reading-progress";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return buildMetadata({ title: "Work", description: "Project case study from Vin Rao.", path: "/work" });
  }

  return buildMetadata({ title: project.title, description: project.summary, path: `/work/${project.slug}` });
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = project.relatedSlugs
    .map((relatedSlug) => projects.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);

  const sections = [
    project.problem ? { id: "problem", label: "Problem" } : null,
    { id: "contribution", label: "Contribution" },
    project.decision ? { id: "decision", label: "Decision" } : null,
    project.impact.length > 0 ? { id: "outcome", label: "Outcome" } : null
  ].filter((section) => section !== null);

  const number = (id: string) => String(sections.findIndex((section) => section.id === id) + 1).padStart(2, "0");

  return (
    <article>
      <ReadingProgress />

      <header className="shell pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="fade-in label flex items-center gap-2" style={stagger(0)}>
          <Link className="inline-flex min-h-10 items-center gap-2 text-muted transition-colors hover:text-ink" href="/work/">
            <ArrowLeft aria-hidden="true" size={14} />
            Work
          </Link>
          <span aria-hidden="true" className="text-faint">/</span>
          <span aria-current="page" className="text-ink">
            Case {String(index + 1).padStart(2, "0")}
          </span>
        </nav>

        <p className="fade-in origin mt-10 md:mt-14" style={stagger(1)}>
          {originLabel[project.origin]} · {project.sector}
        </p>
        <h1 className="display-1 rise-mask mt-6 max-w-[17ch]">
          <span style={stagger(1)}>{project.title}</span>
        </h1>

        <div className="fade-in mt-12 grid gap-10 border-t border-rule pt-8 md:mt-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20" style={stagger(3)}>
          <p className="lede">{project.context}</p>
          <dl className="grid content-start text-[0.875rem]">
            <div className="flex justify-between gap-4 border-b border-line py-2.5">
              <dt className="text-muted">Origin</dt>
              <dd className="text-right text-ink">{originLabel[project.origin]}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2.5">
              <dt className="text-muted">Sector</dt>
              <dd className="text-right text-ink">{project.sector}</dd>
            </div>
            {project.repoUrl ? (
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">Source</dt>
                <dd>
                  <a className="link inline-flex items-center gap-1" href={project.repoUrl} rel="noreferrer" target="_blank">
                    Public repository <ArrowUpRight aria-hidden="true" size={13} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            ) : null}
            {project.demoUrl ? (
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">Demo</dt>
                <dd>
                  <Link className="link inline-flex items-center gap-1" href={project.demoUrl}>
                    Try it in the lab <Play aria-hidden="true" size={12} />
                  </Link>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      <div className="shell section grid gap-12 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-20">
        <CaseToc sections={sections} />

        <div className="grid max-w-[46rem] gap-16 md:gap-20">
          {project.problem ? (
            <section aria-labelledby="problem" className="scroll-mt-32">
              <SectionHead as="h2" id="problem" index={number("problem")} label="Problem" />
              <p className="prose-ed mt-6 text-[1.1875rem]">{project.problem}</p>
            </section>
          ) : null}

          <section aria-labelledby="contribution" className="scroll-mt-32">
            <SectionHead as="h2" id="contribution" index={number("contribution")} label="Contribution" />
            <p className="prose-ed mt-6 text-[1.1875rem]">{project.role}</p>
          </section>

          {project.decision ? (
            <section aria-labelledby="decision" className="scroll-mt-32">
              <SectionHead as="h2" id="decision" index={number("decision")} label="Decision" />
              <Reveal>
                <blockquote className="pull mt-8">{project.decision}</blockquote>
              </Reveal>
            </section>
          ) : null}

          {project.impact.length > 0 ? (
            <section aria-labelledby="outcome" className="scroll-mt-32">
              <SectionHead as="h2" id="outcome" index={number("outcome")} label="Outcome" />
              <ul className="mt-6 border-t border-line">
                {project.impact.map((item, impactIndex) => (
                  <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 border-b border-line py-6" key={item}>
                    <span className="pt-1.5 font-mono text-[0.75rem] tabular-nums text-accent-strong">{String.fromCharCode(97 + impactIndex)}.</span>
                    <p className="font-display text-[clamp(1.375rem,1.15rem+0.9vw,1.875rem)] leading-[1.2] text-ink">{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.evidence ? (
            <aside className="border-l-2 border-accent bg-raised/50 px-5 py-4 text-[0.9375rem] leading-relaxed text-fg">
              <p className="label mb-2">Note on evidence</p>
              {project.evidence}
            </aside>
          ) : null}

          {project.repoUrl || project.demoUrl ? (
            <div className="flex flex-wrap gap-3">
              {project.demoUrl ? (
                <Link className="btn btn-secondary" href={project.demoUrl}>
                  Try the demo
                  <Play aria-hidden="true" size={15} />
                </Link>
              ) : null}
              {project.repoUrl ? (
                <a className="btn btn-secondary" href={project.repoUrl} rel="noreferrer" target="_blank">
                  Repository
                  <Github aria-hidden="true" size={15} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      <section aria-labelledby="inquiry-title" className="border-y border-rule bg-raised/40">
        <div className="shell grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-20">
          <div>
            <h2 className="display-2 max-w-[16ch]" id="inquiry-title">
              Discuss a <em>similar</em> project
            </h2>
            <p className="mt-5 max-w-[48ch] text-muted">The inquiry form will reference this case. You can remove the reference before you send anything.</p>
          </div>
          <Link className="btn btn-primary" href={`/contact/?project=${project.slug}`}>
            Start an inquiry
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      {related.length > 0 ? (
        <section aria-labelledby="related-title" className="shell section">
          <SectionHead as="h2" id="related-title" label="Related work" />
          <div className="mt-6">
            {related.map((item) => (
              <CaseRow key={item.slug} number={projects.indexOf(item) + 1} project={item} />
            ))}
          </div>
        </section>
      ) : null}

      <nav aria-label="More cases" className="shell grid grid-cols-2 border-t border-line">
        <Link className="group flex flex-col gap-2 py-8 pr-4" href={`/work/${previous.slug}/`}>
          <span className="label inline-flex items-center gap-2">
            <ArrowLeft aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" size={13} /> Previous
          </span>
          <span className="font-display text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] leading-tight text-ink transition-colors group-hover:text-accent-strong">{previous.title}</span>
        </Link>
        <Link className="group flex flex-col items-end gap-2 border-l border-line py-8 pl-4 text-right" href={`/work/${next.slug}/`}>
          <span className="label inline-flex items-center gap-2">
            Next <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" size={13} />
          </span>
          <span className="font-display text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] leading-tight text-ink transition-colors group-hover:text-accent-strong">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
