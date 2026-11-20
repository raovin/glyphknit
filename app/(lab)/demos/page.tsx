import { ArrowRight, ArrowUpRight, Github, Play } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader, SectionHead } from "@/components/editorial";
import { LabStatus, Readout } from "@/components/lab";
import { Reveal } from "@/components/reveal";
import { demos } from "@/content/demos/demos";
import { repos } from "@/content/repos/repos";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demos",
  description:
    "Interactive engineering demos by Vin Rao. Try a model-output release gate and separate registration browser-flow checks from message delivery checks.",
  path: "/demos"
});

export default function DemosPage() {
  const publicRepos = repos.filter((repo) => repo.kind === "Public source");

  return (
    <>
      <PageHeader
        aside={
          <Readout
            rows={[
              ["Demos", demos.length],
              ["Data", "Synthetic"],
              ["Runs in", "Your browser"],
              ["Real messages sent", "None"]
            ]}
          />
        }
        eyebrow={<LabStatus>Lab · interactive demos</LabStatus>}
        title="Change the inputs. Inspect the checks."
      >
        <p className="lede text-muted">Try both checks in your browser with synthetic data.</p>
      </PageHeader>

      <section aria-label="Demos" className="shell">
        <ol className="border-t border-rule">
          {demos.map((demo, index) => (
            <li className="border-b border-line" key={demo.slug}>
              <Reveal delay={index * 0.06}>
                <article className="grid gap-8 py-12 md:py-16 lg:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
                  <span aria-hidden="true" className="numeral text-[2.5rem] text-accent-strong">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="display-2">
                      <Link className="transition-colors hover:text-accent-strong" href={demo.href}>
                        {demo.title}
                      </Link>
                    </h2>
                    <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-relaxed text-fg">{demo.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {demo.stack.map((item) => (
                        <li className="chip" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
                    <p className="label">What I built</p>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{demo.contribution}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto lg:pt-8">
                      <Link className="btn btn-primary" href={demo.href}>
                        <Play aria-hidden="true" size={15} />
                        Open the demo
                      </Link>
                      {demo.relatedCaseStudy ? (
                        <Link className="arrow-link" href={demo.relatedCaseStudy.href}>
                          <span>{demo.relatedCaseStudy.label}</span>
                          <ArrowRight aria-hidden="true" size={15} />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="source-title" className="shell section">
        <SectionHead as="h2" id="source-title" label="Source" meta={<Link className="link text-muted" href="/code/">All code</Link>} />
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {publicRepos.map((repo) => (
            <li key={repo.slug}>
              <a className="group flex h-full flex-col border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent" href={repo.repoUrl} rel="noreferrer" target="_blank">
                <span className="flex items-center justify-between gap-4 font-mono text-[0.8125rem] text-faint">
                  <span className="inline-flex items-center gap-2">
                    <Github aria-hidden="true" size={15} /> {repo.repoUrl?.replace("https://github.com/", "")}
                  </span>
                  <ArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={16} />
                </span>
                <span className="mt-6 text-[1.25rem] font-medium tracking-[-0.03em] text-ink">{repo.name}</span>
                <span className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{repo.description}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
