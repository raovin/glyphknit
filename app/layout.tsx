import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = buildMetadata({
  description:
    "Vin Rao is a Senior SDET and ML-quality engineer building test automation, API validation, CI/CD testing, data validation, and MLOps quality gates."
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.primaryTitle,
  url: siteConfig.canonicalUrl,
  email: `mailto:${siteConfig.email}`,
  sameAs: [siteConfig.githubUrl],
  knowsAbout: siteConfig.seoKeywords
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`} lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
