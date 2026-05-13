import type { Metadata } from "next";
import { DiggingExperience } from "@/components/magazine/DiggingExperience";
import { DEMO_ISSUE, NEIGHBOR_MAGAZINES } from "@/lib/data";

export const metadata: Metadata = {
  title: "오늘의 디깅",
  description: "데일리 뮤직 매거진 — 과거의 오늘, 수록곡 디깅.",
};

export default function DiggingPage() {
  return (
    <DiggingExperience
      issue={DEMO_ISSUE}
      neighborMagazines={NEIGHBOR_MAGAZINES}
    />
  );
}
