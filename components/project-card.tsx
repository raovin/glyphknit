import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/content/projects/projects";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="hairline-card reveal flex h-full flex-col p-5 transition hover:border-[var(--accent)]">
      <div className="flex flex-wrap items-center gap-2">
        {project.nda ? <span className="chip">NDA</span> : <span className="chip">Public</span>}
        {project.tooling.slice(0, compact ? 3 : 5).map((tool) => (
          <span className="chip" key={tool}>
            {tool}
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-xl">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm text-[var(--muted)]">{project.summary}</p>
      <p className="mt-4 text-sm text-[var(--text)]">{project.proves}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--paper)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          href={`/work/${project.slug}`}
        >
          <ArrowRight aria-hidden="true" size={16} />
          Case study
        </Link>
        {project.repoUrl ? (
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
            href={project.repoUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={16} />
            Code
          </a>
        ) : null}
        {project.demoUrl ? (
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
            href={project.demoUrl}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink aria-hidden="true" size={16} />
            Live
          </a>
        ) : null}
      </div>
    </article>
  );
}
