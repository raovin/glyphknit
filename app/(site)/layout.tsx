import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
