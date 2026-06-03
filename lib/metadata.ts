import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataInput = {
  title?: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og/glyphknit-og.svg"
}: MetadataInput): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name} - ${siteConfig.primaryTitle}`
    : `${siteConfig.name} - ${siteConfig.primaryTitle}`;
  const url = new URL(path, siteConfig.canonicalUrl).toString();

  return {
    metadataBase: new URL(siteConfig.canonicalUrl),
    title: pageTitle,
    description,
    keywords: siteConfig.seoKeywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: "GlyphKnit",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image]
    }
  };
}
