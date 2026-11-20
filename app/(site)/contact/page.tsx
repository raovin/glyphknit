import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ContactForm, ContactInquiryForm } from "@/components/contact-form";
import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

import styles from "../home.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Discuss a project",
  description:
    "Talk to Vin Rao at GlyphKnit about test automation, release pipelines, API validation, or a scoped engineering project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="site-shell">
      <section className={styles.innerHero}>
        <h1>Discuss your project.</h1>
        <p>
          What would you like to fix? A short description is enough. Include a deadline if you have one.
        </p>
      </section>
      <div className={styles.contactLayout}>
        <Suspense fallback={<ContactForm nativeOnly />}>
          <ContactInquiryForm
            projects={projects.map(({ slug, title }) => ({ slug, title }))}
          />
        </Suspense>
        <aside className={styles.contactDetails}>
          <h2>Prefer a direct email?</h2>
          <a className={styles.email} href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <div className={styles.socialLinks}>
            <a href={siteConfig.githubUrl} rel="noreferrer" target="_blank">
              GitHub ↗
            </a>
            <a href={siteConfig.linkedinUrl} rel="noreferrer" target="_blank">
              LinkedIn ↗
            </a>
            <Link href={siteConfig.resumePageHref}>Resume ↗</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
