import Link from "next/link";

/**
 * FeaturePick — 文章末尾 CTA, "编辑推荐" 风格。
 * Visual: 顶上 small caps label, 下面 2-3 个 feature card, 每张卡 hover 状态有 accent 强调.
 */

export function FeaturePick({
  features,
}: {
  features: { href: string; title: string; desc: string }[];
}) {
  return (
    <section className="not-prose my-16">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="h-px flex-1"
          style={{ background: "var(--divider)" }}
        />
        <span
          className="text-[10px] font-bold tracking-[0.22em] uppercase"
          style={{ color: "var(--ink-muted)" }}
        >
          编辑推荐
        </span>
        <div
          className="h-px flex-1"
          style={{ background: "var(--divider)" }}
        />
      </div>

      <p
        className="text-center text-[14px] mb-8"
        style={{ color: "var(--ink-muted)" }}
      >
        如果这篇周报对你有帮助, 试试 AutoContent 的这几个功能 / 工具:
      </p>

      <div
        className={`grid gap-3 ${
          features.length === 1
            ? "grid-cols-1"
            : features.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {features.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="group block p-5 border rounded-sm transition-all hover:translate-y-[-2px]"
            style={{
              borderColor: "var(--divider)",
              background: "var(--paper-elevated)",
            }}
          >
            <div
              className="font-bold text-[15px] mb-1 group-hover:underline decoration-2"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-display-zh)",
                textDecorationColor: "var(--accent)",
              }}
            >
              {f.title}
            </div>
            <div
              className="text-[13px] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              {f.desc}
            </div>
            <div
              className="mt-3 text-[11px] font-bold tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              立即查看 →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
