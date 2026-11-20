import type { ReactNode } from "react";

import { SiteChrome } from "@/components/site-chrome";

export default function LabLayout({ children }: { children: ReactNode }) {
  return <SiteChrome surface="lab">{children}</SiteChrome>;
}
