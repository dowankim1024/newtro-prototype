"use client";

import type { UserMagazine } from "@/lib/types";
import { useCollection } from "@/components/providers/CollectionProvider";

function DisketteCollect({ track }: { track: UserMagazine["tracks"][number] }) {
  const { add, remove, has } = useCollection();
  const saved = has(track.id);

  return (
    <button
      type="button"
      onClick={() =>
        saved
          ? remove(track.id)
          : add({
              id: track.id,
              title: track.title,
              artist: track.artist,
              year: track.year,
              era: track.era,
            })
      }
      className={`shrink-0 rounded-lg border px-2 py-1 text-xs transition ${
        saved
          ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold)]"
          : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--gold-dim)]"
      }`}
      aria-pressed={saved}
      aria-label={saved ? "보관함에서 제거" : "믹스테이프에 담기"}
    >
      💾
    </button>
  );
}

export function NeighborMixtapeFeed({ items }: { items: UserMagazine[] }) {
  return (
    <section className="border-t border-[var(--line)] bg-black/25 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          이웃의 믹스테이프
        </p>
        <h2 className="font-[family-name:var(--font-serif)] mt-3 text-2xl font-semibold text-[var(--ink)]">
          오늘의 디깅 아래, 유저가 발행한 작은 매거진
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          오늘의 디깅 하단에 이어지는 유저 발행 피드입니다.
        </p>
        <ul className="mt-10 space-y-8">
          {items.map((mag) => (
            <li
              key={mag.id}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/35 p-6"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--ink)]">
                  {mag.title}
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  {mag.author} · {mag.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                {mag.episode}
              </p>
              <ul className="mt-4 divide-y divide-[var(--line)]">
                {mag.tracks.map((t) => (
                  <li
                    key={t.id}
                    className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm"
                  >
                    <span className="text-[var(--ink)]">
                      {t.artist} — {t.title}
                      <span className="ml-2 text-xs text-[var(--muted)]">
                        {t.year}
                      </span>
                    </span>
                    <DisketteCollect track={t} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
