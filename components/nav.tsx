import { FileDown } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/content/site";

import { ButtonLink } from "./button-link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/code", label: "Code" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--background)]">
      <div className="site-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <span className="grid size-9 shrink-0 place-items-center rounded-md border border-[var(--accent)] font-mono text-xs font-semibold text-[var(--accent-strong)]">
            GK
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-sm text-[var(--paper)]">GlyphKnit</strong>
            <span className="block truncate font-mono text-xs text-[var(--faint)]">
              {siteConfig.name}
            </span>
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 text-sm text-[var(--muted)] md:flex"
        >
          {navItems.map((item) => (
            <Link className="transition hover:text-[var(--paper)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="transition hover:text-[var(--paper)]" href="/work-with-me">
            Work with me
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <ButtonLink
              href={siteConfig.resumeHref}
              icon={<FileDown aria-hidden="true" size={16} />}
            >
              Resume
            </ButtonLink>
          </div>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="site-shell flex gap-4 overflow-x-auto border-t border-[var(--line)] py-2 text-sm text-[var(--muted)] md:hidden"
      >
        {navItems.map((item) => (
          <Link className="shrink-0 transition hover:text-[var(--paper)]" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="shrink-0 transition hover:text-[var(--paper)]" href="/work-with-me">
          Work with me
        </Link>
      </nav>
    </header>
  );
}
