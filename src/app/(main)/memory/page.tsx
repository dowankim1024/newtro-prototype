import type { Metadata } from "next";
import { MemoryMagazineEditor } from "@/components/memory/MemoryMagazineEditor";

export const metadata: Metadata = {
  title: "내 기억 속 그 트랙",
  description: "유저 매거진 직접 발행 · 제목·선곡·에피소드.",
};

export default function MemoryPage() {
  return <MemoryMagazineEditor />;
}
