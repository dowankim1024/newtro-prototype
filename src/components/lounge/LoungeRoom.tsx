"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import type { LoungeComment, LoungeTopic } from "@/lib/types";

function CommentBlock({ c }: { c: LoungeComment }) {
  return (
    <li className="rounded-lg bg-black/25 px-3 py-3 text-sm">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="font-medium text-[var(--gold)]">{c.author}</span>
        <span className="text-xs text-[var(--muted)]">
          공감 {c.likes.toLocaleString()}
        </span>
      </div>
      <p className="mt-2 leading-relaxed text-stone-300">{c.text}</p>
      {c.replies?.length ? (
        <ul className="mt-3 space-y-3 border-l border-[var(--line)] pl-4">
          {c.replies.map((r) => (
            <CommentBlock key={r.id} c={r} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function LoungeRoom({ topic }: { topic: LoungeTopic }) {
  const [vote, setVote] = useState<"a" | "b" | null>(null);
  const [counts, setCounts] = useState(() => ({
    a: topic.optionA.votes,
    b: topic.optionB.votes,
  }));
  const [comments, setComments] = useState<LoungeComment[]>(topic.seedComments);
  const [draft, setDraft] = useState("");

  const total = counts.a + counts.b;
  const pctA = total ? Math.round((counts.a / total) * 100) : 50;
  const pctB = 100 - pctA;

  const submitVote = useCallback(
    (side: "a" | "b") => {
      if (vote === side) return;
      setVote(side);
      setCounts((c) => ({
        ...c,
        [side]: c[side] + 1,
      }));
    },
    [vote],
  );

  const submitComment = useCallback(() => {
    const text = draft.trim();
    if (!text) return;
    setComments((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        author: "나",
        text,
        likes: 0,
      },
    ]);
    setDraft("");
  }, [draft]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
        리플레이 라운지 · {topic.year}
      </p>
      <h1 className="font-[family-name:var(--font-serif)] mt-3 text-2xl font-semibold leading-snug text-[var(--ink)] sm:text-3xl">
        {topic.question}
      </h1>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => submitVote("a")}
          className={`flex-1 rounded-xl border px-4 py-4 text-left transition ${
            vote === "a"
              ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--ink)]"
              : "border-[var(--line)] bg-[var(--surface)]/60 text-[var(--muted)] hover:border-[var(--gold-dim)]"
          }`}
        >
          <span className="font-semibold text-[var(--ink)]">
            {topic.optionA.label}
          </span>
          <span className="mt-2 block text-xs tabular-nums text-[var(--muted)]">
            {pctA}% · {counts.a.toLocaleString()}표
          </span>
        </button>
        <button
          type="button"
          onClick={() => submitVote("b")}
          className={`flex-1 rounded-xl border px-4 py-4 text-left transition ${
            vote === "b"
              ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--ink)]"
              : "border-[var(--line)] bg-[var(--surface)]/60 text-[var(--muted)] hover:border-[var(--gold-dim)]"
          }`}
        >
          <span className="font-semibold text-[var(--ink)]">
            {topic.optionB.label}
          </span>
          <span className="mt-2 block text-xs tabular-nums text-[var(--muted)]">
            {pctB}% · {counts.b.toLocaleString()}표
          </span>
        </button>
      </div>

      <div className="mt-14">
        <h2 className="text-sm font-semibold text-[var(--ink)]">
          코멘트 살롱
        </h2>
        <p className="mt-1 text-xs text-[var(--muted)]">
          투표 위에 글로 남기고, 대화를 이어 가는 공간입니다.
        </p>

        <div className="mt-4 min-h-[160px] rounded-2xl border border-[var(--line)] bg-[var(--surface)]/40 p-4">
          <ul className="space-y-4">
            {comments.map((c) => (
              <CommentBlock key={c.id} c={c} />
            ))}
          </ul>
          <div className="mt-6 border-t border-[var(--line)] pt-4">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="의견을 남깁니다."
              rows={3}
              className="w-full resize-none rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)] placeholder:text-stone-600"
            />
            <button
              type="button"
              onClick={submitComment}
              className="mt-3 rounded-lg bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-stone-950"
            >
              올리기
            </button>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm">
        <Link
          href="/lounge"
          className="text-[var(--gold)] underline-offset-4 hover:underline"
        >
          ← 다른 주제
        </Link>
      </p>
    </div>
  );
}
