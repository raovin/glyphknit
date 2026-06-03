import type { MetadataRoute } from "next";

import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";

const staticRoutes = [
  "/",
  "/work",
  "/code",
  "/about",
  "/contact",
  "/work-with-me",
  "/writing"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: new URL(route, siteConfig.canonicalUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7
  }));
}
