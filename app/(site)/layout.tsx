import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}
