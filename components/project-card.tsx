import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/content/projects/projects";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({ project, headingLevel: Heading = "h3" }: ProjectCardProps) {
  return (
    <article className="hairline-card reveal relative flex h-full flex-col p-5 transition hover:border-[var(--accent)] focus-within:border-[var(--accent)]">
      <p className="mono-label">{project.sector}</p>
      <Heading className="mt-5 text-xl">
        <Link className="focus-link flex items-start justify-between gap-3 after:absolute after:inset-0" href={`/work/${project.slug}/`}>
          {project.title}
          <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-[var(--accent)]" size={18} />
        </Link>
      </Heading>
      <p className="mt-3 flex-1 text-sm text-[var(--muted)]">{project.summary}</p>
      {(project.repoUrl || project.demoUrl) && <div className="relative mt-6 flex w-fit flex-wrap gap-2">
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
            {...(project.demoUrl.startsWith("http") ? { rel: "noreferrer", target: "_blank" } : {})}
          >
            <ExternalLink aria-hidden="true" size={16} />
            Try the demo
          </a>
        ) : null}
      </div>}
    </article>
  );
}
