"use client";

import Image from "next/image";
import Link from "next/link";
import { DEMO_TODAY_LABEL, timelinePieces } from "@/lib/mock-data";
import type { PieceCategory, TimelinePiece } from "@/lib/types";
import { useReactions } from "@/components/providers/ReactionsProvider";

const categoryLabel: Record<PieceCategory, string> = {
  music: "음악",
  movie: "영화·문화",
  news: "사건·밈",
  article: "에디터 아티클",
};

function DeckLabel({ piece }: { piece: TimelinePiece }) {
  return (
    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
      {categoryLabel[piece.category]} · {piece.year}
    </span>
  );
}

function CardActions({ pieceId }: { pieceId: string }) {
  const { likedIds, bookmarkedIds, toggleLike, toggleBookmark } = useReactions();
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleLike(pieceId);
        }}
        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
          likedIds.has(pieceId)
            ? "bg-amber-900 text-white"
            : "border border-stone-200 bg-white text-stone-600 hover:border-stone-300"
        }`}
        aria-pressed={likedIds.has(pieceId)}
      >
        좋아요
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleBookmark(pieceId);
        }}
        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
          bookmarkedIds.has(pieceId)
            ? "bg-stone-900 text-white"
            : "border border-stone-200 bg-white text-stone-600 hover:border-stone-300"
        }`}
        aria-pressed={bookmarkedIds.has(pieceId)}
      >
        북마크
      </button>
    </div>
  );
}

export function MagazineTodayGrid() {
  const [featured, ...rest] = timelinePieces;

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-1 border-b border-stone-300/80 pb-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-amber-900/80">
          Magazine
        </p>
        <p className="text-sm text-stone-600">{DEMO_TODAY_LABEL} · 편집자 노트</p>
      </div>

      {/* Featured */}
      <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <Link
          href={`/today/${featured.slug}`}
          className="group relative block overflow-hidden bg-stone-100 lg:col-span-7"
          aria-label={`${featured.title} 기사로 이동`}
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[5/3]">
            <Image
              src={featured.coverImage.src}
              alt={featured.coverImage.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center lg:col-span-5">
          <DeckLabel piece={featured} />
          <Link href={`/today/${featured.slug}`} className="group mt-3 block">
            <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl font-semibold leading-snug tracking-tight text-stone-900 transition group-hover:text-amber-950 sm:text-3xl sm:leading-tight">
              {featured.title}
            </h2>
          </Link>
          {featured.subtitle ? (
            <p className="mt-2 text-sm font-medium text-stone-600">
              {featured.subtitle}
            </p>
          ) : null}
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-[17px] sm:leading-[1.65]">
            {featured.excerpt}
          </p>
          <Link
            href={`/today/${featured.slug}`}
            className="mt-5 inline-flex w-fit text-sm font-semibold text-amber-900 underline decoration-amber-900/25 underline-offset-4 transition hover:decoration-amber-900"
          >
            기사 전문 보기 — {featured.readTimeMinutes}분 읽기
          </Link>
          <CardActions pieceId={featured.id} />
        </div>
      </article>

      {/* Secondary row */}
      <div className="grid gap-8 border-t border-stone-200/90 pt-10 md:grid-cols-3">
        {rest.map((piece) => (
          <article key={piece.id} className="flex flex-col">
            <Link
              href={`/today/${piece.slug}`}
              className="group block overflow-hidden bg-stone-100"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={piece.coverImage.src}
                  alt={piece.coverImage.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
            </Link>
            <div className="mt-4 flex flex-1 flex-col">
              <DeckLabel piece={piece} />
              <Link href={`/today/${piece.slug}`} className="group mt-2 block">
                <h3 className="font-[family-name:var(--font-noto-serif)] text-lg font-semibold leading-snug text-stone-900 transition group-hover:text-amber-950">
                  {piece.title}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-stone-600">
                {piece.excerpt}
              </p>
              <Link
                href={`/today/${piece.slug}`}
                className="mt-3 text-xs font-semibold uppercase tracking-wider text-amber-900"
              >
                Read — {piece.readTimeMinutes} min
              </Link>
              <CardActions pieceId={piece.id} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
