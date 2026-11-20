"use client";

import { animate, inView } from "motion";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "rise" fades content up; "grow" draws a bar from its start edge. */
  effect?: "rise" | "grow";
};

/**
 * Animates content that starts below the fold as it scrolls into view.
 * Content already on screen, without JavaScript, or under reduced motion
 * is left exactly as rendered, so nothing depends on the animation.
 */
export function Reveal({ children, className, delay = 0, effect = "rise" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.94) return;

    const from = effect === "grow" ? { transform: "scaleX(0)" } : { opacity: 0, transform: "translateY(28px)" };
    Object.assign(element.style, from, effect === "grow" ? { transformOrigin: "left center" } : {});

    return inView(
      element,
      () => {
        animate(
          element,
          effect === "grow" ? { transform: "scaleX(1)" } : { opacity: 1, transform: "translateY(0px)" },
          { duration: effect === "grow" ? 1.1 : 0.9, delay, ease: [0.16, 1, 0.3, 1] }
        );
      },
      { margin: "0px 0px -10% 0px" }
    );
  }, [delay, effect]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
