import type { ReactNode } from "react";

import { SiteChrome } from "@/components/site-chrome";

export default function EditorialLayout({ children }: { children: ReactNode }) {
  return <SiteChrome surface="editorial">{children}</SiteChrome>;
}
