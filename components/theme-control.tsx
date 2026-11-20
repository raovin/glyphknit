"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useId, useSyncExternalStore } from "react";

import { readThemeChoice, subscribeThemeChoice, writeThemeChoice, type ThemeChoice } from "@/lib/theme";

const options: { value: ThemeChoice; label: string; Icon: typeof Sun }[] = [
  { value: "auto", label: "Automatic theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon }
];

export function ThemeControl({ className = "" }: { className?: string }) {
  const name = useId();
  const choice = useSyncExternalStore(subscribeThemeChoice, readThemeChoice, () => "auto" as ThemeChoice);

  return (
    <fieldset className={`inline-flex items-center rounded-[3px] border border-line p-[3px] ${className}`}>
      <legend className="sr-only">Color theme</legend>
      {options.map(({ value, label, Icon }) => (
        <label
          className="relative grid size-8 cursor-pointer place-items-center rounded-[2px] text-faint transition-colors duration-200 hover:text-ink has-checked:bg-soft has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent-strong"
          key={value}
          title={label}
        >
          <input
            aria-label={label}
            checked={choice === value}
            className="sr-only"
            name={name}
            onChange={() => writeThemeChoice(value)}
            type="radio"
            value={value}
          />
          <Icon aria-hidden="true" size={15} strokeWidth={1.75} />
          <span className="sr-only">{label}</span>
        </label>
      ))}
    </fieldset>
  );
}
