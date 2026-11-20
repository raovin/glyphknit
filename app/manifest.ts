import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GlyphKnit",
    short_name: "GlyphKnit",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f2ed",
    theme_color: "#16766c",
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
