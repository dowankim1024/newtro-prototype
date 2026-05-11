import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DebateRoom } from "@/components/discuss/DebateRoom";
import { getAllDebateSlugs, getDebateBySlug } from "@/lib/debate";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllDebateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getDebateBySlug(slug);
  if (!topic) return { title: "토론을 찾을 수 없음" };
  return {
    title: topic.headline.slice(0, 60),
    description: topic.teaser,
  };
}

export default async function DebateDetailPage({ params }: Props) {
  const { slug } = await params;
  const topic = getDebateBySlug(slug);
  if (!topic) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <DebateRoom topic={topic} />
    </div>
  );
}
