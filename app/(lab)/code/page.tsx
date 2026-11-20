import { ArrowRight, FileText, Github, Play } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader, SectionHead } from "@/components/editorial";
import { LabStatus } from "@/components/lab";
import { repos, type Repo } from "@/content/repos/repos";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Code",
  description: "Source code and implementation notes for independent projects by Vin Rao.",
  path: "/code"
});

function RepoRow({ repo }: { repo: Repo }) {
  return (
    <li className="grid gap-4 border-b border-line py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_20rem]">
      <div>
        <h3 className="display-3">{repo.name}</h3>
        {repo.repoUrl ? <p className="mt-2 font-mono text-[0.8125rem] text-faint">{repo.repoUrl.replace("https://github.com/", "")}</p> : null}
      </div>
      <p className="text-[0.9375rem] leading-relaxed text-muted">{repo.description}</p>
      <div className="flex flex-wrap gap-2 md:col-start-2 lg:col-start-3 lg:justify-end">
        {repo.repoUrl ? (
          <a className="btn btn-secondary min-h-10 px-3.5 text-[0.875rem]" href={repo.repoUrl} rel="noreferrer" target="_blank">
            <Github aria-hidden="true" size={15} />
            Repository
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
        {repo.demoUrl ? (
          <Link className="btn btn-secondary min-h-10 px-3.5 text-[0.875rem]" href={repo.demoUrl}>
            <Play aria-hidden="true" size={14} />
            Demo
          </Link>
        ) : null}
        {repo.reportUrl ? (
          <Link className="btn btn-secondary min-h-10 px-3.5 text-[0.875rem]" href={repo.reportUrl}>
            <FileText aria-hidden="true" size={15} />
            Case study
          </Link>
        ) : null}
      </div>
    </li>
  );
}

export default function CodePage() {
  const publicRepos = repos.filter((repo) => repo.kind === "Public source");
  const privateProjects = repos.filter((repo) => repo.kind === "Private project");

  return (
    <>
      <PageHeader eyebrow={<LabStatus>Lab · source</LabStatus>} title="Code and implementation notes">
        <Link className="arrow-link" href="/demos/eval-gate/">
          <span>Try the browser demo</span>
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </PageHeader>

      <section aria-labelledby="public-title" className="shell">
        <SectionHead as="h2" id="public-title" index="01" label="Public repositories" />
        <ul className="mt-4">
          {publicRepos.map((repo) => (
            <RepoRow key={repo.slug} repo={repo} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="private-title" className="shell section">
        <SectionHead as="h2" id="private-title" index="02" label="Private projects" />
        <ul className="mt-4">
          {privateProjects.map((repo) => (
            <RepoRow key={repo.slug} repo={repo} />
          ))}
        </ul>
        <p className="mt-10 text-muted">
          For work delivered inside product teams,{" "}
          <Link className="link" href="/work/">
            read the case studies
          </Link>
          .
        </p>
      </section>
    </>
  );
}
