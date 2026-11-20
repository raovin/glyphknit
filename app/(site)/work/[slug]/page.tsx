import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return buildMetadata({
      title: "Work",
      description: "Project case study from Vin Rao.",
      path: "/work"
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`
  });
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="reading-shell py-12 md:py-20">
      <Link className="focus-link inline-flex items-center gap-2 text-sm font-semibold" href="/work">
        <ArrowLeft aria-hidden="true" size={16} />
        All case studies
      </Link>

      <header className="mt-8">
        <p className="mono-label">{project.sector} · {project.origin}</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{project.title}</h1>
        <p className="mt-5 text-[var(--muted)]">{project.context}</p>
      </header>

      <div className="mt-8 space-y-5 text-lg text-[var(--muted)]">
        {project.problem && <p>{project.problem}</p>}
        <p>{project.role}</p>
      </div>

      {project.decision && (
        <section className="mt-10 border-t border-[var(--line)] pt-8">
          <h2 className="text-2xl">The decision</h2>
          <p className="mt-4 text-[var(--muted)]">{project.decision}</p>
        </section>
      )}

      {project.impact.length > 0 && (
        <section className="mt-10 border-t border-[var(--line)] pt-8">
          <h2 className="text-2xl">Outcome</h2>
          {project.impact.length === 1 ? (
            <p className="mt-4 text-[var(--muted)]">{project.impact[0]}</p>
          ) : (
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[var(--muted)]">
              {project.impact.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
        </section>
      )}
      {project.evidence && <p className="mt-5 text-sm text-[var(--muted)]">{project.evidence}</p>}
        {project.repoUrl || project.demoUrl ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repoUrl ? (
              <ButtonLink
                href={project.repoUrl}
                icon={<Github aria-hidden="true" size={17} />}
                rel="noreferrer"
                target="_blank"
              >
                Repository
              </ButtonLink>
            ) : null}
            {project.demoUrl ? (
              <ButtonLink
                href={project.demoUrl}
                icon={<ExternalLink aria-hidden="true" size={17} />}
                {...(project.demoUrl.startsWith("http") ? { rel: "noreferrer", target: "_blank" } : {})}
              >
                Try the demo
              </ButtonLink>
            ) : null}
          </div>
        ) : null}

      <div className="mt-8">
        <ButtonLink href={`/contact/?project=${project.slug}`} icon={<ArrowRight aria-hidden="true" size={17} />} variant="primary">
          Discuss a similar project
        </ButtonLink>
      </div>
      <section className="mt-12 border-t border-[var(--line)] pt-8" aria-labelledby="related-work">
        <h2 className="text-2xl" id="related-work">Related work</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {project.relatedSlugs.map((relatedSlug) => projects.find((item) => item.slug === relatedSlug)).filter((item) => item !== undefined).map((related) => (
            <Link className="hairline-card focus-link p-5" href={`/work/${related.slug}/`} key={related.slug}>
              <p className="mono-label">{related.sector}</p>
              <h3 className="mt-3 text-lg">{related.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{related.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Read the case study <ArrowRight aria-hidden="true" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
