export type ThemeChoice = "auto" | "light" | "dark";

const storageKey = "gk-theme";
const changeEvent = "gk-theme-change";

// Runs inline in <head> before first paint, so it must stay dependency-free.
// It applies a saved theme, enables entrance motion, and guarantees the
// entrance finishes even when the animation clock never advances.
export const themeBootScript = `(function(){var r=document.documentElement;try{var t=localStorage.getItem("${storageKey}");if(t==="light"||t==="dark")r.dataset.theme=t}catch(e){}r.classList.add("motion-ready");var s=function(){setTimeout(function(){r.classList.add("motion-settled")},2000)};if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",s);else s()})()`;

export function readThemeChoice(): ThemeChoice {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : "auto";
}

export function writeThemeChoice(choice: ThemeChoice) {
  const root = document.documentElement;
  if (choice === "auto") delete root.dataset.theme;
  else root.dataset.theme = choice;

  try {
    if (choice === "auto") localStorage.removeItem(storageKey);
    else localStorage.setItem(storageKey, choice);
  } catch {
    // Storage can be unavailable; the choice still applies to this page view.
  }

  window.dispatchEvent(new Event(changeEvent));
}

export function subscribeThemeChoice(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}
