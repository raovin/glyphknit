"use client";

import * as m from "motion/react-m";
import { useEffect, useState } from "react";

type TocSection = { id: string; label: string };

export function CaseToc({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <ol className="sticky top-[calc(var(--nav-height)+40px)] grid gap-1 border-l border-line">
        {sections.map((section, index) => {
          const current = section.id === active;
          return (
            <li className="relative" key={section.id}>
              {current ? (
                <m.span
                  aria-hidden="true"
                  className="absolute -left-px inset-y-1 w-[2px] bg-accent"
                  layoutId="case-toc"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              ) : null}
              <a
                aria-current={current ? "location" : undefined}
                className={`flex min-h-9 items-center gap-3 pl-4 text-[0.875rem] transition-colors ${current ? "text-ink" : "text-muted hover:text-ink"}`}
                href={`#${section.id}`}
              >
                <span className="font-mono text-[0.75rem] tabular-nums text-faint">{String(index + 1).padStart(2, "0")}</span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
