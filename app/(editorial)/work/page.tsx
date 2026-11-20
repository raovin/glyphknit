import type { Metadata } from "next";

import { CaseIndex } from "@/components/case-index";
import { PageHeader } from "@/components/editorial";
import { projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Engineering case studies",
  description: "Case studies in browser testing, data validation and release engineering from Vin Rao at GlyphKnit.",
  path: "/work"
});

const counts = [
  { label: "Client and engagement work", value: projects.filter((p) => p.origin === "GlyphKnit project" || p.origin === "Project engagement").length },
  { label: "Earlier employment", value: projects.filter((p) => p.origin === "Earlier employment").length },
  { label: "Independent projects", value: projects.filter((p) => p.origin === "Independent project").length }
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        aside={
          <dl className="grid border-t border-line">
            {counts.map((count) => (
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-3" key={count.label}>
                <dt className="text-[0.875rem] text-muted">{count.label}</dt>
                <dd className="numeral text-[1.75rem]">{count.value}</dd>
              </div>
            ))}
          </dl>
        }
        eyebrow={<p className="label">Work · case index</p>}
        title={
          <>
            Engineering <em>case studies</em>
          </>
        }
      >
        <p className="lede text-muted">
          Selected work from my consulting practice and earlier product teams. Each case names where the work happened and what I contributed.
        </p>
      </PageHeader>

      <section aria-label="Cases" className="shell pb-[clamp(80px,11vw,152px)]">
        <noscript>
          <style>{".case-filter > [role=group] { display: none; }"}</style>
        </noscript>
        <CaseIndex projects={projects} />
      </section>
    </>
  );
}
