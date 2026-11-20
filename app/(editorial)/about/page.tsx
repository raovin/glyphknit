import { ArrowRight, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader, SectionHead } from "@/components/editorial";
import { education, experience } from "@/content/experience";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Vin Rao",
  description:
    "I'm Vin Rao, the engineer behind GlyphKnit. My work connects test automation, application code, data validation, and release pipelines.",
  path: "/about"
});

const startYear = (period: string) => period.match(/\d{4}/)?.[0] ?? "";

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={<p className="label">About</p>} title={<>I&apos;m Vin Rao. GlyphKnit is my independent <em>practice.</em></>} titleClassName="max-w-[17ch]">
        <p className="lede text-muted">I build test systems and release pipelines, and write the application code on both sides of them.</p>
      </PageHeader>

      <div className="shell grid gap-16 border-t border-rule pt-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-24 lg:pt-20">
        <article className="prose-ed">
          <h2 className="!mt-0">From physics to software quality</h2>
          <p className="dropcap">I earned a BA in physics at Hamilton College. I also studied computer science, mathematics, history, and piano.</p>
          <p>
            In a financial data project, a successful request told me that the API had answered. To find out whether the transformation worked, I also checked what reached the database. That distinction shapes how I write tests.
          </p>
          <h2>Why I build products, too</h2>
          <p>
            Building my{" "}
            <Link className="link" href="/work/health-dashboard/">
              health dashboard
            </Link>{" "}
            forced me to decide what to show when a measurement was missing or out of date. I wrote those cases into the scoring tests.
          </p>
          <Link className="arrow-link !mt-8" href="/work/">
            <span>Explore the projects</span>
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </article>

        <aside aria-labelledby="working-title" className="lg:pt-2">
          <div className="lg:sticky lg:top-[calc(var(--nav-height)+40px)]">
            <h2 className="label text-ink" id="working-title">
              Working with me
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-fg">Start with the problem, the current system, and the first outcome that would make a difference.</p>
            <Link className="btn btn-primary mt-6 w-full justify-between" href="/contact/">
              Discuss a project
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link className="btn btn-secondary mt-3 w-full justify-between" href={siteConfig.resumePageHref}>
              View my resume
              <FileText aria-hidden="true" size={16} />
            </Link>
          </div>
        </aside>
      </div>

      <section aria-labelledby="record-title" className="shell section">
        <SectionHead as="h2" id="record-title" label="Record" meta={<Link className="link text-muted" href={siteConfig.resumePageHref}>Full resume</Link>} />
        <ol className="relative mt-10 border-l border-line md:mt-14">
          {experience.map((item) => (
            <li className="relative grid gap-2 pb-10 pl-8 md:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-8 md:pl-10" key={`${item.publicLabel}-${item.period}`}>
              <span aria-hidden="true" className={`absolute -left-[5px] top-2 size-[9px] rounded-full border ${item.kind === "ownership" ? "border-accent bg-accent" : "border-rule bg-bg"}`} />
              <p className="numeral text-[1.75rem]">{startYear(item.period)}</p>
              <div>
                <h3 className="display-3">{item.publicLabel}</h3>
                <p className="mt-1 text-[0.875rem] text-muted">{item.period}</p>
              </div>
              <div className="text-[0.9375rem]">
                <p className="text-ink">{item.title}</p>
                <p className="mt-1 text-muted">{item.location}</p>
              </div>
            </li>
          ))}
          <li className="relative grid gap-2 pl-8 md:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-8 md:pl-10">
            <span aria-hidden="true" className="absolute -left-[5px] top-2 size-[9px] rounded-full border border-rule bg-bg" />
            <p className="numeral text-[1.75rem]">{startYear(education.period)}</p>
            <div>
              <h3 className="display-3">{education.institution}</h3>
              <p className="mt-1 text-[0.875rem] text-muted">{education.period}</p>
            </div>
            <div className="text-[0.9375rem]">
              <p className="text-ink">{education.degree}</p>
              <p className="mt-1 text-muted">{education.location}</p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
