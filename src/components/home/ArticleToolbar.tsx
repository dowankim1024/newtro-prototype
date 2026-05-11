"use client";

import { useReactions } from "@/components/providers/ReactionsProvider";

export function ArticleToolbar({ pieceId }: { pieceId: string }) {
  const { likedIds, bookmarkedIds, toggleLike, toggleBookmark } = useReactions();
  const liked = likedIds.has(pieceId);
  const marked = bookmarkedIds.has(pieceId);

  return (
    <div className="flex flex-wrap items-center gap-2 border-y border-stone-200/80 py-4">
      <button
        type="button"
        onClick={() => toggleLike(pieceId)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          liked
            ? "bg-amber-900 text-white"
            : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300"
        }`}
        aria-pressed={liked}
      >
        좋아요
      </button>
      <button
        type="button"
        onClick={() => toggleBookmark(pieceId)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          marked
            ? "bg-stone-900 text-white"
            : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300"
        }`}
        aria-pressed={marked}
      >
        북마크
      </button>
      <span className="ml-auto text-xs text-stone-400">
        반응은 태그 아카이브에 반영됩니다
      </span>
    </div>
  );
}
