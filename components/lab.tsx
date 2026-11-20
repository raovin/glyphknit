import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { stagger } from "./editorial";

export function Readout({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="border border-line bg-surface font-mono text-[0.8125rem]">
      {rows.map(([term, value]) => (
        <div className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-2.5 last:border-b-0" key={term}>
          <dt className="text-faint">{term}</dt>
          <dd className="text-right text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LabStatus({ children }: { children: ReactNode }) {
  return (
    <p className="label inline-flex items-center gap-2">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_25%,transparent)]" />
      {children}
    </p>
  );
}

export function DemoHeader({
  crumb,
  kicker,
  title,
  intro,
  readout
}: {
  crumb: string;
  kicker: string;
  title: string;
  intro: ReactNode;
  readout: [string, ReactNode][];
}) {
  return (
    <header className="shell pb-10 pt-8 md:pb-14 md:pt-12">
      <nav aria-label="Breadcrumb" className="fade-in label flex items-center gap-2" style={stagger(0)}>
        <Link className="inline-flex min-h-10 items-center gap-2 text-muted transition-colors hover:text-ink" href="/demos/">
          <ArrowLeft aria-hidden="true" size={14} />
          Lab
        </Link>
        <span aria-hidden="true" className="text-faint">/</span>
        <span aria-current="page" className="text-ink">
          {crumb}
        </span>
      </nav>
      <div className="mt-10 grid gap-10 border-b border-line pb-10 md:mt-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-16">
        <div>
          <div className="fade-in" style={stagger(1)}>
            <LabStatus>{kicker}</LabStatus>
          </div>
          <h1 className="display-1 rise-mask mt-6 max-w-[14ch]">
            <span style={stagger(1)}>{title}</span>
          </h1>
          <div className="fade-in lede mt-8 text-muted" style={stagger(2)}>
            {intro}
          </div>
        </div>
        <div className="fade-in" style={stagger(3)}>
          <Readout rows={readout} />
        </div>
      </div>
    </header>
  );
}
