import type { MetadataRoute } from "next";

import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/work",
  "/code",
  "/resume",
  "/about",
  "/contact",
  "/work-with-me"
];

function canonicalRoute(route: string) {
  return route === "/" ? route : `${route}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: new URL(canonicalRoute(route), siteConfig.canonicalUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7
  }));
}
