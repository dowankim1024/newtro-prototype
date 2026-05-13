"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "홈" },
  { href: "/digging", label: "오늘의 디깅" },
  { href: "/mixtape", label: "나의 믹스테이프" },
  { href: "/lounge", label: "리플레이 라운지" },
  { href: "/memory", label: "내 기억 속 그 트랙" },
  { href: "/capsule", label: "타임캡슐 믹스" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex flex-col">
            <span className="font-[family-name:var(--font-serif)] text-base font-semibold tracking-tight text-[var(--ink)]">
              그날의 트랙
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
              Track of the Day
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3 py-1.5 transition ${
                    active
                      ? "bg-[var(--gold)] text-stone-950"
                      : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-[var(--line)] py-10">
        <div className="mx-auto max-w-5xl px-4 text-xs text-[var(--muted)] sm:px-6">
          <p>© {new Date().getFullYear()} 그날의 트랙</p>
        </div>
      </footer>
    </div>
  );
}
