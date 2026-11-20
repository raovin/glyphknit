import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";

import styles from "../home.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Work with me",
  description:
    "Scoped test automation, release engineering, API validation, and data-quality projects with GlyphKnit.",
  path: "/work-with-me",
});

const engagements = [
  {
    title: "Test systems",
    text: "I build browser tests for critical user journeys and API checks for the services behind them.",
    example: "Browser and API tests for a cloud application",
    href: "/work/cloud-backed-sdet-frameworks/",
  },
  {
    title: "Release pipelines",
    text: "I review which checks block a change, which ones can run in parallel, and what a developer sees when a run fails.",
    example: "Cutting CI feedback from three hours to 25 minutes",
    href: "/work/financial-data-quality-platform/",
  },
  {
    title: "Data and eval checks",
    text: "I write checks for expected data and model outputs. In the demo, you can change an expectation and inspect the resulting release decision.",
    example: "Try the model output release gate",
    href: "/demos/eval-gate/",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="site-shell">
      <section className={styles.innerHero}>
        <p className={styles.eyebrow}>Work with me</p>
        <h1>Contract engineering for tests, data, and releases.</h1>
        <p>
          I take on scoped projects through GlyphKnit, from a test framework
          that needs rebuilding to a release pipeline that takes too long to
          trust.
        </p>
      </section>
      <div className={styles.engagements}>
        {engagements.map((engagement) => (
          <article key={engagement.title} className={styles.engagement}>
            <h2>{engagement.title}</h2>
            <div>
              <p>{engagement.text}</p>
              <Link className="focus-link mt-3 inline-block text-sm" href={engagement.href}>{engagement.example}</Link>
            </div>
          </article>
        ))}
      </div>
      <section className={styles.nextStep}>
        <h2>Tell me what needs fixing</h2>
        <p>
          What does your team wait for or still check by hand? Include a deadline if you have one.
        </p>
        <Link className={styles.textLink} href="/contact/">
          Discuss a project <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
