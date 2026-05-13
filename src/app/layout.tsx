import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "그날의 트랙",
    template: "%s · 그날의 트랙",
  },
  description:
    "뻔한 90년대 탑100에 지친 당신을 위한 초개인화 레트로 음악 매거진 & 프라이빗 토론 라운지.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${notoSerifKr.variable} h-full antialiased`}
    >
      <body className="noise-bg min-h-full">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
