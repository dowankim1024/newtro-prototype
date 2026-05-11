"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "potd-reactions-v1";

type Stored = { liked: string[]; bookmarked: string[] };

function readStored(): Stored {
  if (typeof window === "undefined") return { liked: [], bookmarked: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { liked: [], bookmarked: [] };
    const parsed = JSON.parse(raw) as Partial<Stored>;
    return {
      liked: Array.isArray(parsed.liked) ? parsed.liked : [],
      bookmarked: Array.isArray(parsed.bookmarked) ? parsed.bookmarked : [],
    };
  } catch {
    return { liked: [], bookmarked: [] };
  }
}

type ReactionsContextValue = {
  likedIds: Set<string>;
  bookmarkedIds: Set<string>;
  toggleLike: (id: string) => void;
  toggleBookmark: (id: string) => void;
};

const ReactionsContext = createContext<ReactionsContextValue | null>(null);

export function ReactionsProvider({ children }: { children: React.ReactNode }) {
  const [liked, setLiked] = useState<string[]>([]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = readStored();
    queueMicrotask(() => {
      setLiked(s.liked);
      setBookmarked(s.bookmarked);
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const payload: Stored = { liked, bookmarked };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [liked, bookmarked, hydrated]);

  const likedIds = useMemo(() => new Set(liked), [liked]);
  const bookmarkedIds = useMemo(() => new Set(bookmarked), [bookmarked]);

  const toggleLike = useCallback((id: string) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const value = useMemo(
    () => ({
      likedIds,
      bookmarkedIds,
      toggleLike,
      toggleBookmark,
    }),
    [likedIds, bookmarkedIds, toggleLike, toggleBookmark],
  );

  return (
    <ReactionsContext.Provider value={value}>
      {children}
    </ReactionsContext.Provider>
  );
}

export function useReactions() {
  const ctx = useContext(ReactionsContext);
  if (!ctx) {
    throw new Error("useReactions must be used within ReactionsProvider");
  }
  return ctx;
}
