import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/content/site";

import { Wordmark } from "./wordmark";

const columns = [
  {
    title: "Practice",
    links: [
      { href: "/work/", label: "Work" },
      { href: "/work-with-me/", label: "Services" },
      { href: "/about/", label: "About" },
      { href: "/contact/", label: "Contact" }
    ]
  },
  {
    title: "Lab",
    links: [
      { href: "/demos/eval-gate/", label: "Release gate demo" },
      { href: "/demos/registration-checks/", label: "Registration demo" },
      { href: "/code/", label: "Source code" }
    ]
  },
  {
    title: "Record",
    links: [
      { href: siteConfig.resumePageHref, label: "Resume" },
      { href: siteConfig.githubUrl, label: "GitHub", external: true },
      { href: siteConfig.linkedinUrl, label: "LinkedIn", external: true }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-12 pb-10 pt-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] md:gap-16 md:pt-20">
        <div>
          <Link aria-label="GlyphKnit home" className="inline-block" href="/">
            <Wordmark />
          </Link>
          <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-muted">
            Independent test systems, release pipelines, and quality engineering by {siteConfig.name}.
          </p>
          <a className="link mt-5 inline-block break-all text-[0.9375rem]" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="label">{column.title}</p>
              <ul className="mt-4 grid gap-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link ? (
                      <a className="inline-flex min-h-9 items-center gap-1 text-[0.9375rem] text-fg transition-colors hover:text-ink" href={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                        <ArrowUpRight aria-hidden="true" className="text-faint" size={14} />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link className="inline-flex min-h-9 items-center text-[0.9375rem] text-fg transition-colors hover:text-ink" href={link.href}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-line py-6 text-[0.8125rem] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} GlyphKnit Solutions LLC</p>
        <p>
          Set in Instrument Serif, Geist and Geist Mono. Static site,{" "}
          <a className="link text-muted" href="https://github.com/raovin/glyphknit" rel="noreferrer" target="_blank">
            source on GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
