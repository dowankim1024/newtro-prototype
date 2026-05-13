"use client";

import { useState } from "react";

const MOCK_CAPSULE = [
  { title: "수록 B면 마지막", artist: "가상의 듀오", year: 1997 },
  { title: "3번 트랙", artist: "익명의 솔로", year: 1998 },
  { title: "라디오에서만 들린", artist: "인디 밴드", year: 1999 },
];

export function AiCapsuleFlow() {
  const [birth, setBirth] = useState("");
  const [grad, setGrad] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [done, setDone] = useState(false);

  const tags = tagInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 3);

  const canSubmit =
    birth.trim().length === 4 &&
    grad.trim().length === 4 &&
    tags.length === 3;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
        나만의 숨은 트랙
      </p>
      <h1 className="font-[family-name:var(--font-serif)] mt-3 text-3xl font-semibold text-[var(--ink)]">
        AI 타임캡슐 믹스
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        출생연도·졸업연도·좋아했던 장르 태그 세 개를 넣으면 그 시기 발매
        수록곡 위주로 주 1회 개인 매거진을 만듭니다. 수집에 반응해 다음 주
        추천이 다듬어집니다.
      </p>

      <div className="mt-10 grid gap-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/35 p-6 sm:p-8 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-medium text-[var(--gold)]">
            출생연도
          </span>
          <input
            inputMode="numeric"
            value={birth}
            onChange={(e) => setBirth(e.target.value.replace(/\D/g, "").slice(0, 4))}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
            placeholder="YYYY"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-medium text-[var(--gold)]">
            졸업연도
          </span>
          <input
            inputMode="numeric"
            value={grad}
            onChange={(e) => setGrad(e.target.value.replace(/\D/g, "").slice(0, 4))}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
            placeholder="YYYY"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-[var(--gold)]">
            장르 태그 3개 (쉼표로 구분)
          </span>
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
            placeholder="뉴잭스윙, 알앤비, 락발라드"
          />
        </label>
      </div>

      <button
        type="button"
        disabled={!canSubmit}
        onClick={() => setDone(true)}
        className="mt-6 rounded-lg bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-stone-950 disabled:cursor-not-allowed disabled:opacity-40"
      >
        이번 주 캡슐 만들기
      </button>

      {done ? (
        <section className="mt-14 rounded-2xl border border-[var(--gold-dim)] bg-black/35 p-6">
          <p className="text-xs text-[var(--gold)]">이번 주 타임캡슐</p>
          <h2 className="font-[family-name:var(--font-serif)] mt-2 text-xl font-semibold text-[var(--ink)]">
            {birth}년대와 {grad}년 사이, 숨은 수록 3선
          </h2>
          <p className="mt-2 text-xs text-[var(--muted)]">
            태그: {tags.join(" · ")}
          </p>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm text-stone-300">
            {MOCK_CAPSULE.map((t, i) => (
              <li key={i}>
                {t.artist} 〈{t.title}〉 · {t.year}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  );
}
