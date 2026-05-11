"use client";

import { ReactionsProvider } from "./ReactionsProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ReactionsProvider>{children}</ReactionsProvider>;
}
