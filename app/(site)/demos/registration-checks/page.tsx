import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { RegistrationChecks } from "@/components/demos/registration-checks";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Registration checks",
  description: "Try a fictional signup, wait for a code in a synthetic email or SMS inbox, and compare registration with the ten-second delivery deadline.",
  path: "/demos/registration-checks"
});

export default function RegistrationDemoPage() {
  return (
    <article className="reading-shell py-8 md:py-14">
      <Link href="/demos/" className="focus-link inline-flex items-center gap-2 text-sm">
        <ArrowLeft aria-hidden="true" size={16} /> All demos
      </Link>
      <header className="mb-7 mt-6 md:my-9">
        <h1 className="text-4xl md:text-5xl">Registration checks</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)] md:text-lg">
          Start a fictional signup and wait for an email or SMS code in the synthetic inbox. A late code can still complete registration, even when delivery misses its ten-second deadline. No real messages are sent.
        </p>
      </header>
      <noscript>
        <style>{".registration-controls, .registration-experience { display: none; }"}</style>
        <p className="mb-4">Enable JavaScript to try registration and wait for a synthetic message.</p>
      </noscript>
      <RegistrationChecks />
      <footer className="mt-8 border-t border-[var(--line)] pt-5">
        <Link href="/work/connected-device-test-infrastructure/" className="focus-link inline-flex items-center gap-2 text-sm font-semibold">
          Read the registration case study <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </footer>
    </article>
  );
}
