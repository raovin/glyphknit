import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Writing",
  description:
    "Writing scaffold for Vin Rao. Hidden from navigation until three posts exist.",
  path: "/writing"
});

export default function WritingPage() {
  return (
    <section className="reading-shell py-16 md:py-24">
      <p className="mono-label">Writing</p>
      <h1 className="mt-4 text-4xl md:text-5xl">Writing scaffold</h1>
      <p className="mt-5 text-lg text-[var(--muted)]">
        TODO(writing): keep this route out of navigation until three posts exist.
      </p>
    </section>
  );
}
