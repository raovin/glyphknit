"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeControl } from "./theme-control";
import { Wordmark } from "./wordmark";

const navItems = [
  { href: "/work/", label: "Work", sections: ["/work"] },
  { href: "/work-with-me/", label: "Services", sections: ["/work-with-me"] },
  { href: "/demos/", label: "Lab", sections: ["/demos", "/code"] },
  { href: "/about/", label: "About", sections: ["/about", "/resume"] }
];

function isCurrent(pathname: string, sections: string[]) {
  const path = pathname.replace(/\/$/, "") || "/";
  return sections.some((section) => path === section || path.startsWith(`${section}/`));
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-md backdrop-saturate-150">
      <div className="shell flex h-[var(--nav-height)] items-center justify-between gap-6">
        <Link aria-label="GlyphKnit home" className="-my-2 py-2" href="/" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden h-full items-stretch gap-1 min-[900px]:flex">
          {navItems.map((item) => {
            const current = isCurrent(pathname, item.sections);
            return (
              <Link
                aria-current={current ? "page" : undefined}
                className={`relative flex items-center px-3 text-[0.875rem] transition-colors duration-200 ${current ? "text-ink" : "text-muted hover:text-ink"}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
                {current ? (
                  <m.span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-[2px] bg-accent"
                    layoutId="nav-current"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 min-[900px]:flex">
          <ThemeControl />
          <Link className="btn btn-primary min-h-10 px-4 text-[0.875rem]" href="/contact/">
            Start a project
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="-mr-2 inline-flex min-h-11 items-center gap-2 px-2 text-[0.875rem] text-ink min-[900px]:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <m.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden border-t border-line min-[900px]:hidden"
            exit={{ height: 0, opacity: 0 }}
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Primary" className="shell pb-6 pt-2">
              <ul>
                {navItems.map((item, index) => {
                  const current = isCurrent(pathname, item.sections);
                  return (
                    <m.li
                      animate={{ opacity: 1, y: 0 }}
                      className="border-b border-line"
                      initial={{ opacity: 0, y: 8 }}
                      key={item.href}
                      transition={{ delay: 0.04 * index + 0.06 }}
                    >
                      <Link
                        aria-current={current ? "page" : undefined}
                        className="flex min-h-14 items-center justify-between font-display text-[1.75rem] leading-none text-ink"
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        {current ? <span className="label text-accent-strong">Current</span> : null}
                      </Link>
                    </m.li>
                  );
                })}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Link className="btn btn-primary" href="/contact/" onClick={() => setOpen(false)}>
                  Start a project
                  <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
                <ThemeControl />
              </div>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
