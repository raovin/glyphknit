import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  id,
  className = ""
}: SectionProps) {
  return (
    <section id={id} className={`site-shell py-16 md:py-24 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-3xl md:mb-10">
          {eyebrow ? <p className="mono-label mb-3">{eyebrow}</p> : null}
          {title ? (
            <h2 className="text-3xl md:text-4xl">{title}</h2>
          ) : null}
          {description ? (
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
