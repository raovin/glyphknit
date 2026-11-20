import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import type { Repo } from "@/content/repos/repos";

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="hairline-card reveal flex h-full flex-col p-5 transition hover:border-[var(--accent)]">
      <h3 className="text-xl">{repo.name}</h3>
      <p className="mt-4 flex-1 text-sm text-[var(--muted)]">{repo.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {repo.repoUrl ? (
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--paper)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
            href={repo.repoUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={16} />
            Repository
          </a>
        ) : null}
        {repo.demoUrl ? (
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
            href={repo.demoUrl}
            {...(repo.demoUrl.startsWith("http") ? { rel: "noreferrer", target: "_blank" } : {})}
          >
            <ExternalLink aria-hidden="true" size={16} />
            Demo
          </a>
        ) : null}
        {repo.reportUrl ? (
          <Link
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
            href={repo.reportUrl}
          >
            <ExternalLink aria-hidden="true" size={16} />
            Case study
          </Link>
        ) : null}
      </div>
    </article>
  );
}
