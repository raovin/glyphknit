import Link from "next/link";

import { siteConfig } from "@/content/site";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/demos/eval-gate/", label: "Live demo" },
  { href: "/code", label: "Code" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--line)]">
      <div className="site-shell grid gap-8 py-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-lg font-medium tracking-[-0.04em] text-[var(--paper)]">
            GlyphKnit
          </p>
          <p className="mt-3 max-w-sm text-xs text-[var(--muted)]">
            Independent test systems, release pipelines, and quality engineering
            by {siteConfig.name}.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-xs text-[var(--muted)]">
            <a
              className="transition hover:text-[var(--accent-strong)]"
              href={`mailto:${siteConfig.email}`}
            >
              Email
            </a>
            <a
              className="transition hover:text-[var(--accent-strong)]"
              href={siteConfig.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-[var(--accent-strong)]"
              href={siteConfig.linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap content-start gap-x-5 gap-y-3 md:justify-end"
        >
          {footerLinks.map((item) => (
            <Link
              className="text-xs text-[var(--muted)] transition hover:text-[var(--paper)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
