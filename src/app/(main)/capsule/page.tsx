import type { Metadata } from "next";
import { AiCapsuleFlow } from "@/components/capsule/AiCapsuleFlow";

export const metadata: Metadata = {
  title: "타임캡슐 믹스",
  description: "출생·졸업·태그 기반 주간 숨은 수록 매거진.",
};

export default function CapsulePage() {
  return <AiCapsuleFlow />;
}
