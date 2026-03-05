import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "./components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Content Studio - AI 内容自动化工具",
  description:
    "让 AI 帮你从选题到发布，一键搞定公众号内容。监控热点、AI 写稿、自动配图、一键发布微信公众号。",
  keywords: [
    "AI 写作",
    "公众号自动化",
    "内容创作",
    "自媒体工具",
    "Content Studio",
    "AI 内容生成",
    "微信公众号",
  ],
  openGraph: {
    title: "Content Studio - AI 内容自动化工具",
    description:
      "让 AI 帮你从选题到发布，一键搞定公众号内容。监控热点、AI 写稿、自动配图、一键发布微信公众号。",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cfToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}
      >
        <Nav />
        {children}
        {cfToken && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfToken}"}`}
          />
        )}
      </body>
    </html>
  );
}
