"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CodeBlockProps = {
  filename: string;
  code: string;
  language?: string;
};

export function CodeBlock({ filename, code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)]">
      <div className="flex min-h-11 items-center justify-between gap-3 border-b border-[var(--line)] px-4">
        <p className="font-mono text-xs text-[var(--muted)]">{filename}</p>
        <button
          className="inline-grid size-8 place-items-center rounded-md border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
          onClick={copyCode}
          type="button"
        >
          <span className="sr-only">Copy {filename}</span>
          {copied ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-[var(--text)]">
        <code data-language={language}>{code}</code>
      </pre>
    </div>
  );
}
