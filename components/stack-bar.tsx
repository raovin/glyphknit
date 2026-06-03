type StackBarProps = {
  items: string[];
  meta: string;
};

export function StackBar({ items, meta }: StackBarProps) {
  return (
    <div className="site-shell border-y border-[var(--line)] py-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <p className="font-mono text-sm text-[var(--muted)]">{meta}</p>
      </div>
    </div>
  );
}
