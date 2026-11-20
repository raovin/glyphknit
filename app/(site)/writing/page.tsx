import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Writing",
    description:
      "Project notes from GlyphKnit.",
    path: "/writing"
  }),
  robots: {
    index: false,
    follow: false
  }
};

export default function WritingPage() {
  return (
    <section className="reading-shell py-16 md:py-24">
      <p className="mono-label">Writing</p>
      <h1 className="mt-4 text-4xl md:text-5xl">Project notes</h1>
      <p className="mt-5 text-lg text-[var(--muted)]">
        Read the <Link className="focus-link" href="/work/">case studies</Link> for notes on the work and the decisions behind it.
      </p>
    </section>
  );
}
