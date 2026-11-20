import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Nav } from "./nav";

export function SiteChrome({ surface, children }: { surface: "editorial" | "lab"; children: ReactNode }) {
  return (
    <div className="surface" data-surface={surface}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main className="outline-none" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
