import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/content/site";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/code", label: "Code" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/work-with-me", label: "Work with me" }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--line)]">
      <div className="site-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mono-label">GlyphKnit Solutions</p>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            Senior SDET and ML-quality engineer for teams that need test automation,
            API validation, CI/CD testing, data validation, and maintainable release evidence.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--paper)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail aria-hidden="true" size={16} />
              Email
            </a>
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
              href={siteConfig.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Github aria-hidden="true" size={16} />
              GitHub
            </a>
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
              href={siteConfig.linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin aria-hidden="true" size={16} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          {footerLinks.map((item) => (
            <Link className="text-sm text-[var(--muted)] transition hover:text-[var(--paper)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
