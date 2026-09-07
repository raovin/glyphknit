import type { MetadataRoute } from "next";

import { demos } from "@/content/demos/demos";
import { projects } from "@/content/projects/projects";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/work",
  "/demos",
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
  const demoRoutes = demos.map((demo) => `/demos/${demo.slug}`);

  return [...staticRoutes, ...projectRoutes, ...demoRoutes].map((route) => ({
    url: new URL(canonicalRoute(route), siteConfig.canonicalUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7
  }));
}
