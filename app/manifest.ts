import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GlyphKnit",
    short_name: "GlyphKnit",
    description:
      "Portfolio for Vin Rao, Senior SDET and ML Quality Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#090b0c",
    theme_color: "#2f9b90",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ],
    id: siteConfig.canonicalUrl
  };
}
