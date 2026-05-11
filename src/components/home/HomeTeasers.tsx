import Link from "next/link";

const links = [
  {
    href: "/today",
    title: "과거의 오늘",
    body: "음악·영화·사건·아티클 네 가지 조각을 한 번에.",
  },
  {
    href: "/debate",
    title: "그때, 우리는",
    body: "투표하고, 같은 진영의 추억 댓글만 골라 읽기.",
  },
  {
    href: "/archive",
    title: "취향 태그",
    body: "좋아요·북마크가 만든 나만의 태그 요약.",
  },
] as const;

export function HomeTeasers() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <h2 className="sr-only">둘러보기</h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm transition hover:border-amber-900/15 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-stone-900 group-hover:text-amber-900">
                {item.title}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {item.body}
              </span>
              <span className="mt-4 text-xs font-medium text-amber-800/90">
                이동 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
