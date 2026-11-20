"use client";

import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-[var(--nav-height)] z-40 h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
