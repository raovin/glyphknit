import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/section";
import { demos } from "@/content/demos/demos";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demos",
  description:
    "Runnable, in-browser engineering demos by Vin Rao. Operate a model-output release gate with deterministic scoring, editable cases, and downloadable evidence.",
  path: "/demos"
});

export default function DemosPage() {
  return (
    <>
      <section className="reading-shell py-16 md:py-24">
        <p className="mono-label">Demos</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Things you can actually run</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Most of a portfolio is claims. These are not. Each demo runs entirely in
          your browser, with no sign-up, no clone, and no install. The application
          code behind them is itself the work sample.
        </p>
      </section>

      <Section eyebrow="Live" title="Available now">
        <div className="grid gap-4 md:grid-cols-2">
          {demos.map((demo) => (
            <article className="hairline-card flex h-full flex-col p-5" key={demo.slug}>
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl">{demo.title}</h2>
                <span className="chip whitespace-nowrap">{demo.status}</span>
              </div>
              <p className="mt-4 flex-1 text-sm text-[var(--muted)]">{demo.summary}</p>
              <p className="mt-4 text-sm text-[var(--text)]">{demo.proves}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {demo.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  className="focus-link inline-flex items-center gap-2 text-sm font-semibold"
                  href={demo.href}
                >
                  Open the demo
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
