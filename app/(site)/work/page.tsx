import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Selected project and case study work from Vin Rao, Senior SDET and ML-quality engineer.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Work</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Projects and case studies</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Public showcase work only. Private infrastructure and third-party forks
          were excluded from the portfolio content pass.
        </p>
      </section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
