import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import type { Repo } from "@/content/repos/repos";

const statusLabels = {
  public: "public source",
  private: "private source",
  planned: "planned",
  local: "local artifact"
};

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="hairline-card reveal flex h-full flex-col p-5 transition hover:border-[var(--accent)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono-label">{repo.priority} priority</p>
          <h3 className="mt-2 text-xl">{repo.name}</h3>
        </div>
        {repo.status ? (
          <span className="chip whitespace-nowrap">{statusLabels[repo.status]}</span>
        ) : null}
      </div>
      <p className="mt-4 flex-1 text-sm text-[var(--muted)]">{repo.description}</p>
      <p className="mt-4 text-sm text-[var(--text)]">{repo.proves}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {repo.stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
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
            rel="noreferrer"
            target="_blank"
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
