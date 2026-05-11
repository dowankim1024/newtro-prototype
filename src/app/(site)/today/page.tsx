import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { MagazineTodayGrid } from "@/components/home/MagazineTodayGrid";

export const metadata: Metadata = {
  title: "과거의 오늘",
  description: "오늘 날짜에 맞춘 음악·영화·사건·아티클 조각",
};

export default function TodayPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <PageIntro
        eyebrow="Magazine"
        title="과거의 오늘"
        description="같은 날짜, 다른 해의 이야기를 매거진처럼 펼쳤습니다. 카드나 제목을 누르면 전문 기사로 이동합니다."
      />
      <MagazineTodayGrid />
    </div>
  );
}
