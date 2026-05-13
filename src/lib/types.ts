export type TapeEra = "cassette" | "cd" | "lp";

export interface MagazineTrack {
  id: string;
  year: number;
  title: string;
  artist: string;
  subtitle: string;
  article: string;
  coverClass: string;
  era: TapeEra;
}

export interface MagazineIssue {
  id: string;
  dateLabel: string;
  headline: string;
  dek: string;
  tracks: MagazineTrack[];
}

export interface CollectedTrackRef {
  id: string;
  title: string;
  artist: string;
  year: number;
  era: TapeEra;
}

export interface UserMagazine {
  id: string;
  title: string;
  author: string;
  badge: string;
  episode: string;
  tracks: CollectedTrackRef[];
}

export interface LoungeComment {
  id: string;
  author: string;
  text: string;
  likes: number;
  replies?: LoungeComment[];
}

export interface LoungeTopic {
  id: string;
  year: string;
  question: string;
  optionA: { id: string; label: string; votes: number };
  optionB: { id: string; label: string; votes: number };
  seedComments: LoungeComment[];
}
