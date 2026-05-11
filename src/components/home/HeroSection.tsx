import { DEMO_TODAY_LABEL } from "@/lib/mock-data";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-800/80">
        Pieces of the Day
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl sm:leading-tight">
        뉴스 대신,{" "}
        <span className="text-amber-900">가장 사랑했던 그날의 조각</span>
      </h1>
      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-stone-600 sm:text-base">
        AI 1차 가공과 에디터 검수로 다듬은 ‘과거의 오늘’. 오늘의 조각을 보고,
        취향을 남기거나 가벼운 토론에 참여해 보세요.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-600">
        <span className="rounded-full border border-stone-200/90 bg-white px-3 py-1 text-stone-800 shadow-sm">
          {DEMO_TODAY_LABEL}
        </span>
        <span className="text-stone-500">데모 · 고정 날짜 · 매일 07:00 발행 예정</span>
      </div>
    </section>
  );
}
