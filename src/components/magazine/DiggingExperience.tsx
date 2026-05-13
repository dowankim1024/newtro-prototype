"use client";

import { useEffect, useRef, useState } from "react";
import type { MagazineIssue, MagazineTrack, UserMagazine } from "@/lib/types";
import { useCollection } from "@/components/providers/CollectionProvider";
import { NeighborMixtapeFeed } from "@/components/magazine/NeighborMixtapeFeed";

function FloppyCollect({ track }: { track: MagazineTrack }) {
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
      className={`mt-4 inline-flex items-center justify-center rounded-xl border p-3 text-xl transition ${
        saved
          ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold)]"
          : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--gold-dim)] hover:text-[var(--ink)]"
      }`}
      aria-pressed={saved}
      aria-label={saved ? "믹스테이프에서 빼기" : "디스켓 · 믹스테이프에 담기"}
    >
      💾
    </button>
  );
}

function MinuteListenBar({ listen }: { listen: boolean }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!listen) return;
    const id = window.setInterval(() => {
      setElapsed((s) => (s >= 60 ? 60 : s + 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [listen]);

  const pct = (elapsed / 60) * 100;
  const mm = Math.floor(elapsed / 60);
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="mt-6" aria-live="polite">
      <div className="flex items-center justify-between text-xs text-[var(--muted)]">
        <span>1분 미리듣기</span>
        <span className="tabular-nums text-[var(--ink)]">
          {mm}:{ss} / 1:00
        </span>
      </div>
      <div
        className="mt-2 h-1 overflow-hidden rounded-full bg-black/50"
        role="progressbar"
        aria-valuenow={elapsed}
        aria-valuemin={0}
        aria-valuemax={60}
      >
        <div
          className="h-full rounded-full bg-[var(--gold)] transition-[width] duration-300 ease-linear"
          style={{ width: `${listen ? pct : 0}%` }}
        />
      </div>
    </div>
  );
}

export function DiggingExperience({
  issue,
  neighborMagazines,
}: {
  issue: MagazineIssue;
  neighborMagazines: UserMagazine[];
}) {
  const [visibleRatio, setVisibleRatio] = useState<Record<string, number>>({});
  const defaultId = issue.tracks[0]?.id ?? "";
  const tracksContainerRef = useRef<HTMLDivElement>(null);

  const activeId =
    Object.entries(visibleRatio)
      .filter(([, r]) => r > 0.2)
      .sort((a, b) => b[1] - a[1])[0]?.[0] ?? defaultId;

  useEffect(() => {
    const root = tracksContainerRef.current;
    if (!root) return;

    const obs = new IntersectionObserver(
      (entries) => {
        setVisibleRatio((prev) => {
          const next = { ...prev };
          for (const e of entries) {
            const id = (e.target as HTMLElement).dataset.magTrack;
            if (!id) continue;
            next[id] = e.intersectionRatio;
          }
          return next;
        });
      },
      { threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1] },
    );

    root.querySelectorAll<HTMLElement>("[data-mag-track]").forEach((el) => {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [issue]);

  return (
    <div className="pb-8">
      <header className="mx-auto max-w-3xl px-4 pb-16 pt-12 text-center sm:px-6 sm:pt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          데일리 뮤직 매거진 · 오늘의 디깅
        </p>
        <h1 className="font-[family-name:var(--font-serif)] mt-4 text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
          {issue.headline}
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{issue.dateLabel}</p>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-stone-300">
          {issue.dek}
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          스크롤로 글을 읽을 때 화면에 머무는 곡 기준으로 1분 구간이
          이어집니다.
        </p>
      </header>

      <div
        ref={tracksContainerRef}
        className="mx-auto max-w-5xl space-y-24 px-4 sm:px-6"
      >
        {issue.tracks.map((track, i) => {
          const alignRight = i % 2 === 1;
          const listening = activeId === track.id;

          return (
            <section
              key={track.id}
              data-mag-track={track.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                alignRight ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`tape-glow relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br p-1 sm:aspect-square ${
                  track.coverClass
                } ${alignRight ? "lg:order-2" : ""}`}
              >
                <div className="flex h-full flex-col justify-end rounded-xl bg-black/25 p-6 backdrop-blur-[2px]">
                  <p className="text-xs text-white/70">{track.year}</p>
                  <p className="font-[family-name:var(--font-serif)] mt-1 text-2xl font-semibold text-white">
                    {track.title}
                  </p>
                  <p className="mt-1 text-sm text-white/85">{track.artist}</p>
                  <p className="mt-3 text-xs text-white/60">{track.subtitle}</p>
                </div>
                {listening ? (
                  <div
                    className="pointer-events-none absolute inset-0 ring-2 ring-[var(--gold)]/40"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className={alignRight ? "lg:order-1" : ""}>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)]">
                  {track.era === "cassette"
                    ? "Cassette era"
                    : track.era === "cd"
                      ? "CD era"
                      : "LP mood"}
                </p>
                <p className="mt-4 text-lg leading-[1.85] text-stone-300">
                  {track.article}
                </p>
                <MinuteListenBar
                  key={`${track.id}-${listening}`}
                  listen={listening}
                />
                <FloppyCollect track={track} />
              </div>
            </section>
          );
        })}
      </div>

      <NeighborMixtapeFeed items={neighborMagazines} />
    </div>
  );
}
