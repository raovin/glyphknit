import type { ExperienceItem } from "@/content/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  compact?: boolean;
};

function headline(item: ExperienceItem) {
  return item.client ?? item.publicLabel;
}

/** The platform description, shown only when it adds something to the name. */
function subline(item: ExperienceItem) {
  return item.client && item.publicLabel !== item.client ? item.publicLabel : null;
}

export function ExperienceTimeline({ items, compact = false }: ExperienceTimelineProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <article className="hairline-card p-5" key={`${item.publicLabel}-${item.period}`}>
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="mono-label">{item.period}</p>
                {item.kind === "consulting" ? (
                  <span className="chip whitespace-nowrap">consulting</span>
                ) : null}
              </div>
              <h3 className="mt-2 text-xl">{headline(item)}</h3>
              {subline(item) ? (
                <p className="mt-1 text-sm text-[var(--text)]">{subline(item)}</p>
              ) : null}
              <p className="mt-2 text-sm text-[var(--muted)]">
                {item.title} · {item.location}
              </p>
              {item.via ? (
                <p className="mt-1 text-sm text-[var(--faint)]">via {item.via}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.metrics.slice(0, compact ? 2 : item.metrics.length).map((metric) => (
                  <span className="chip" key={metric}>
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ul className="grid gap-2 text-sm text-[var(--muted)]">
                {item.bullets.slice(0, compact ? 2 : item.bullets.length).map((bullet) => (
                  <li className="border-l border-[var(--accent)] pl-3" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
              {!compact ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tool) => (
                    <span className="chip" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
