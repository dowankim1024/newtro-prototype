import type { Metadata } from "next";
import { DebateTopicList } from "@/components/discuss/DebateTopicList";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "그때, 우리는",
  description: "과거 이슈별 토론방 — 진영을 고르고 전체 의견을 함께 봅니다.",
};

export default function DebateIndexPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <PageIntro
        eyebrow="Discuss"
        title="그때, 우리는"
        description="주제를 골라 들어가면 모든 진영의 의견이 한 채팅처럼 보입니다. 먼저 내 진영을 고른 뒤, 배지가 붙은 채로 이야기를 남겨 보세요."
      />
      <DebateTopicList />
    </div>
  );
}
