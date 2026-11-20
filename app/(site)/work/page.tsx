import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Engineering case studies",
  description:
    "Case studies in browser testing, data validation and release engineering from Vin Rao at GlyphKnit.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <>
      <section className="site-shell pt-16 md:pt-24" aria-labelledby="case-studies">
        <h1 id="case-studies" className="text-4xl md:text-5xl">Engineering case studies</h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
          Selected work from my consulting practice and earlier product teams.
        </p>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
          {projects.filter((project) => project.origin !== "Independent project").map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h2" />
          ))}
        </div>
      </section>
      <Section title="Independent projects">
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.filter((project) => project.origin === "Independent project").map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
