import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  description: siteConfig.description
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090b0c" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8f7" }
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
