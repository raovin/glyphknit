"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";

import type { Project, ProjectOrigin } from "@/content/projects/projects";

import { CaseRow } from "./case-row";

const filters: { key: string; label: string; origins: ProjectOrigin[] }[] = [
  { key: "all", label: "All", origins: ["GlyphKnit project", "Project engagement", "Earlier employment", "Independent project"] },
  { key: "client", label: "Client work", origins: ["GlyphKnit project", "Project engagement"] },
  { key: "employment", label: "Earlier employment", origins: ["Earlier employment"] },
  { key: "independent", label: "Independent", origins: ["Independent project"] }
];

export function CaseIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");
  const filter = filters.find((item) => item.key === active) ?? filters[0];
  const visible = projects.filter((project) => filter.origins.includes(project.origin));

  return (
    <div>
      <div className="case-filter flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-4">
        <div aria-label="Filter cases by origin" className="flex flex-wrap gap-1" role="group">
          {filters.map((item) => {
            const count = projects.filter((project) => item.origins.includes(project.origin)).length;
            const selected = item.key === active;
            return (
              <button
                aria-pressed={selected}
                className={`relative inline-flex min-h-10 items-center gap-2 px-3 text-[0.875rem] transition-colors duration-200 ${selected ? "text-ink" : "text-muted hover:text-ink"}`}
                key={item.key}
                onClick={() => setActive(item.key)}
                type="button"
              >
                {selected ? (
                  <m.span
                    aria-hidden="true"
                    className="absolute inset-0 border border-line bg-surface"
                    layoutId="case-filter"
                    transition={{ type: "spring", stiffness: 480, damping: 38 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
                <span className="relative font-mono text-[0.75rem] tabular-nums text-faint">{count}</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="label">
          Showing {visible.length} of {projects.length}
        </p>
      </div>

      <ul>
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project) => (
            <m.li
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6, transition: { duration: 0.18 } }}
              initial={{ opacity: 0, y: 10 }}
              key={project.slug}
              layout="position"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <CaseRow headingLevel="h2" number={projects.indexOf(project) + 1} project={project} />
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
