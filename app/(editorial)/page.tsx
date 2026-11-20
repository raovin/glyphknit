import { ArrowDown, ArrowRight, ArrowUpRight, Check, Github, Mail, Play } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

import { CaseRow } from "@/components/case-row";
import { Figure, SectionHead, stagger } from "@/components/editorial";
import { Reveal } from "@/components/reveal";
import { DEFAULT_THRESHOLD, SAMPLE_CASES_JSONL } from "@/content/demos/eval-gate-cases";
import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";
import { decide, evaluateCases } from "@/lib/eval/evaluate";
import { parseCases } from "@/lib/eval/parse";

// The homepage figure shows the demo's real default run, computed at build time.
const gateOutcomes = evaluateCases(parseCases(SAMPLE_CASES_JSONL).cases, DEFAULT_THRESHOLD);
const gateDecision = decide(gateOutcomes, DEFAULT_THRESHOLD);

const contents = [
  { href: "#case-cloud", title: "Browser and API tests for a cloud application", origin: "GlyphKnit client project" },
  { href: "#case-ci", title: "Cutting CI feedback from three hours to 25 minutes", origin: "Earlier employment" },
  { href: "#case-gate", title: "A repeatable model-output release gate", origin: "Independent project" }
];

const stages = [
  {
    when: "On a change",
    title: "Test the changed behavior",
    text: "Run the smallest check that can catch the fault. If an API returns the wrong value, a developer can investigate it without replaying a browser session."
  },
  {
    when: "Before a release",
    title: "Follow a critical journey",
    text: "Follow a request across the application. Check who can make it, what the service returns and what reaches the database."
  },
  {
    when: "On a schedule",
    title: "Run the broader suite",
    text: "Longer regression runs can cover more markets and environments. A failure here still needs an owner, even if the latest change passed."
  }
];

const sheet = (index: number) => ({ "--sheet": index }) as CSSProperties;

export default function HomePage() {
  const engagements = projects.filter((project) => project.origin === "Project engagement");

  return (
    <>
      {/* Masthead and hero */}
      <section aria-labelledby="hero-title" className="shell">
        <div className="fade-in flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-rule pb-3 pt-6 md:pt-8" style={stagger(0)}>
          <p className="label text-ink">Independent quality engineering</p>
          <p className="label inline-flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Taking on scoped projects
          </p>
        </div>

        <h1 className="display-1 mt-10 md:mt-16" id="hero-title">
          <span className="rise-mask"><span style={stagger(0)}>GlyphKnit builds</span></span>
          <span className="rise-mask"><span style={stagger(1)}>test systems and</span></span>
          <span className="rise-mask"><span style={stagger(2)}><em>release pipelines.</em></span></span>
        </h1>

        <div className="mt-12 grid gap-12 border-t border-line pt-8 pb-16 md:mt-16 md:pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div className="fade-in" style={stagger(3)}>
            <p className="lede">
              I&apos;m Vin Rao. I build browser and API tests, check the data they produce, and wire those checks into your release pipeline.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link className="btn btn-primary" href="/contact/">
                Start a project
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <a className="arrow-link" href="#selected-work">
                <span>Read the selected work</span>
                <ArrowDown aria-hidden="true" size={16} />
              </a>
            </div>
          </div>

          <nav aria-label="Selected work" className="fade-in" style={stagger(4)}>
            <p className="label">In this issue</p>
            <ol className="mt-4 border-t border-line">
              {contents.map((item, index) => (
                <li className="border-b border-line" key={item.href}>
                  <a className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-3 py-4" href={item.href}>
                    <span className="font-mono text-[0.8125rem] tabular-nums text-faint">0{index + 1}</span>
                    <span>
                      <span className="block font-display text-[1.375rem] leading-[1.15] text-ink transition-colors duration-300 group-hover:text-accent-strong">
                        {item.title}
                      </span>
                      <span className="origin mt-1 block">{item.origin}</span>
                    </span>
                    <ArrowDown aria-hidden="true" className="text-faint transition-transform duration-300 group-hover:translate-y-0.5" size={16} />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* 01 Selected work */}
      <section aria-labelledby="selected-work-title" className="shell section pt-0" id="selected-work">
        <SectionHead
          as="h2"
          id="selected-work-title"
          index="01"
          label="Selected work"
          meta={
            <Link className="link text-muted" href="/work/">
              All {projects.length} cases
            </Link>
          }
        />

        <div className="stack-deck mt-10 grid gap-8 md:mt-14 lg:gap-10">
          <article aria-labelledby="case-cloud-title" className="stack-sheet scroll-mt-28" id="case-cloud" style={sheet(0)}>
            <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:p-14">
              <div className="flex flex-col">
                <p className="origin">GlyphKnit client project · Cloud software</p>
                <h3 className="display-2 mt-5" id="case-cloud-title">
                  <Link className="transition-colors hover:text-accent-strong" href="/work/cloud-backed-sdet-frameworks/">
                    Browser and API tests for a cloud application
                  </Link>
                </h3>
                <p className="prose-ed mt-6 text-muted">
                  I built browser tests for the main user journeys and separate API checks for the services behind them. When a browser test failed, the team could check the service directly.
                </p>
                <div className="mt-auto flex flex-wrap gap-x-7 gap-y-1 pt-8">
                  <Link className="arrow-link" href="/work/cloud-backed-sdet-frameworks/">
                    <span>Read the case</span>
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                  <Link className="arrow-link" href="/contact/?project=cloud-backed-sdet-frameworks">
                    <span>Discuss a similar project</span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>

              <Figure caption="Client engagement outcomes. Code and reports remain private." number={1} title="Test scope">
                <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-3">
                  <div className="border border-line bg-bg p-4">
                    <p className="label">Browser journeys</p>
                    <p className="mt-3 text-[0.9375rem] font-medium text-ink">Playwright + Cypress</p>
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center justify-center gap-1 text-faint">
                    <span className="h-6 w-px bg-line" />
                    <ArrowRight size={14} />
                    <span className="h-6 w-px bg-line" />
                  </div>
                  <div className="border border-line bg-bg p-4">
                    <p className="label">Service checks</p>
                    <p className="mt-3 text-[0.9375rem] font-medium text-ink">Python API tests</p>
                  </div>
                </div>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6">
                  <div>
                    <dt className="sr-only">Test execution time</dt>
                    <dd className="numeral text-[clamp(3.5rem,2.5rem+3vw,5.5rem)]">
                      70<span className="text-[0.5em] text-accent">%</span>
                    </dd>
                    <dd className="mt-2 max-w-[18ch] text-[0.875rem] leading-snug text-muted">less test execution time during the engagement</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Automated coverage</dt>
                    <dd className="numeral text-[clamp(3.5rem,2.5rem+3vw,5.5rem)]">
                      70<span className="text-[0.5em] text-accent">%</span>
                    </dd>
                    <dd className="mt-2 max-w-[18ch] text-[0.875rem] leading-snug text-muted">automated coverage reached in six months</dd>
                  </div>
                </dl>
              </Figure>
            </div>
          </article>

          <article aria-labelledby="case-ci-title" className="stack-sheet scroll-mt-28" id="case-ci" style={sheet(1)}>
            <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:p-14">
              <div className="flex flex-col">
                <p className="origin">Financial data platform · Earlier employment</p>
                <h3 className="display-2 mt-5" id="case-ci-title">
                  <Link className="transition-colors hover:text-accent-strong" href="/work/financial-data-quality-platform/">
                    Cutting CI feedback from three hours to 25 minutes
                  </Link>
                </h3>
                <div className="prose-ed mt-6 text-muted">
                  <p>A successful API request could still leave the wrong value in the database. I checked both the response and the stored data.</p>
                  <p>I ran independent checks in parallel in Jenkins so developers could get the regression results sooner.</p>
                </div>
                <div className="mt-auto pt-8">
                  <Link className="arrow-link" href="/work/financial-data-quality-platform/">
                    <span>Read the case</span>
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>

              <Figure caption="Illustrative pipeline. Feedback times are from the financial data role." number={2} title="Jenkins feedback time">
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="label">Before</p>
                    <p className="numeral mt-2 text-[clamp(3.5rem,2.5rem+3vw,5.5rem)] text-faint">
                      3<span className="text-[0.5em]">h</span>
                    </p>
                  </div>
                  <ArrowRight aria-hidden="true" className="mb-5 text-faint" size={28} strokeWidth={1.25} />
                  <div className="text-right">
                    <p className="label">After</p>
                    <p className="numeral mt-2 text-[clamp(3.5rem,2.5rem+3vw,5.5rem)] text-accent">
                      25<span className="text-[0.5em]">m</span>
                    </p>
                  </div>
                </div>

                <div aria-hidden="true" className="mt-8 grid grid-cols-[minmax(0,1fr)_4.5rem] items-center gap-x-3 gap-y-4 font-mono text-[0.75rem]">
                  {[
                    { label: "180 min", width: "100%", line: "bg-rule", tick: "bg-rule", text: "text-ink" },
                    { label: "25 min", width: `${(25 / 180) * 100}%`, line: "bg-accent", tick: "bg-accent", text: "text-accent-strong" }
                  ].map((bar, index) => (
                    <div className="contents" key={bar.label}>
                      <div className="flex items-center" style={{ width: bar.width }}>
                        <span className={`h-3 w-px shrink-0 ${bar.tick}`} />
                        <Reveal className={`h-px flex-1 ${bar.line}`} delay={index * 0.25} effect="grow">
                          {null}
                        </Reveal>
                        <span className={`h-3 w-px shrink-0 ${bar.tick}`} />
                      </div>
                      <span className={bar.text}>{bar.label}</span>
                    </div>
                  ))}
                </div>

                <div
                  aria-label="Parallel API and data checks feed a shared release result"
                  className="mt-8 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-t border-line pt-6 font-mono text-[0.75rem]"
                  role="img"
                >
                  <span className="border border-rule px-2.5 py-1.5 text-ink">Run</span>
                  <div className="relative grid gap-1.5 border-x border-line px-3">
                    {["API regression", "Data validation", "Access control"].map((check) => (
                      <span className="relative border border-line bg-bg px-2.5 py-1.5 text-fg before:absolute before:-left-3 before:top-1/2 before:h-px before:w-3 before:bg-line after:absolute after:-right-3 after:top-1/2 after:h-px after:w-3 after:bg-line" key={check}>
                        {check}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 border border-accent px-2.5 py-1.5 text-accent-strong">
                    <Check aria-hidden="true" size={13} /> Result
                  </span>
                </div>
              </Figure>
            </div>
          </article>

          <article aria-labelledby="case-gate-title" className="stack-sheet scroll-mt-28" id="case-gate" style={sheet(2)}>
            <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:p-14">
              <div className="flex flex-col">
                <p className="origin">Independent project · Model evaluation</p>
                <h3 className="display-2 mt-5" id="case-gate-title">
                  <Link className="transition-colors hover:text-accent-strong" href="/work/mlops-readiness-scaffold/">
                    A repeatable model-output release gate
                  </Link>
                </h3>
                <div className="prose-ed mt-6 text-muted">
                  <p>A small evaluation harness checks expected outputs and gives a release pipeline a clear pass or fail.</p>
                  <p>I included a deliberately weak provider alongside the passing example. Running both verifies that the gate can block a release.</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-x-7 gap-y-1 pt-8">
                  <Link className="arrow-link" href="/demos/eval-gate/">
                    <span>Run it in the lab</span>
                    <Play aria-hidden="true" size={15} />
                  </Link>
                  <a className="arrow-link" href="https://github.com/raovin/mlops-artifact" rel="noreferrer" target="_blank">
                    <span>Repository</span>
                    <Github aria-hidden="true" size={15} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>

              <Figure caption="The lab demo's default run: six synthetic cases with fixed responses, computed when this page was built." number={3} title="Release gate">
                <div className="lab-window mt-6" data-surface="lab">
                  <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[0.75rem] text-faint">
                    <span>eval-gate · cases.jsonl</span>
                    <span>threshold {gateDecision.threshold.toFixed(2)}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className={`font-mono text-[2.5rem] leading-none tracking-[-0.04em] ${gateDecision.passed ? "text-accent-strong" : "text-danger"}`}>
                        {gateDecision.passed ? "PASS" : "FAIL"}
                      </p>
                      <p className="font-mono text-[0.875rem] tabular-nums text-muted">
                        {gateDecision.aggregate.toFixed(3)} <span className="text-faint">/ {gateDecision.threshold.toFixed(2)}</span>
                      </p>
                    </div>
                    <div aria-hidden="true" className="relative mt-4 h-1.5 bg-soft">
                      <div className="h-full" style={{ width: `${Math.round(gateDecision.aggregate * 100)}%` }}>
                        <Reveal className={`h-full ${gateDecision.passed ? "bg-accent" : "bg-danger"}`} effect="grow">
                          {null}
                        </Reveal>
                      </div>
                      <span className="absolute -top-1.5 h-4 w-px bg-ink" style={{ left: `${Math.round(gateDecision.threshold * 100)}%` }} />
                    </div>
                    <ul className="mt-5 grid gap-1.5 font-mono text-[0.8125rem]">
                      {gateOutcomes.map((outcome) => (
                        <li className="flex items-center justify-between gap-3" key={outcome.id}>
                          <span className="flex min-w-0 items-center gap-2">
                            <span aria-hidden="true" className={outcome.passed ? "text-accent-strong" : "text-danger"}>
                              {outcome.passed ? "✓" : "✕"}
                            </span>
                            <span className="truncate text-fg">{outcome.id}</span>
                            <span className="sr-only">{outcome.passed ? "passed" : "failed"}</span>
                          </span>
                          <span className="tabular-nums text-faint">{outcome.score.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Figure>
            </div>
          </article>
        </div>

        <div className="mt-20 md:mt-28">
          <h3 className="label">More project engagements</h3>
          <div className="mt-4 border-t border-rule">
            {engagements.map((project) => (
              <CaseRow key={project.slug} project={project} />
            ))}
          </div>
          <Link className="arrow-link mt-6" href="/work/">
            <span>The full case index</span>
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      {/* 02 Method */}
      <section aria-labelledby="method-title" className="border-t border-line bg-raised/40">
        <div className="shell section">
          <SectionHead index="02" label="Method" />
          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <h2 className="display-2 max-w-[14ch]" id="method-title">
              Which checks run before release?
            </h2>
            <p className="lede self-end text-muted">
              I split checks by how quickly the team needs an answer and what a missed failure would cost.
            </p>
          </div>

          <div className="mt-16 md:mt-24">
            <div aria-hidden="true" className="mb-8 hidden items-center gap-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-faint md:flex">
              <span>Faster answer</span>
              <span className="relative h-px flex-1 bg-rule before:absolute before:-top-[3px] before:left-0 before:size-[7px] before:rotate-45 before:border-b before:border-l before:border-rule after:absolute after:-top-[3px] after:right-0 after:size-[7px] after:rotate-45 after:border-r after:border-t after:border-rule" />
              <span>Broader coverage</span>
            </div>
            <ol className="grid gap-0 md:grid-cols-3">
              {stages.map((stage, index) => (
                <li className="relative border-l border-line py-2 pl-6 md:border-l-0 md:border-t md:py-0 md:pl-0 md:pr-10 md:pt-8" key={stage.when}>
                  <span aria-hidden="true" className="absolute -left-[4.5px] top-3 size-2 rounded-full bg-accent md:-top-[4.5px] md:left-0" />
                  <Reveal delay={index * 0.12}>
                    <p className="label">
                      <span className="text-ink">{["i", "ii", "iii"][index]}.</span> {stage.when}
                    </p>
                    <h3 className="display-3 mt-4">{stage.title}</h3>
                    <p className="mt-4 max-w-[38ch] pb-10 text-[0.9375rem] leading-relaxed text-muted md:pb-0">{stage.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 03 Principle */}
      <section aria-labelledby="principle-title" className="shell section">
        <SectionHead index="03" label="Principle" />
        <div className="mt-10 grid gap-14 md:mt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <h2 className="display-2 max-w-[13ch]" id="principle-title">
              An incomplete result should look <em>incomplete.</em>
            </h2>
            <div className="prose-ed mt-10 text-muted">
              <p>Missing inputs and stale data should be visible before a system can report a complete result.</p>
              <p>My personal health dashboard withholds its overall score when required inputs are missing.</p>
            </div>
            <Link className="arrow-link mt-6" href="/work/health-dashboard/">
              <span>See the product decisions</span>
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>

          <Reveal className="lg:pt-24">
            <Figure caption="Illustration with synthetic data." number={4} title="Partial data">
              <div className="mt-6 border border-line bg-surface shadow-[12px_12px_0_var(--surface-raised)]">
                <div className="flex items-center justify-between border-b border-line px-5 py-3 text-[0.8125rem]">
                  <span className="text-ink">Health overview</span>
                  <span className="border border-[color-mix(in_srgb,var(--danger)_50%,var(--line))] px-2 py-0.5 font-mono text-[0.75rem] text-danger">Partial data</span>
                </div>
                <div className="border-b border-line px-5 py-6">
                  <p className="label">Overall score</p>
                  <p className="mt-2 font-display text-[2.25rem] leading-none text-ink">Not calculated</p>
                  <p className="mt-2 text-[0.875rem] text-muted">Some required inputs are missing.</p>
                </div>
                <dl className="divide-y divide-line px-5 text-[0.875rem]">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted">Lab results</dt>
                    <dd className="inline-flex items-center gap-1.5 text-accent-strong">
                      <Check aria-hidden="true" size={14} /> Available
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted">Wearable history</dt>
                    <dd className="text-ink">Incomplete</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted">Data freshness</dt>
                    <dd className="text-ink">Review needed</dd>
                  </div>
                </dl>
                <p className="border-t border-line border-l-2 border-l-accent px-5 py-3 text-[0.8125rem] text-fg">The individual measurements are still available.</p>
              </div>
            </Figure>
          </Reveal>
        </div>
      </section>

      {/* 04 Lab doorway */}
      <section aria-labelledby="lab-title" className="shell pb-[clamp(80px,11vw,152px)]">
        <SectionHead index="04" label="Lab" />
        <Reveal className="mt-10 md:mt-14">
          <div className="lab-window" data-surface="lab">
            <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[0.75rem] text-faint md:px-8">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" /> glyphknit.com/demos
              </span>
              <span>synthetic data · runs in your browser</span>
            </div>
            <div className="grid gap-12 p-6 sm:p-10 lg:p-14 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-16">
              <div>
                <h2 className="display-2 max-w-[16ch]" id="lab-title">
                  Change the inputs. Inspect the checks.
                </h2>
                <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-muted">
                  Two working examples with synthetic data, running in your browser.
                </p>
                <Link className="btn btn-primary mt-8" href="/demos/">
                  Enter the lab
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link className="group flex flex-col border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent" href="/demos/eval-gate/">
                  <p className="label">Demo 01</p>
                  <h3 className="mt-3 text-[1.25rem] tracking-[-0.03em]">Model output release gate</h3>
                  <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted">
                    Change test cases and the pass threshold, then inspect which model-output failures block a release.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.8125rem] text-accent-strong">
                    <Play aria-hidden="true" size={14} /> Run the eval gate
                    <ArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={14} />
                  </span>
                </Link>
                <Link className="group flex flex-col border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent" href="/demos/registration-checks/">
                  <p className="label">Demo 02</p>
                  <h3 className="mt-3 text-[1.25rem] tracking-[-0.03em]">Registration checks</h3>
                  <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted">
                    Start a fictional signup and wait for an email or SMS code. See how registration can succeed even when message delivery is late.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.8125rem] text-accent-strong">
                    <Play aria-hidden="true" size={14} /> Try registration checks
                    <ArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 05 About */}
      <section aria-labelledby="about-title" className="border-t border-line">
        <div className="shell section grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <SectionHead index="05" label="About" />
            <h2 className="display-2 mt-10" id="about-title">
              About Vin Rao
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="prose-ed dropcap text-[1.1875rem]">
              I studied physics at Hamilton College. Around nine years in quality engineering and product development taught me to follow a failure beyond the first symptom.
            </p>
            <dl className="mt-10 grid border-t border-line sm:grid-cols-3">
              {[
                ["Practice", "GlyphKnit Solutions LLC, since December 2022"],
                ["Before that", "QA and support engineering, financial and travel software"],
                ["Education", "BA in Physics, Hamilton College"]
              ].map(([term, detail]) => (
                <div className="border-b border-line py-5 sm:border-b-0 sm:pr-6" key={term}>
                  <dt className="label">{term}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-snug text-ink">{detail}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-7">
              <Link className="arrow-link" href="/about/">
                <span>More about me</span>
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link className="arrow-link" href="/resume/">
                <span>Resume</span>
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Contact */}
      <section aria-labelledby="contact-title" className="border-t border-rule">
        <div className="shell section">
          <SectionHead index="06" label="Contact" />
          <h2 className="display-1 mt-10 max-w-[12ch]" id="contact-title">
            Discuss your <em>project.</em>
          </h2>
          <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <a className="group inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(1.25rem,1rem+1.2vw,1.875rem)] text-ink" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" className="text-accent" size={26} strokeWidth={1.5} />
              <span className="underline decoration-[color-mix(in_srgb,currentColor_30%,transparent)] decoration-1 underline-offset-[0.25em] transition-[text-decoration-color] duration-300 group-hover:decoration-accent">
                Tell me what&apos;s slowing you down
              </span>
              <ArrowUpRight aria-hidden="true" className="text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={26} strokeWidth={1.5} />
            </a>
            <Link className="arrow-link" href="/contact/">
              <span>Or put together a project brief</span>
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
