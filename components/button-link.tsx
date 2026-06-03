import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent-strong)]",
  secondary:
    "border-[var(--line)] bg-[var(--surface)] text-[var(--paper)] hover:border-[var(--accent)] hover:text-[var(--accent-strong)]",
  ghost:
    "border-transparent bg-transparent text-[var(--muted)] hover:text-[var(--paper)]"
};

export function ButtonLink({
  children,
  icon,
  variant = "secondary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
