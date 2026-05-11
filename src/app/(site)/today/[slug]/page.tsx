import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleToolbar } from "@/components/home/ArticleToolbar";
import { MagazineArticleBody } from "@/components/home/MagazineArticleBody";
import { getAllPieceSlugs, getPieceBySlug } from "@/lib/timeline";
import type { PieceCategory } from "@/lib/types";

type Props = { params: Promise<{ slug: string }> };

const categoryLabel: Record<PieceCategory, string> = {
  music: "음악",
  movie: "영화·문화",
  news: "사건·밈",
  article: "에디터 아티클",
};

export function generateStaticParams() {
  return getAllPieceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) return { title: "기사를 찾을 수 없음" };
  return {
    title: piece.title,
    description: piece.excerpt,
  };
}

export default async function TodayArticlePage({ params }: Props) {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
      <nav className="text-xs text-stone-500">
        <Link href="/today" className="hover:text-amber-900">
          과거의 오늘
        </Link>
        <span className="mx-2 text-stone-300" aria-hidden>
          /
        </span>
        <span className="text-stone-700">{piece.title}</span>
      </nav>

      <article className="mt-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-900/85">
          {categoryLabel[piece.category]} · {piece.year} · 약 {piece.readTimeMinutes}분
        </p>
        <h1 className="font-[family-name:var(--font-noto-serif)] mt-3 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl sm:leading-[1.15]">
          {piece.title}
        </h1>
        {piece.subtitle ? (
          <p className="mt-4 text-lg font-medium text-stone-600">{piece.subtitle}</p>
        ) : null}

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden bg-stone-100 sm:aspect-[5/3]">
          <Image
            src={piece.coverImage.src}
            alt={piece.coverImage.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
            priority
          />
        </div>

        <ArticleToolbar pieceId={piece.id} />

        <p className="font-[family-name:var(--font-noto-serif)] mt-4 text-xl font-medium leading-relaxed text-stone-800 sm:text-2xl sm:leading-snug">
          {piece.article.lead}
        </p>

        <div className="mt-12">
          <MagazineArticleBody blocks={piece.article.blocks} />
        </div>

        {piece.linkLabel ? (
          <p className="mt-12 rounded-md border border-dashed border-stone-200 bg-stone-50/80 px-4 py-3 text-center text-sm text-stone-500">
            {piece.linkLabel}
          </p>
        ) : null}

        <ul
          className="mt-10 flex flex-wrap gap-2 border-t border-stone-200/90 pt-8"
          aria-label="기사 태그"
        >
          {piece.tags.map((t) => (
            <li key={t}>
              <span className="rounded-md border border-stone-200/80 bg-white px-2 py-1 text-xs text-stone-600">
                {t}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <Link
            href="/today"
            className="text-sm font-semibold text-amber-900 underline decoration-amber-900/25 underline-offset-4 hover:decoration-amber-900"
          >
            ← 목록으로
          </Link>
        </p>
      </article>
    </div>
  );
}
