import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { stagger } from "@/components/editorial";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Page not found | GlyphKnit",
  robots: { index: false, follow: false }
};

const destinations = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Case studies" },
  { href: "/demos/", label: "Lab" },
  { href: "/contact/", label: "Contact" }
];

export default function NotFound() {
  return (
    <SiteChrome surface="editorial">
      <section className="shell grid gap-12 pb-[clamp(80px,11vw,152px)] pt-14 md:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-20">
        <div>
          <p className="fade-in label" style={stagger(0)}>
            Error 404
          </p>
          <h1 className="display-1 rise-mask mt-7 max-w-[12ch]">
            <span style={stagger(1)}>
              This page isn&apos;t <em>here.</em>
            </span>
          </h1>
          <p className="fade-in lede mt-8 text-muted" style={stagger(2)}>
            The page is missing, moved, or not part of the public portfolio.
          </p>
        </div>
        <nav aria-label="Suggested pages" className="fade-in" style={stagger(3)}>
          <ul className="border-t border-rule">
            {destinations.map((destination) => (
              <li className="border-b border-line" key={destination.href}>
                <Link className="group flex min-h-14 items-center justify-between font-display text-[1.5rem] text-ink" href={destination.href}>
                  {destination.label}
                  <ArrowRight aria-hidden="true" className="text-faint transition-transform group-hover:translate-x-1 group-hover:text-accent" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </SiteChrome>
  );
}
