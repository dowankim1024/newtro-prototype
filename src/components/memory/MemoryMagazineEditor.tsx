"use client";

import { useState } from "react";

const MAX_EPISODE = 200;

export function MemoryMagazineEditor() {
  const [title, setTitle] = useState("");
  const [episode, setEpisode] = useState("");
  const [tracks, setTracks] = useState(() => [
    { title: "", artist: "" },
    { title: "", artist: "" },
    { title: "", artist: "" },
  ]);
  const [published, setPublished] = useState<{
    title: string;
    episode: string;
    tracks: { title: string; artist: string }[];
  } | null>(null);

  const updateTrack = (
    i: number,
    field: "title" | "artist",
    value: string,
  ) => {
    setTracks((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      return next;
    });
  };

  const addSlot = () => {
    if (tracks.length >= 5) return;
    setTracks((prev) => [...prev, { title: "", artist: "" }]);
  };

  const publish = () => {
    const filled = tracks.filter((t) => t.title.trim() && t.artist.trim());
    if (!title.trim() || !episode.trim() || filled.length < 3) return;
    setPublished({
      title: title.trim(),
      episode: episode.slice(0, MAX_EPISODE).trim(),
      tracks: filled.slice(0, 5),
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
        내 기억 속 그 트랙
      </p>
      <h1 className="font-[family-name:var(--font-serif)] mt-3 text-3xl font-semibold text-[var(--ink)]">
        짧은 매거진 발행
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        제목, 3~5곡, 200자 내외 에피소드를 묶어 발행합니다. 월간 우수작은 공식
        채널로 소개할 수 있습니다.
      </p>

      <div className="mt-10 space-y-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/35 p-6 sm:p-8">
        <label className="block">
          <span className="text-xs font-medium text-[var(--gold)]">제목</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
            placeholder="예: 2003년 학원 끝나고 버스에서 MP3로 듣던 노래들"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium text-[var(--gold)]">
            에피소드 ({episode.length}/{MAX_EPISODE})
          </span>
          <textarea
            value={episode}
            maxLength={MAX_EPISODE}
            onChange={(e) => setEpisode(e.target.value)}
            rows={4}
            className="mt-2 w-full resize-none rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
          />
        </label>

        <div>
          <span className="text-xs font-medium text-[var(--gold)]">
            선곡 ({tracks.length}곡 · 3~5곡)
          </span>
          <ul className="mt-3 space-y-3">
            {tracks.map((t, i) => (
              <li key={i} className="grid gap-2 sm:grid-cols-2">
                <input
                  value={t.title}
                  onChange={(e) => updateTrack(i, "title", e.target.value)}
                  className="rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
                  placeholder="곡 제목"
                />
                <input
                  value={t.artist}
                  onChange={(e) => updateTrack(i, "artist", e.target.value)}
                  className="rounded-lg border border-[var(--line)] bg-black/30 px-3 py-2 text-sm text-[var(--ink)]"
                  placeholder="아티스트"
                />
              </li>
            ))}
          </ul>
          {tracks.length < 5 ? (
            <button
              type="button"
              onClick={addSlot}
              className="mt-3 text-xs text-[var(--gold)] underline-offset-4 hover:underline"
            >
              곡 칸 추가
            </button>
          ) : null}
        </div>

        <button
          type="button"
          onClick={publish}
          className="rounded-lg bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-stone-950"
        >
          발행
        </button>
      </div>

      {published ? (
        <div className="mt-12 rounded-2xl border border-[var(--gold-dim)] bg-black/30 p-6">
          <p className="text-xs text-[var(--gold)]">방금 발행한 이웃 매거진</p>
          <h2 className="font-[family-name:var(--font-serif)] mt-2 text-xl font-semibold text-[var(--ink)]">
            {published.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            {published.episode}
          </p>
          <ul className="mt-4 divide-y divide-[var(--line)] text-sm">
            {published.tracks.map((t, i) => (
              <li key={i} className="py-2 text-[var(--ink)]">
                {t.artist} — {t.title}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[var(--muted)]">
            「테이프 마스터」 뱃지와 오늘의 디깅 하단 피드 연동.
          </p>
        </div>
      ) : null}
    </div>
  );
}
