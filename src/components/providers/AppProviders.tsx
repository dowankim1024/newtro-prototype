"use client";

import { CollectionProvider } from "./CollectionProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <CollectionProvider>{children}</CollectionProvider>;
}
