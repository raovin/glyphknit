import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ContactForm, ContactInquiryForm } from "@/components/contact-form";
import { PageHeader } from "@/components/editorial";
import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Discuss a project",
  description: "Talk to Vin Rao at GlyphKnit about test automation, release pipelines, API validation, or a scoped engineering project.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={<p className="label">Contact</p>} title={<>Discuss your <em>project.</em></>} titleClassName="max-w-[12ch]">
        <p className="lede text-muted">What would you like to fix? A short description is enough. Include a deadline if you have one.</p>
      </PageHeader>

      <div className="shell grid gap-14 border-t border-rule pb-[clamp(80px,11vw,152px)] pt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20 lg:pt-16">
        <Suspense fallback={<ContactForm nativeOnly />}>
          <ContactInquiryForm projects={projects.map(({ slug, title }) => ({ slug, title }))} />
        </Suspense>

        <aside aria-labelledby="direct-title" className="lg:pt-2">
          <div className="lg:sticky lg:top-[calc(var(--nav-height)+40px)]">
            <h2 className="label text-ink" id="direct-title">
              Prefer a direct email?
            </h2>
            <a className="mt-4 block break-all font-display text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.05] text-ink underline decoration-accent/40 decoration-1 underline-offset-[0.18em] transition-[text-decoration-color] hover:decoration-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <ul className="mt-10 border-t border-line">
              {[
                { href: siteConfig.githubUrl, label: "GitHub", external: true },
                { href: siteConfig.linkedinUrl, label: "LinkedIn", external: true },
                { href: siteConfig.resumePageHref, label: "Resume", external: false }
              ].map((link) => (
                <li className="border-b border-line" key={link.label}>
                  {link.external ? (
                    <a className="group flex min-h-14 items-center justify-between text-[1rem] text-ink" href={link.href} rel="noreferrer" target="_blank">
                      {link.label}
                      <span className="sr-only">(opens in a new tab)</span>
                      <ArrowUpRight aria-hidden="true" className="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={18} />
                    </a>
                  ) : (
                    <Link className="group flex min-h-14 items-center justify-between text-[1rem] text-ink" href={link.href}>
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={18} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
