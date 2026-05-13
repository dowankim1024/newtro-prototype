"use client";

import { useMemo } from "react";
import { useCollection } from "@/components/providers/CollectionProvider";

function Cassette3D({ active }: { active: boolean }) {
  return (
    <div className="mx-auto w-48 sm:w-56" style={{ perspective: "900px" }}>
      <div
        className="relative mx-auto h-32 origin-center transition-transform duration-700 ease-out sm:h-36"
        style={{
          transform: active
            ? "rotateY(-12deg) rotateX(6deg)"
            : "rotateY(0deg) rotateX(4deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950 shadow-2xl ring-1 ring-[var(--gold-dim)]">
          <div className="absolute inset-x-4 top-3 h-16 rounded bg-stone-900/90 ring-1 ring-black/40" />
          <div className="absolute bottom-4 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-stone-900 ring-1 ring-[var(--gold)]/30" />
          <div className="absolute left-4 top-10 h-10 w-10 rounded-full border-2 border-stone-600 bg-stone-950" />
          <div className="absolute right-4 top-10 h-10 w-10 rounded-full border-2 border-stone-600 bg-stone-950" />
        </div>
      </div>
    </div>
  );
}

function Cd3D({ active }: { active: boolean }) {
  return (
    <div className="mx-auto w-44 sm:w-52">
      <div
        className={`relative mx-auto aspect-square rounded-full bg-gradient-to-br from-stone-400 via-stone-600 to-stone-900 shadow-2xl ring-2 ring-[var(--gold)]/25 transition-transform duration-700 ${
          active ? "scale-105" : ""
        }`}
        style={{
          boxShadow:
            "inset 0 2px 20px rgba(255,255,255,0.12), 0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div className="absolute inset-[22%] rounded-full bg-stone-950 ring-1 ring-white/10" />
        <div className="absolute inset-[42%] rounded-full bg-gradient-to-br from-[var(--gold)] to-amber-900 ring-4 ring-stone-900" />
      </div>
    </div>
  );
}

function Lp3D({ active }: { active: boolean }) {
  return (
    <div className="mx-auto w-52 sm:w-64">
      <div
        className={`relative aspect-square rounded-full bg-gradient-to-br from-stone-800 to-black shadow-2xl ring-1 ring-stone-600 transition-transform duration-700 ${
          active ? "rotate-6" : ""
        }`}
      >
        <div className="absolute inset-2 rounded-full border border-white/5" />
        <div className="absolute inset-[30%] rounded-full bg-red-950/80 ring-1 ring-black/50" />
        <div className="absolute inset-[45%] rounded-full bg-stone-950 ring-2 ring-[var(--gold)]/40" />
      </div>
    </div>
  );
}

export function MixtapeShelf() {
  const { items } = useCollection();
  const list = useMemo(() => Object.values(items), [items]);

  const byEra = useMemo(() => {
    return {
      cassette: list.filter((x) => x.era === "cassette"),
      cd: list.filter((x) => x.era === "cd"),
      lp: list.filter((x) => x.era === "lp"),
    };
  }, [list]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          나의 믹스테이프
        </p>
        <h1 className="font-[family-name:var(--font-serif)] mt-3 text-3xl font-semibold text-[var(--ink)]">
          수집한 곡의 시대에 맞춘 카세트, CD, LP
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--muted)]">
          리스트가 아닌 3D 디지털 오브젝트로 소유감을 주는 공간입니다. WebGL로
          질감·조명을 더합니다.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/50 p-6 text-center">
          <p className="text-xs text-[var(--gold)]">Cassette</p>
          <Cassette3D active={byEra.cassette.length > 0} />
          <p className="mt-4 text-2xl font-semibold tabular-nums text-[var(--ink)]">
            {byEra.cassette.length}
          </p>
          <p className="text-xs text-[var(--muted)]">트랙</p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/50 p-6 text-center">
          <p className="text-xs text-[var(--gold)]">CD</p>
          <Cd3D active={byEra.cd.length > 0} />
          <p className="mt-4 text-2xl font-semibold tabular-nums text-[var(--ink)]">
            {byEra.cd.length}
          </p>
          <p className="text-xs text-[var(--muted)]">트랙</p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/50 p-6 text-center">
          <p className="text-xs text-[var(--gold)]">LP</p>
          <Lp3D active={byEra.lp.length > 0} />
          <p className="mt-4 text-2xl font-semibold tabular-nums text-[var(--ink)]">
            {byEra.lp.length}
          </p>
          <p className="text-xs text-[var(--muted)]">트랙</p>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-[var(--line)] bg-black/30 p-6 sm:p-8">
        <h2 className="text-sm font-semibold text-[var(--ink)]">보관함</h2>
        {list.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--muted)]">
            오늘의 디깅에서 디스켓으로 곡을 담으면 여기에 쌓입니다.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-[var(--line)]">
            {list.map((t) => (
              <li
                key={t.id}
                className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"
              >
                <span className="text-[var(--ink)]">
                  {t.artist} — {t.title}
                </span>
                <span className="text-xs text-[var(--muted)]">
                  {t.year} · {t.era}
                </span>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
          프리미엄에서는 수집한 ID를 유튜브 뮤직·스포티파이 재생목록으로 한 번에
          옮깁니다.
        </p>
      </div>
    </div>
  );
}
