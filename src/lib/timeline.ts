import { timelinePieces } from "@/lib/mock-data";

export function getPieceBySlug(slug: string) {
  return timelinePieces.find((p) => p.slug === slug) ?? null;
}

export function getAllPieceSlugs() {
  return timelinePieces.map((p) => p.slug);
}
