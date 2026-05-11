"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/today", label: "과거의 오늘" },
  { href: "/debate", label: "그때, 우리는" },
  { href: "/archive", label: "취향 태그" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[color-mix(in_oklab,var(--bg)_88%,white)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold tracking-tight text-stone-900">
            그날의 조각
          </span>
          <span className="text-xs text-stone-500">Pieces of the Day</span>
        </Link>
        <nav
          className="flex flex-wrap items-center gap-1 sm:gap-2"
          aria-label="주요 메뉴"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-200/60 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
