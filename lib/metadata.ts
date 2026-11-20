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
  image = "/og/glyphknit-og.png"
}: MetadataInput): Metadata {
  const pageTitle = title
    ? `${title} | GlyphKnit`
    : "GlyphKnit | Test systems and release engineering";
  const url = new URL(path.endsWith("/") ? path : `${path}/`, siteConfig.canonicalUrl).toString();
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

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
          alt: "GlyphKnit. Test systems and release pipelines."
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
    },
    ...(googleVerification
      ? {
          verification: {
            google: googleVerification
          }
        }
      : {})
  };
}
