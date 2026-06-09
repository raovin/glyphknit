"use client";

import { Mail } from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { siteConfig } from "@/content/site";

const fieldClass =
  "mt-2 w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--paper)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)]";

export function ContactForm() {
  const [role, setRole] = useState("");
  const [stack, setStack] = useState("");
  const [timing, setTiming] = useState("");
  const [details, setDetails] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = role ? `GlyphKnit inquiry: ${role}` : "GlyphKnit inquiry";
    const body = [
      `Role or problem: ${role || ""}`,
      `Stack or context: ${stack || ""}`,
      `Timing: ${timing || ""}`,
      "",
      details || ""
    ].join("\n");

    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [details, role, stack, timing]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form className="hairline-card p-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl">Start a conversation</h2>
      <div className="mt-5 grid gap-4">
        <label className="text-sm font-semibold text-[var(--paper)]">
          Role or problem
          <input
            className={fieldClass}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Senior SDET role, ML-quality gate, API test harness"
            type="text"
            value={role}
          />
        </label>
        <label className="text-sm font-semibold text-[var(--paper)]">
          Stack or context
          <input
            className={fieldClass}
            onChange={(event) => setStack(event.target.value)}
            placeholder="Playwright, Python, Jenkins, AWS, data validation"
            type="text"
            value={stack}
          />
        </label>
        <label className="text-sm font-semibold text-[var(--paper)]">
          Timing
          <input
            className={fieldClass}
            onChange={(event) => setTiming(event.target.value)}
            placeholder="Now, this quarter, exploratory"
            type="text"
            value={timing}
          />
        </label>
        <label className="text-sm font-semibold text-[var(--paper)]">
          Details
          <textarea
            className={`${fieldClass} min-h-36 resize-y`}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="What needs to improve, what has already been tried, and what a useful first outcome would look like."
            value={details}
          />
        </label>
      </div>
      <button
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition hover:bg-[var(--accent-strong)]"
        type="submit"
      >
        <Mail aria-hidden="true" size={17} />
        Open email
      </button>
    </form>
  );
}
