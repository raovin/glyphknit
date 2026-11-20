import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { demos } from "@/content/demos/demos";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demos",
  description:
    "Interactive engineering demos by Vin Rao. Try a model-output release gate and separate registration browser-flow checks from message delivery checks.",
  path: "/demos"
});

export default function DemosPage() {
  return (
    <>
      <section className="site-shell py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl">Interactive demos</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Try both checks in your browser with synthetic data.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {demos.map((demo) => (
            <article className="hairline-card flex h-full flex-col p-5" key={demo.slug}>
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl">{demo.title}</h2>
              </div>
              <p className="mt-4 flex-1 text-sm text-[var(--muted)]">{demo.summary}</p>
              <p className="mt-4 text-sm text-[var(--text)]">{demo.contribution}</p>
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
              {demo.relatedCaseStudy ? (
                <Link className="focus-link mt-4 text-sm text-[var(--muted)]" href={demo.relatedCaseStudy.href}>
                  {demo.relatedCaseStudy.label}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
