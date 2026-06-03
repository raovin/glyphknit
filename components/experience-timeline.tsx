import type { ExperienceItem } from "@/content/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  compact?: boolean;
};

export function ExperienceTimeline({ items, compact = false }: ExperienceTimelineProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <article className="hairline-card p-5" key={`${item.company}-${item.period}`}>
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mono-label">{item.period}</p>
              <h3 className="mt-2 text-xl">{item.publicLabel}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {item.title} · {item.location}
              </p>
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
