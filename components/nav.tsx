import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/work", label: "Case studies" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/demos/", label: "Demos" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--background)]">
      <div className="site-shell flex min-h-[76px] items-center justify-between gap-4 py-3">
        <Link
          aria-label="GlyphKnit home"
          className="text-xl font-semibold tracking-[-0.06em] text-[var(--paper)]"
          href="/"
        >
          GlyphKnit
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-xs text-[var(--muted)] md:flex"
        >
          {navItems.map((item) => (
            <Link
              className="transition hover:text-[var(--paper)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            className="inline-flex min-h-10 items-center gap-2 border border-[var(--line)] px-3 text-xs font-medium text-[var(--paper)] transition hover:border-[var(--accent)]"
            href="/contact/"
          >
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="site-shell flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] py-3 text-xs text-[var(--muted)] md:hidden"
      >
        {navItems.map((item) => (
          <Link
            className="shrink-0 transition hover:text-[var(--paper)]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
