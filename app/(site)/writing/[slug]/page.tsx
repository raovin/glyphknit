import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return buildMetadata({
    title: "Writing",
    description: `Writing placeholder for ${slug}.`,
    path: `/writing/${slug}`
  });
}

export default function WritingDetailPage() {
  notFound();
}
