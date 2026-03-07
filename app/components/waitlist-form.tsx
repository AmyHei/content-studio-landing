"use client";

import { useState } from "react";

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const url = process.env.NEXT_PUBLIC_WAITLIST_URL;
      if (url) {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "landing" }),
          mode: "no-cors",
        });
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success"); // no-cors can't read response, treat as success
    }
  }

  if (status === "success") {
    return (
      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg space-y-3">
        <p className="text-green-700 dark:text-green-300 font-medium">
          订阅成功！有新功能会第一时间通知你。
        </p>
        <a
          href="https://app.autocontent.net"
          target="_blank"
          rel="noopener"
          className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          立即体验 AutoContent →
        </a>
      </div>
    );
  }

  const inputClasses = variant === "dark"
    ? "flex-1 px-4 py-3 rounded-lg border border-blue-400/30 bg-blue-700/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
    : "flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const buttonClasses = variant === "dark"
    ? "px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
    : "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap";

  const tryLinkClasses = variant === "dark"
    ? "text-blue-100 hover:text-white"
    : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400";

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={inputClasses}
        />
        <button type="submit" disabled={status === "loading"} className={buttonClasses}>
          {status === "loading" ? "提交中..." : "订阅更新"}
        </button>
      </form>
      <p className={`text-sm text-center ${tryLinkClasses} transition-colors`}>
        或{" "}
        <a
          href="https://app.autocontent.net"
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2"
        >
          直接免费体验
        </a>
        {" "}· 早期版本，持续更新中
      </p>
    </div>
  );
}
