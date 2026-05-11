import { debateTopics } from "./mock-data";

export function getDebateBySlug(slug: string) {
  return debateTopics.find((d) => d.slug === slug) ?? null;
}

export function getAllDebateSlugs() {
  return debateTopics.map((d) => d.slug);
}
