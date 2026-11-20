import { ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { RegistrationChecks } from "@/components/demos/registration-checks";
import { DemoHeader } from "@/components/lab";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Registration checks",
  description: "Try a fictional signup, wait for a code in a synthetic email or SMS inbox, and compare registration with the ten-second delivery deadline.",
  path: "/demos/registration-checks"
});

export default function RegistrationDemoPage() {
  return (
    <>
      <DemoHeader
        crumb="Registration checks"
        intro={
          <p>
            Start a fictional signup and wait for an email or SMS code in the synthetic inbox. A late code can still complete registration, even when delivery misses its ten-second deadline. No real messages are sent.
          </p>
        }
        kicker="Interactive demo · synthetic data"
        readout={[
          ["Channels", "Email, SMS"],
          ["Delivery deadline", "10 s"],
          ["Inbox", "Synthetic"],
          ["Real messages sent", "None"]
        ]}
        title="Registration checks"
      />

      <section aria-label="Interactive registration checks" className="shell">
        <noscript>
          <style>{".registration-controls, .registration-experience { display: none; }"}</style>
          <p className="mb-4 border-l-2 border-accent pl-4 text-muted">Enable JavaScript to try registration and wait for a synthetic message.</p>
        </noscript>
        <RegistrationChecks />
      </section>

      <section aria-labelledby="next-title" className="shell section">
        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <h2 className="display-2" id="next-title">
            Why the two checks are separate
          </h2>
          <div>
            <p className="max-w-[56ch] text-[1.0625rem] leading-relaxed text-fg">
              The browser check supplies its own verification responses, so it passes or fails on what the screen does. A separate delivery check measures elapsed time against the deadline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/contact/?project=connected-device-test-infrastructure">
                <Mail aria-hidden="true" size={16} />
                Discuss a similar project
              </Link>
              <Link className="btn btn-secondary" href="/work/connected-device-test-infrastructure/">
                Read the registration case study
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
