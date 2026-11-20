"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, type ReactNode } from "react";

const loadFeatures = () => import("./motion-features").then((module) => module.default);

// The boot script marks entrances settled shortly after the first load. On each
// client navigation, re-arm them before paint so the new page animates in, and
// settle again later in case the animation clock never runs.
function useEntranceRearm() {
  const pathname = usePathname();
  const firstRender = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const root = document.documentElement;
    root.classList.remove("motion-settled");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => root.classList.add("motion-settled"), 2000);
  }, [pathname]);

  useLayoutEffect(() => () => clearTimeout(timer.current), []);
}

export function MotionProvider({ children }: { children: ReactNode }) {
  useEntranceRearm();

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
      <LazyMotion features={loadFeatures} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
