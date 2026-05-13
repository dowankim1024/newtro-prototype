import type { Metadata } from "next";
import Link from "next/link";
import { loungeTopics } from "@/lib/data";

export const metadata: Metadata = {
  title: "리플레이 라운지",
  description: "시대별 음악 주제 · A/B 투표와 코멘트 살롱.",
};

export default function LoungeIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
        리플레이 라운지
      </p>
      <h1 className="font-[family-name:var(--font-serif)] mt-3 text-3xl font-semibold text-[var(--ink)]">
        음악 주제, 동년배만
      </h1>
      <p className="mt-4 text-sm text-[var(--muted)]">
        직관적인 A/B 투표와 실시간 비율, 글과 대댓이 이어지는 살롱이 한 화면에
        붙어 있습니다.
      </p>
      <ul className="mt-10 space-y-4">
        {loungeTopics.map((t) => (
          <li key={t.id}>
            <Link
              href={`/lounge/${t.id}`}
              className="block rounded-2xl border border-[var(--line)] bg-[var(--surface)]/40 p-5 transition hover:border-[var(--gold-dim)]"
            >
              <span className="text-xs text-[var(--gold)]">{t.year}</span>
              <p className="mt-2 font-medium text-[var(--ink)]">{t.question}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
