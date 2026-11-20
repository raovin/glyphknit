import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { RepoCard } from "@/components/repo-card";
import { Section } from "@/components/section";
import { repos } from "@/content/repos/repos";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Code",
  description:
    "Source code and implementation notes for independent projects by Vin Rao.",
  path: "/code"
});

export default function CodePage() {
  const publicRepos = repos.filter((repo) => repo.kind === "Public source");
  const privateProjects = repos.filter((repo) => repo.kind === "Private project");

  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl">Code and implementation notes</h1>
        <p className="mt-5">
          <Link
            className="focus-link inline-flex items-center gap-2 text-sm font-semibold"
            href="/demos/eval-gate/"
          >
            Try the browser demo
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </p>
      </section>
      <Section title="Public repositories">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {publicRepos.map((repo) => (
            <RepoCard key={repo.slug} repo={repo} />
          ))}
        </div>
      </Section>
      <Section title="Private projects">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {privateProjects.map((repo) => (
            <RepoCard key={repo.slug} repo={repo} />
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <p className="text-[var(--muted)]">
          For work delivered inside product teams, <Link className="focus-link font-semibold" href="/work/">read the case studies</Link>.
        </p>
      </Section>
    </>
  );
}
