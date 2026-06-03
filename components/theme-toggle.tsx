"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "light" ? "light" : "";
  }, [theme]);

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-grid size-10 place-items-center rounded-md border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--paper)]"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      type="button"
    >
      {theme === "dark" ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </button>
  );
}
