"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { DebateOption, DebateTopic, DebateUserMessage } from "@/lib/types";

const BADGE_STYLES: Record<DebateOption["badgeVariant"], string> = {
  amber: "bg-amber-900 text-amber-50",
  slate: "bg-slate-600 text-slate-50",
  emerald: "bg-emerald-800 text-emerald-50",
  rose: "bg-rose-800 text-rose-50",
  violet: "bg-violet-800 text-violet-50",
  cyan: "bg-cyan-800 text-cyan-50",
};

type ChatRow = {
  id: string;
  optionId: string;
  author: string;
  text: string;
  at: number;
  timeLabel: string;
};

function storageKey(topicId: string, part: string) {
  return `potd-debate-${topicId}-${part}`;
}

function parseMsgs(raw: string | null): DebateUserMessage[] {
  if (!raw) return [];
  try {
    const p = JSON.parse(raw) as unknown;
    if (!Array.isArray(p)) return [];
    return p.filter(
      (x): x is DebateUserMessage =>
        typeof x === "object" &&
        x !== null &&
        typeof (x as DebateUserMessage).id === "string" &&
        typeof (x as DebateUserMessage).optionId === "string" &&
        typeof (x as DebateUserMessage).author === "string" &&
        typeof (x as DebateUserMessage).text === "string" &&
        typeof (x as DebateUserMessage).at === "number",
    );
  } catch {
    return [];
  }
}

export function DebateRoom({ topic }: { topic: DebateTopic }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [seedBase] = useState(() => Date.now());

  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(topic.options.map((o) => [o.id, o.votes])),
  );
  const [mySide, setMySide] = useState<string | null>(null);
  const [userMsgs, setUserMsgs] = useState<DebateUserMessage[]>([]);
  const [nickname, setNickname] = useState("참가자");
  const [draft, setDraft] = useState("");
  const [ready, setReady] = useState(false);

  const optionById = useMemo(
    () => Object.fromEntries(topic.options.map((o) => [o.id, o])),
    [topic.options],
  );

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const rawCounts = localStorage.getItem(storageKey(topic.id, "counts"));
        if (rawCounts) {
          const p = JSON.parse(rawCounts) as Record<string, number>;
          setCounts((prev) => {
            const n = { ...prev };
            for (const o of topic.options) {
              if (typeof p[o.id] === "number") n[o.id] = p[o.id];
            }
            return n;
          });
        }
        const side = localStorage.getItem(storageKey(topic.id, "side"));
        if (side && topic.options.some((o) => o.id === side)) {
          setMySide(side);
        }
        setUserMsgs(parseMsgs(localStorage.getItem(storageKey(topic.id, "msgs"))));
        const nick = localStorage.getItem("potd-chat-nickname");
        if (nick?.trim()) setNickname(nick.trim());
      } finally {
        setReady(true);
      }
    });
  }, [topic.id, topic.options]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(storageKey(topic.id, "counts"), JSON.stringify(counts));
  }, [counts, ready, topic.id]);

  useEffect(() => {
    if (!ready || !mySide) return;
    localStorage.setItem(storageKey(topic.id, "side"), mySide);
  }, [mySide, ready, topic.id]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(storageKey(topic.id, "msgs"), JSON.stringify(userMsgs));
  }, [userMsgs, ready, topic.id]);

  const pickSide = useCallback((id: string) => {
    setMySide((prev) => {
      if (prev === id) return prev;
      setCounts((c) => {
        const next = { ...c };
        if (prev) {
          next[prev] = Math.max(0, (next[prev] ?? 1) - 1);
        }
        next[id] = (next[id] ?? 0) + 1;
        return next;
      });
      return id;
    });
  }, []);

  const rows: ChatRow[] = useMemo(() => {
    const seed: ChatRow[] = topic.comments.map((c, i) => ({
      id: c.id,
      optionId: c.optionId,
      author: c.author,
      text: c.text,
      at: seedBase - (topic.comments.length - i) * 120_000,
      timeLabel: c.ago,
    }));
    const mine: ChatRow[] = userMsgs.map((m) => ({
      id: m.id,
      optionId: m.optionId,
      author: m.author,
      text: m.text,
      at: m.at,
      timeLabel: new Date(m.at).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));
    return [...seed, ...mine].sort((a, b) => a.at - b.at);
  }, [topic.comments, userMsgs, seedBase]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [rows.length]);

  const total = topic.options.reduce((s, o) => s + (counts[o.id] ?? 0), 0);

  const send = useCallback(() => {
    if (!mySide || !draft.trim()) return;
    const msg: DebateUserMessage = {
      id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      optionId: mySide,
      author: nickname.trim() || "참가자",
      text: draft.trim(),
      at: Date.now(),
    };
    setUserMsgs((prev) => [...prev, msg]);
    setDraft("");
  }, [draft, mySide, nickname]);

  return (
    <div className="space-y-8">
      <nav className="text-xs text-stone-500">
        <Link href="/debate" className="hover:text-amber-900">
          토론 목록
        </Link>
        <span className="mx-2 text-stone-300">/</span>
        <span className="line-clamp-1 text-stone-700">{topic.teaser}</span>
      </nav>

      <header className="border-b border-stone-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
          {topic.year} · 그때, 우리는
        </p>
        <h1 className="font-[family-name:var(--font-noto-serif)] mt-2 text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">
          {topic.headline}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
          {topic.context}
        </p>
      </header>

      <section aria-label="진영 선택·투표">
        <h2 className="text-sm font-semibold text-stone-900">내 진영 선택</h2>
        <p className="mt-1 text-xs text-stone-500">
          선택한 쪽이 채팅 시 배지로 붙습니다. 다른 진영 의견도 같은 창에서 모두
          볼 수 있습니다.
        </p>
        <div
          className={`mt-4 grid gap-3 ${topic.options.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          {topic.options.map((o) => {
            const count = counts[o.id] ?? o.votes;
            const pct = total > 0 ? Math.round((count / total) * 100) : 0;
            const active = mySide === o.id;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => pickSide(o.id)}
                className={`flex flex-col items-start gap-1 rounded-xl border px-4 py-3 text-left transition ${
                  active
                    ? "border-amber-900 bg-amber-950 text-amber-50"
                    : "border-stone-200 bg-stone-50/80 text-stone-900 hover:border-stone-300"
                }`}
              >
                <span className="text-sm font-semibold">{o.label}</span>
                <span
                  className={`text-xs ${active ? "text-amber-100/90" : "text-stone-500"}`}
                >
                  {o.blurb}
                </span>
                <span className="mt-1 text-[11px] font-medium tabular-nums opacity-85">
                  {pct}% · {count.toLocaleString()}표
                </span>
              </button>
            );
          })}
        </div>
        {mySide ? (
          <p className="mt-3 text-sm text-amber-900">
            현재 진영:{" "}
            <strong>{optionById[mySide]?.label}</strong> — 아래에서 의견을
            남겨 보세요.
          </p>
        ) : (
          <p className="mt-3 text-sm text-stone-500">
            진영을 고르면 채팅 입력이 활성화됩니다.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-stone-200/90 bg-white shadow-sm">
        <div className="border-b border-stone-100 px-4 py-3 sm:px-5">
          <h2 className="text-sm font-semibold text-stone-900">전체 의견</h2>
          <p className="text-xs text-stone-500">
            모든 진영이 한 줄에 섞여 보입니다. 앞의 배지가 상대의 선택입니다.
          </p>
        </div>
        <div
          ref={listRef}
          className="max-h-[min(420px,55vh)] space-y-3 overflow-y-auto px-4 py-4 sm:px-5"
        >
          {rows.map((row) => {
            const opt = optionById[row.optionId];
            const badge =
              BADGE_STYLES[opt?.badgeVariant ?? "slate"] ??
              BADGE_STYLES.slate;
            const label = opt?.label ?? row.optionId;
            return (
              <div
                key={row.id}
                className="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2.5 sm:px-4"
              >
                <div className="flex flex-wrap items-center gap-2 gap-y-1">
                  <span
                    className={`inline-flex shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold sm:text-xs ${badge}`}
                  >
                    {label}
                  </span>
                  <span className="text-xs font-medium text-stone-800">
                    {row.author}
                  </span>
                  <span className="text-[10px] text-stone-400 sm:text-xs">
                    {row.timeLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  {row.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="space-y-3 border-t border-stone-100 bg-stone-50/50 px-4 py-4 sm:px-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="flex flex-1 items-center gap-2 text-xs text-stone-600">
              닉네임
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onBlur={() => {
                  const n = nickname.trim();
                  if (n) localStorage.setItem("potd-chat-nickname", n);
                }}
                className="flex-1 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900"
                maxLength={24}
                autoComplete="nickname"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
            <label className="flex flex-1 flex-col gap-1">
              <span className="text-xs text-stone-600">
                메시지
                {mySide ? (
                  <span className="text-amber-900">
                    {" "}
                    (
                    {optionById[mySide]?.label} 진영으로 전송)
                  </span>
                ) : null}
              </span>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                disabled={!mySide}
                rows={2}
                placeholder={
                  mySide
                    ? "그때 기억을 가볍게 남겨 보세요…"
                    : "먼저 위에서 진영을 선택해 주세요."
                }
                className="resize-none rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 disabled:bg-stone-100"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
              />
            </label>
            <button
              type="button"
              onClick={send}
              disabled={!mySide || !draft.trim()}
              className="shrink-0 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-40"
            >
              보내기
            </button>
          </div>
          <p className="text-[11px] text-stone-400">
            프로토타입: 메시지와 투표는 이 브라우저에만 저장됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}
