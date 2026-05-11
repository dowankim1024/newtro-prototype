import Image from "next/image";
import type { ArticleBlock } from "@/lib/types";

export function MagazineArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body space-y-8">
      {blocks.map((b, i) => {
        const key = `${b.kind}-${i}`;
        if (b.kind === "p") {
          return (
            <p
              key={key}
              className="text-[17px] leading-[1.85] text-stone-700 sm:text-lg sm:leading-[1.8]"
            >
              {b.text}
            </p>
          );
        }
        if (b.kind === "h2") {
          return (
            <h2
              key={key}
              className="font-[family-name:var(--font-noto-serif)] text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl"
            >
              {b.text}
            </h2>
          );
        }
        if (b.kind === "quote") {
          return (
            <blockquote
              key={key}
              className="border-l-4 border-amber-900/40 bg-amber-50/50 py-4 pr-6 pl-6 font-[family-name:var(--font-noto-serif)] text-lg italic leading-relaxed text-stone-800 sm:text-xl"
            >
              {b.text}
            </blockquote>
          );
        }
        if (b.kind === "figure") {
          return (
            <figure key={key} className="my-10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-stone-100 sm:rounded-md">
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 720px, 100vw"
                />
              </div>
              {b.caption ? (
                <figcaption className="mt-3 text-center text-sm text-stone-500">
                  {b.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}
