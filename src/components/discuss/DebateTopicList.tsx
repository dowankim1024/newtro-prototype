import Link from "next/link";
import { debateTopics } from "@/lib/mock-data";

export function DebateTopicList() {
  return (
    <ul className="flex flex-col gap-4">
      {debateTopics.map((topic) => (
        <li key={topic.id}>
          <Link
            href={`/debate/${topic.slug}`}
            className="group block rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition hover:border-amber-900/20 hover:shadow-md sm:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
                {topic.year}
              </span>
              <span className="text-xs font-medium text-amber-900/90">
                토론 입장 →
              </span>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-noto-serif)] text-lg font-semibold leading-snug text-stone-900 transition group-hover:text-amber-950 sm:text-xl">
              {topic.headline}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {topic.teaser}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
