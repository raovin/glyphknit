import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/content/projects/projects";

export const originLabel: Record<Project["origin"], string> = {
  "GlyphKnit project": "GlyphKnit client project",
  "Project engagement": "Project engagement",
  "Earlier employment": "Earlier employment",
  "Independent project": "Independent project"
};

export function CaseRow({
  project,
  number,
  headingLevel: Heading = "h3"
}: {
  project: Project;
  number?: number;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <Link
      className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-3 border-b border-line py-7 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--surface-raised)_55%,transparent)] md:grid-cols-[3.5rem_minmax(0,1.15fr)_minmax(0,0.85fr)_2rem] md:gap-x-8 md:px-3 md:py-8"
      href={`/work/${project.slug}/`}
    >
      <span aria-hidden="true" className="hidden pt-1 font-mono text-[0.8125rem] tabular-nums text-faint md:block">
        {number !== undefined ? String(number).padStart(2, "0") : ""}
      </span>
      <div className="min-w-0">
        <p className="origin">
          {originLabel[project.origin]} · {project.sector}
        </p>
        <Heading className="display-3 mt-3 transition-colors duration-300 group-hover:text-accent-strong">{project.title}</Heading>
      </div>
      <p className="col-span-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted md:col-span-1 md:pt-7">{project.summary}</p>
      <ArrowUpRight
        aria-hidden="true"
        className="col-start-2 row-start-1 mt-1 text-faint transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:col-start-4"
        size={22}
        strokeWidth={1.5}
      />
    </Link>
  );
}
