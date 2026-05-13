"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Collection = Record<
  string,
  { id: string; title: string; artist: string; year: number; era: string }
>;

const KEY = "totd-mixtape-v1";

function load(): Collection {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const p = JSON.parse(raw) as Collection;
    return typeof p === "object" && p ? p : {};
  } catch {
    return {};
  }
}

type CollectionCtx = {
  items: Collection;
  add: (track: {
    id: string;
    title: string;
    artist: string;
    year: number;
    era: string;
  }) => void;
  remove: (id: string) => void;
  has: (id: string) => boolean;
  ready: boolean;
};

const CollectionContext = createContext<CollectionCtx | null>(null);

export function CollectionProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Collection>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setItems(load());
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, ready]);

  const add = useCallback(
    (track: {
      id: string;
      title: string;
      artist: string;
      year: number;
      era: string;
    }) => {
      setItems((prev) => ({
        ...prev,
        [track.id]: {
          id: track.id,
          title: track.title,
          artist: track.artist,
          year: track.year,
          era: track.era,
        },
      }));
    },
    [],
  );

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const has = useCallback(
    (id: string) => Boolean(items[id]),
    [items],
  );

  const value = useMemo(
    () => ({ items, add, remove, has, ready }),
    [items, add, remove, has, ready],
  );

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const ctx = useContext(CollectionContext);
  if (!ctx) throw new Error("useCollection needs CollectionProvider");
  return ctx;
}
