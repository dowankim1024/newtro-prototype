import type { Metadata } from "next";
import { MixtapeShelf } from "@/components/mixtape/MixtapeShelf";

export const metadata: Metadata = {
  title: "나의 믹스테이프",
  description: "수집한 곡의 시대별 오브젝트 & 스트리밍 내보내기 (Premium).",
};

export default function MixtapePage() {
  return <MixtapeShelf />;
}
