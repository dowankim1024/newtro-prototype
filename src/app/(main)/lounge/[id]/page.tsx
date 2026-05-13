import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LoungeRoom } from "@/components/lounge/LoungeRoom";
import { getLoungeById, loungeTopics } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return loungeTopics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const topic = getLoungeById(id);
  if (!topic) return { title: "주제 없음" };
  return { title: topic.question.slice(0, 40) };
}

export default async function LoungeDetailPage({ params }: Props) {
  const { id } = await params;
  const topic = getLoungeById(id);
  if (!topic) notFound();
  return <LoungeRoom topic={topic} />;
}
