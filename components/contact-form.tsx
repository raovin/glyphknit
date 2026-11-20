"use client";

import { Copy, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { siteConfig } from "@/content/site";
import { buildInquiryDraft, type InquiryProject } from "@/lib/contact-inquiry";

const fieldClass = "field";

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
      className="border border-line bg-surface p-6 sm:p-8 md:p-10"
      onSubmit={handleSubmit}
      onChange={() => setCopyStatus((status) => status === "copied" ? "idle" : status)}
      ref={formRef}
    >
      <h2 className="display-3">
        Project inquiry
      </h2>
      <p className="mt-3 text-[0.875rem] text-muted">
        {nativeOnly ? "Open a draft in your email app." : "Open a draft in your email app, or copy it into webmail."} You send the email yourself.
      </p>
      {relatedProject && includeProject && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-l-2 border-accent bg-raised/60 py-2 pl-4 pr-2 text-[0.9375rem] text-ink">
          <p>Related project: {relatedProject.title}</p>
          <button
            className="min-h-11 px-2 text-[0.875rem] text-muted underline underline-offset-4 hover:text-ink"
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
      <div className="mt-8 grid gap-6">
        <label className="block text-[0.875rem] font-medium text-ink">
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
        <label className="block text-[0.875rem] font-medium text-ink">
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
        <label className="block text-[0.875rem] font-medium text-ink">
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
        <label className="block text-[0.875rem] font-medium text-ink">
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
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          className="btn btn-primary"
          type="submit"
        >
          <Mail aria-hidden="true" size={17} />
          Open email draft
        </button>
        {!nativeOnly && <button
          className="btn btn-secondary"
          onClick={copyInquiry}
          type="button"
        >
          <Copy aria-hidden="true" size={17} />
          Copy inquiry
        </button>}
      </div>
      <p aria-live="polite" className="mt-3 text-[0.875rem] text-muted" role="status">
        {copyStatus === "copied" && "Inquiry copied, including the email address."}
        {copyStatus === "manual" &&
          "Copy is unavailable here. Select the draft below and copy it into your email app."}
      </p>
      {copyStatus === "manual" && (
        <div className="mt-4 text-sm">
          <label className="text-[0.875rem] font-medium text-ink" htmlFor="inquiry-draft">Inquiry draft, including recipient and subject</label>
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
        <p className="mt-4 text-[0.875rem] text-muted">
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
