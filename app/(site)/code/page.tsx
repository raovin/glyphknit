import type { Metadata } from "next";

import { RepoCard } from "@/components/repo-card";
import { Section } from "@/components/section";
import { repos } from "@/content/repos/repos";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Code",
  description:
    "Repo showcase cards for Vin Rao covering Playwright, Python, pytest, MLOps quality gates, CI/CD testing, and data validation.",
  path: "/code"
});

export default function CodePage() {
  const high = repos.filter((repo) => repo.priority === "high");
  const medium = repos.filter((repo) => repo.priority === "medium");

  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Code</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Repository evidence</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Public source links appear only when the repository is public. Private
          and local artifacts point to case-study evidence instead of dead links.
        </p>
      </section>
      <Section eyebrow="High priority" title="Best proof for the target roles">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {high.map((repo) => (
            <RepoCard key={repo.slug} repo={repo} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Medium priority" title="Supporting artifacts">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {medium.map((repo) => (
            <RepoCard key={repo.slug} repo={repo} />
          ))}
        </div>
      </Section>
    </>
  );
}
