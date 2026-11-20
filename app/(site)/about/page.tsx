import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

import styles from "../home.module.css";

export const metadata: Metadata = buildMetadata({
  title: "About Vin Rao",
  description:
    "I'm Vin Rao, the engineer behind GlyphKnit. My work connects test automation, application code, data validation, and release pipelines.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="site-shell">
      <section className={styles.innerHero}>
        <p className={styles.eyebrow}>About</p>
        <h1>
          I&apos;m Vin Rao.
          <br />
          GlyphKnit is my independent practice.
        </h1>
        <p>
          I build test systems and release pipelines, and write the application
          code on both sides of them.
        </p>
      </section>
      <div className={styles.proseLayout}>
        <article className={styles.prose}>
          <h2>From physics to software quality</h2>
          <p>
            I earned a BA in physics at Hamilton College. I also studied
            computer science, mathematics, history, and piano.
          </p>
          <p>
            In a financial data project, a successful request told me that the
            API had answered. To find out whether the transformation worked, I
            also checked what reached the database. That distinction shapes
            how I write tests.
          </p>
          <h2>Why I build products, too</h2>
          <p>
            Building my <Link className="focus-link" href="/work/health-dashboard/">health dashboard</Link> forced me to decide what to show when a measurement was missing or out of date.
            I wrote those cases into the scoring tests.
          </p>
          <Link className={styles.textLink} href="/work/">
            Explore the projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </article>
        <aside className={styles.aside}>
          <h2>Working with me</h2>
          <p>
            Start with the problem, the current system, and the first outcome
            that would make a difference.
          </p>
          <Link className={styles.textLink} href="/contact/">
            Discuss a project <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <p>For my employment history and education:</p>
          <Link className={styles.textLink} href={siteConfig.resumePageHref}>
            View my resume <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
