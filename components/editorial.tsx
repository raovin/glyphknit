import type { CSSProperties, ReactNode } from "react";

/** Order for the CSS entrance sequence (.rise-mask, .fade-in). */
export const stagger = (index: number) => ({ "--i": index }) as CSSProperties;

type SectionHeadProps = {
  index?: string;
  label: string;
  meta?: ReactNode;
  className?: string;
  as?: "div" | "h2";
  id?: string;
};

export function SectionHead({ index, label, meta, className = "", as: Tag = "div", id }: SectionHeadProps) {
  return (
    <div className={`index-rule ${className}`}>
      {index ? <span aria-hidden="true">{index}</span> : null}
      <Tag className="m-0 font-[inherit] text-[length:inherit] leading-[inherit] tracking-[inherit] text-muted" id={id}>
        {label}
      </Tag>
      {meta ? <span data-meta="">{meta}</span> : null}
    </div>
  );
}

type FigureProps = {
  number: number | string;
  title: string;
  caption: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Figure({ number, title, caption, children, className = "" }: FigureProps) {
  return (
    <figure className={`fig ${className}`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="fig-number">Fig. {number}</span>
        <span className="label text-right">{title}</span>
      </div>
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
  aside,
  titleClassName = "max-w-[16ch]"
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <header className="shell pb-14 pt-14 md:pb-20 md:pt-24">
      <div className="fade-in" style={stagger(0)}>
        {eyebrow}
      </div>
      <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:items-end lg:gap-16">
        <div>
          <h1 className={`display-1 rise-mask ${titleClassName}`}>
            <span style={stagger(1)}>{title}</span>
          </h1>
          {children ? (
            <div className="fade-in mt-8" style={stagger(2)}>
              {children}
            </div>
          ) : null}
        </div>
        {aside ? (
          <div className="fade-in" style={stagger(3)}>
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}
