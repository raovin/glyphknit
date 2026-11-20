import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/editorial";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Writing",
    description: "Project notes from GlyphKnit.",
    path: "/writing"
  }),
  robots: {
    index: false,
    follow: false
  }
};

export default function WritingPage() {
  return (
    <div className="pb-[clamp(80px,11vw,152px)]">
      <PageHeader eyebrow={<p className="label">Writing</p>} title="Project notes">
        <p className="lede text-muted">Read the case studies for notes on the work and the decisions behind it.</p>
        <Link className="arrow-link mt-6" href="/work/">
          <span>Read the case studies</span>
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </PageHeader>
    </div>
  );
}
