import { projects } from "@/content/projects/projects";
import { repos } from "@/content/repos/repos";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRepoBySlug(slug: string) {
  return repos.find((repo) => repo.slug === slug);
}
