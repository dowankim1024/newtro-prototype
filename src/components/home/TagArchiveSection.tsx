"use client";

import Link from "next/link";
import { useMemo } from "react";
import { timelinePieces } from "@/lib/mock-data";
import { useReactions } from "@/components/providers/ReactionsProvider";

function countTags(
  ids: Set<string>,
  weight: number,
  acc: Map<string, number>,
) {
  for (const piece of timelinePieces) {
    if (!ids.has(piece.id)) continue;
    for (const tag of piece.tags) {
      acc.set(tag, (acc.get(tag) ?? 0) + weight);
    }
  }
}

export function TagArchiveSection() {
  const { likedIds, bookmarkedIds } = useReactions();

  const ranked = useMemo(() => {
    const acc = new Map<string, number>();
    countTags(likedIds, 1, acc);
    countTags(bookmarkedIds, 2, acc);
    return [...acc.entries()].sort((a, b) => b[1] - a[1]);
  }, [likedIds, bookmarkedIds]);

  const totalReactions = likedIds.size + bookmarkedIds.size;

  return (
    <section aria-label="취향 태그 아카이브">
      {ranked.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50/60 p-8 text-center">
          <p className="text-sm text-stone-600">
            아직 쌓인 태그가 없어요.
          </p>
          <Link
            href="/today"
            className="mt-4 inline-flex text-sm font-medium text-amber-900 underline decoration-amber-900/30 underline-offset-4 hover:decoration-amber-900"
          >
            과거의 오늘에서 반응 남기기
          </Link>
        </div>
      ) : (
        <>
          <ul className="flex flex-wrap gap-2">
            {ranked.map(([tag, n]) => (
              <li key={tag}>
                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white px-3 py-1.5 text-sm text-stone-800 shadow-sm">
                  {tag}
                  <span className="text-xs font-medium tabular-nums text-amber-900">
                    ×{n}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-stone-500">
            반응한 카드 수 {totalReactions} · 태그 종류 {ranked.length}
          </p>
        </>
      )}
    </section>
  );
}
