import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "./components/nav";
import { SiteFooter } from "./components/site-footer";
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
  metadataBase: new URL("https://autocontent.net"),
  title: {
    default: "AutoContent — AI 写公众号，从选题到发布一键搞定",
    template: "%s",
  },
  description:
    "用 AI 自动化公众号内容创作：智能监控热点、AI 写稿、自动配图、一键发布微信草稿箱。免费试用，从每天 4 小时缩到 30 分钟。",
  keywords: [
    "AI 写公众号",
    "公众号自动化",
    "AI 写作",
    "公众号排版",
    "爆款标题生成器",
    "Markdown 转公众号",
    "AI 写作免费",
    "自媒体工具",
    "微信公众号",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AutoContent — AI 写公众号，从选题到发布一键搞定",
    description:
      "用 AI 自动化公众号内容创作：智能监控热点、AI 写稿、自动配图、一键发布。免费试用。",
    locale: "zh_CN",
    type: "website",
    url: "https://autocontent.net",
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
        <SiteFooter />
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
