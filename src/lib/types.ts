export type PieceCategory = "music" | "movie" | "news" | "article";

export type ArticleBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "figure"; src: string; alt: string; caption?: string };

export interface TimelinePiece {
  id: string;
  slug: string;
  category: PieceCategory;
  year: number;
  title: string;
  subtitle?: string;
  /** 목록·카드용 한두 문단 요약 */
  excerpt: string;
  coverImage: {
    src: string;
    alt: string;
  };
  /** 상세 기사 본문 */
  article: {
    lead: string;
    blocks: ArticleBlock[];
  };
  linkLabel?: string;
  tags: string[];
  tone: "teal" | "coral" | "violet" | "amber";
  /** 목록에 표시할 짧은 읽기 시간(분) */
  readTimeMinutes: number;
}

export interface DebateOption {
  id: string;
  label: string;
  blurb: string;
  votes: number;
  /** 채팅 진영 배지 색상 토큰 */
  badgeVariant: "amber" | "slate" | "emerald" | "rose" | "violet" | "cyan";
}

export interface DebateComment {
  id: string;
  optionId: string;
  author: string;
  text: string;
  ago: string;
}

export interface DebateTopic {
  id: string;
  slug: string;
  /** 목록 카드 한 줄 소개 */
  teaser: string;
  headline: string;
  year: number;
  context: string;
  options: DebateOption[];
  comments: DebateComment[];
}

export interface DebateUserMessage {
  id: string;
  optionId: string;
  author: string;
  text: string;
  at: number;
}
