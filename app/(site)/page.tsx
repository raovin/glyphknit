import { ArrowRight, ArrowUpRight, Check, GitBranch, Play } from "lucide-react";
import Link from "next/link";

import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";

import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={`site-shell ${styles.hero}`}>
        <p className={styles.eyebrow}>Independent quality engineering</p>
        <h1>GlyphKnit builds test systems and release pipelines.</h1>
        <div className={styles.heroBottom}>
          <p>
            I&apos;m Vin Rao. I build browser and API tests, check the data they
            produce, and wire those checks into your release pipeline.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} href="/contact/">
              Discuss a project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link
              className={styles.textLink}
              href="/work/cloud-backed-sdet-frameworks/"
            >
              See the cloud application project{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`site-shell ${styles.featured}`}
        id="selected-work"
        aria-labelledby="featured-title"
      >
        <div className={styles.featuredHeader}>
          <p className={styles.eyebrow}>Selected work</p>
          <span className={styles.origin}>
            GlyphKnit client project · Cloud software
          </span>
        </div>
        <div className={styles.featuredBody}>
          <div className={styles.featuredCopy}>
            <h2 id="featured-title">
              <Link href="/work/cloud-backed-sdet-frameworks/">
                Browser and API tests for a cloud application
              </Link>
            </h2>
            <p>
              I built browser tests for the main user journeys and separate API
              checks for the services behind them. When a browser test failed,
              the team could check the service directly.
            </p>
            <Link
              className={styles.textLink}
              href="/contact/?project=cloud-backed-sdet-frameworks"
            >
              Discuss a similar project{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.clientFigure}>
            <div className={styles.testScope}>
              <div>
                <span>Browser journeys</span>
                <strong>Playwright + Cypress</strong>
              </div>
              <div>
                <span>Service checks</span>
                <strong>Python API tests</strong>
              </div>
            </div>
            <div className={styles.clientResult}>
              <strong>
                70<span>%</span>
              </strong>
              <span>reduction in test execution time</span>
            </div>
            <figcaption>
              Client engagement outcome. Code and reports remain private.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className={`site-shell ${styles.featured} ${styles.previousWork}`}
        aria-labelledby="financial-title"
      >
        <div className={styles.featuredHeader}>
          <p className={styles.eyebrow}>Release engineering</p>
          <span className={styles.origin}>
            Financial data platform · Earlier employment
          </span>
        </div>
        <div className={styles.featuredBody}>
          <div className={styles.featuredCopy}>
            <h2 id="financial-title">Cutting CI feedback from three hours to 25 minutes</h2>
            <p>
              A successful API request could still leave the wrong value in the
              database. I checked both the response and the stored data.
            </p>
            <p>
              I ran independent checks in parallel in Jenkins so developers
              could get the regression results sooner.
            </p>
            <Link
              className={styles.textLink}
              href="/work/financial-data-quality-platform/"
            >
              Read the project <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.ciFigure}>
            <div className={styles.figureHeading}>
              <GitBranch size={17} aria-hidden="true" />
              <span>Jenkins feedback time</span>
            </div>
            <div className={styles.timeComparison}>
              <div>
                <span>Before</span>
                <strong>
                  3<span>h</span>
                </strong>
              </div>
              <ArrowRight
                className={styles.timeArrow}
                size={32}
                aria-hidden="true"
              />
              <div>
                <span>After</span>
                <strong className={styles.timeAfter}>
                  25<span>m</span>
                </strong>
              </div>
            </div>
            <div
              className={styles.executionDiagram}
              aria-label="Parallel API and data checks feed a shared release result"
            >
              <span className={styles.pipelineStart}>Run</span>
              <div className={styles.parallelChecks}>
                <span>API regression</span>
                <span>Data validation</span>
                <span>Access control</span>
              </div>
              <span className={styles.pipelineEnd}>
                <Check size={16} aria-hidden="true" /> Result
              </span>
            </div>
            <figcaption>
              Illustrative pipeline. Feedback times are from the financial data
              project.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className={`site-shell ${styles.projectList}`}
        aria-label="More selected projects"
      >
        {projects.filter((project) => project.origin === "Project engagement").map((project) => (
          <Link href={`/work/${project.slug}/`} key={project.slug} className={styles.projectRow}>
            <div>
              <span className={styles.origin}>{project.sector}</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.summary}</p>
            <ArrowUpRight size={24} aria-hidden="true" />
          </Link>
        ))}
        <Link href="/work/" className={styles.textLink}>
          All projects <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>

      <section
        className={`site-shell ${styles.philosophy}`}
        aria-labelledby="quality-title"
      >
        <div className={styles.philosophyCopy}>
          <p className={styles.eyebrow}>Philosophy of quality</p>
          <h2 id="quality-title">
            An incomplete result should look incomplete.
          </h2>
          <p>
            Missing inputs and stale data should be visible before a system can
            report a complete result.
          </p>
          <p>
            My personal health dashboard withholds its overall score when
            required inputs are missing.
          </p>
          <Link className={styles.textLink} href="/work/health-dashboard/">
            See the product decisions{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <figure className={styles.dashboardFigure}>
          <div className={styles.dashboardTop}>
            <span>Health overview</span>
            <span className={styles.partial}>Partial data</span>
          </div>
          <div className={styles.dashboardScore}>
            <span>Overall score</span>
            <strong>Not calculated</strong>
            <p>Some required inputs are missing.</p>
          </div>
          <dl className={styles.dataRows}>
            <div>
              <dt>Lab results</dt>
              <dd>
                <Check size={14} aria-hidden="true" /> Available
              </dd>
            </div>
            <div>
              <dt>Wearable history</dt>
              <dd>Incomplete</dd>
            </div>
            <div>
              <dt>Data freshness</dt>
              <dd>Review needed</dd>
            </div>
          </dl>
          <div className={styles.dashboardNotice}>
            The individual measurements are still available.
          </div>
          <figcaption>Illustration with synthetic data.</figcaption>
        </figure>
      </section>

      <section
        className={`site-shell ${styles.devops}`}
        aria-labelledby="devops-title"
      >
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>DevOps and release engineering</p>
          <h2 id="devops-title">Which checks run before release?</h2>
          <p>
            I split checks by how quickly the team needs an answer and what a
            missed failure would cost.
          </p>
        </div>
        <div className={styles.stageGrid}>
          <article>
            <span className={styles.stageLabel}>On a change</span>
            <h3>Test the changed behavior</h3>
            <p>
              Run the smallest check that can catch the fault. If an API
              returns the wrong value, a developer can investigate it without
              replaying a browser session.
            </p>
          </article>
          <article>
            <span className={styles.stageLabel}>Before a release</span>
            <h3>Follow a critical journey</h3>
            <p>
              Follow a request across the application. Check who can make it,
              what the service returns and what reaches the database.
            </p>
          </article>
          <article>
            <span className={styles.stageLabel}>On a schedule</span>
            <h3>Run the broader suite</h3>
            <p>
              Longer regression runs can cover more markets and environments.
              A failure here still needs an owner, even if the latest change passed.
            </p>
          </article>
        </div>
      </section>

      <section
        className={`site-shell ${styles.demo}`}
        aria-labelledby="demo-title"
      >
        <div className={styles.demoIntro}>
          <p className={styles.eyebrow}>Try the demos</p>
          <h2 id="demo-title">Change the inputs. Inspect the checks.</h2>
          <p>
            Two working examples with synthetic data, running in your browser.
          </p>
        </div>
        <article>
          <h3>Model output release gate</h3>
          <p>
            Change test cases and the pass threshold, then inspect which
            model-output failures block a release.
          </p>
          <Link href="/demos/eval-gate/" className={styles.demoLink}>
            <Play size={20} aria-hidden="true" />
            Run the eval gate
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </article>
        <article>
          <h3>Registration checks</h3>
          <p>
            Start a fictional signup and wait for an email or SMS code. See
            how registration can succeed even when message delivery is late.
          </p>
          <Link href="/demos/registration-checks/" className={styles.demoLink}>
            <Play size={20} aria-hidden="true" />
            Try registration checks
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </article>
      </section>

      <section
        className={`site-shell ${styles.aboutStrip}`}
        aria-labelledby="about-title"
      >
        <h2 id="about-title">About Vin Rao</h2>
        <div>
          <p>
            I studied physics at Hamilton College. Around nine years in quality
            engineering and product development taught me to follow a failure
            beyond the first symptom.
          </p>
          <Link className={styles.textLink} href="/about/">
            More about me <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className={`site-shell ${styles.contact}`}
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title">Discuss your project</h2>
        <a className={styles.contactLink} href={`mailto:${siteConfig.email}`}>
          Tell me what&apos;s slowing you down{" "}
          <ArrowUpRight size={28} aria-hidden="true" />
        </a>
        <Link href="/contact/" className={styles.contactAlternative}>
          Or put together a project brief{" "}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
