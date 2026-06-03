type ImpactItem = {
  label: string;
  value: string;
  detail: string;
};

export function ImpactList({ items }: { items: ImpactItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article className="hairline-card p-5" key={item.label}>
          <p className="mono-label">{item.label}</p>
          <p className="mt-4 font-mono text-2xl text-[var(--paper)]">{item.value}</p>
          <p className="mt-3 text-sm text-[var(--muted)]">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
