export function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <rect height="22.5" stroke="currentColor" strokeWidth="1.5" width="22.5" x=".75" y=".75" />
      <text
        fill="currentColor"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fontWeight="600"
        letterSpacing="-.3"
        textAnchor="middle"
        x="12"
        y="15.2"
      >
        GK
      </text>
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5 text-ink">
      <Mark />
      <span className="wordmark">GlyphKnit</span>
    </span>
  );
}
