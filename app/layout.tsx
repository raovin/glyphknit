import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Analytics } from "@/components/analytics";
import { MotionProvider } from "@/components/motion-provider";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { themeBootScript } from "@/lib/theme";

import { fontVariables } from "./fonts";

export const metadata: Metadata = buildMetadata({
  description: siteConfig.description
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1312" }
  ]
};

const companyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GlyphKnit",
  legalName: "GlyphKnit Solutions LLC",
  founder: { "@type": "Person", name: siteConfig.name, sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl] },
  url: siteConfig.canonicalUrl,
  email: `mailto:${siteConfig.email}`,
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={fontVariables} lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <Analytics />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
