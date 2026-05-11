import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { TagArchiveSection } from "@/components/home/TagArchiveSection";

export const metadata: Metadata = {
  title: "취향 태그",
  description: "좋아요와 북마크로 쌓인 나만의 태그 아카이브",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <PageIntro
        eyebrow="Archive"
        title="나만의 취향 태그"
        description="타임라인에서 남긴 반응이 태그 가중치로 정리됩니다. 이 기기 브라우저에만 저장됩니다."
      />
      <TagArchiveSection />
    </div>
  );
}
