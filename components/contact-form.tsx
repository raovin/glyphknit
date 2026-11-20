"use client";

import { Copy, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { siteConfig } from "@/content/site";
import { buildInquiryDraft, type InquiryProject } from "@/lib/contact-inquiry";

const fieldClass =
  "mt-2 w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--paper)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)]";

export function ContactInquiryForm({ projects }: { projects: InquiryProject[] }) {
  const searchParams = useSearchParams();
  const project = projects.find(({ slug }) => slug === searchParams.get("project"));

  return (
    <ContactForm
      key={project?.slug ?? ""}
      relatedProject={project}
    />
  );
}

export function ContactForm({ relatedProject, nativeOnly = false }: { relatedProject?: InquiryProject; nativeOnly?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const problemRef = useRef<HTMLInputElement>(null);
  const [problem, setProblem] = useState("");
  const [stack, setStack] = useState("");
  const [timing, setTiming] = useState("");
  const [details, setDetails] = useState("");
  const [includeProject, setIncludeProject] = useState(true);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "manual">("idle");

  const draft = buildInquiryDraft({
    recipient: siteConfig.email,
    problem,
    stack,
    timing,
    details,
    relatedProject: includeProject ? relatedProject : undefined,
  });

  function validateInquiry() {
    problemRef.current?.setCustomValidity(
      problem.trim() ? "" : "Describe your project or problem.",
    );
    return formRef.current?.reportValidity() ?? false;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateInquiry()) window.location.href = draft.mailtoHref;
  }

  async function copyInquiry() {
    if (!validateInquiry()) return;

    try {
      await navigator.clipboard.writeText(draft.text);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("manual");
    }
  }

  return (
    <form
      action={`mailto:${siteConfig.email}`}
      method="post"
      encType="text/plain"
      className="border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8"
      onSubmit={handleSubmit}
      onChange={() => setCopyStatus((status) => status === "copied" ? "idle" : status)}
      ref={formRef}
    >
      <h2 className="text-2xl font-medium tracking-[-0.03em]">
        Project inquiry
      </h2>
      <p className="mt-3 text-xs text-[var(--muted)]">
        {nativeOnly ? "Open a draft in your email app." : "Open a draft in your email app, or copy it into webmail."} You send the email yourself.
      </p>
      {relatedProject && includeProject && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-[var(--line)] p-3 text-sm">
          <p>Related project: {relatedProject.title}</p>
          <button
            className="min-h-11 px-2 text-[var(--muted)] underline underline-offset-4 hover:text-[var(--paper)]"
            onClick={() => {
              setIncludeProject(false);
              setCopyStatus((status) => status === "copied" ? "idle" : status);
            }}
            type="button"
          >
            Remove related project
          </button>
        </div>
      )}
      <div className="mt-5 grid gap-4">
        <label className="text-sm font-semibold text-[var(--paper)]">
          Project or problem (required)
          <input
            className={fieldClass}
            onChange={(event) => {
              event.target.setCustomValidity("");
              setProblem(event.target.value);
            }}
            placeholder="Slow CI, unreliable tests, a new API harness"
            name="project"
            required
            pattern={".*\\S.*"}
            ref={problemRef}
            type="text"
            value={problem}
          />
        </label>
        <label className="text-sm font-semibold text-[var(--paper)]">
          Stack or context
          <input
            className={fieldClass}
            onChange={(event) => setStack(event.target.value)}
            placeholder="Playwright, Python, Jenkins, AWS, data validation"
            name="stack"
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
            name="timing"
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
            name="details"
            value={details}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition hover:bg-[var(--accent-strong)]"
          type="submit"
        >
          <Mail aria-hidden="true" size={17} />
          Open email draft
        </button>
        {!nativeOnly && <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--paper)] transition hover:border-[var(--accent)]"
          onClick={copyInquiry}
          type="button"
        >
          <Copy aria-hidden="true" size={17} />
          Copy inquiry
        </button>}
      </div>
      <p aria-live="polite" className="mt-3 text-sm text-[var(--muted)]" role="status">
        {copyStatus === "copied" && "Inquiry copied, including the email address."}
        {copyStatus === "manual" &&
          "Copy is unavailable here. Select the draft below and copy it into your email app."}
      </p>
      {copyStatus === "manual" && (
        <div className="mt-4 text-sm">
          <label className="font-semibold text-[var(--paper)]" htmlFor="inquiry-draft">Inquiry draft, including recipient and subject</label>
          <textarea
            id="inquiry-draft"
            className={`${fieldClass} min-h-64 resize-y font-mono font-normal`}
            onFocus={(event) => event.currentTarget.select()}
            readOnly
            value={draft.text}
          />
        </div>
      )}
      <noscript>
        <p className="mt-4 text-sm text-[var(--muted)]">
          JavaScript is off. Open email draft will use your email app, or email{" "}
          <a className="underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          directly.
        </p>
      </noscript>
    </form>
  );
}
