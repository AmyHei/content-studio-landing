/**
 * ActionCallout — "可以动手" 行动卡片。配合 PersonaSection 使用，颜色继承 persona。
 * Visual: 左边一条粗 persona-colored bar, 顶部小 caps 标签, body 是用户可执行的一句话.
 *         整张卡用很浅的 persona-wash 做底色, 给人 "highlight box" 的视觉.
 */

type Persona = "saas" | "wechat" | "sidehustle" | "engineer";

export function ActionCallout({
  persona,
  children,
}: {
  persona: Persona;
  children: React.ReactNode;
}) {
  const colorVar = `var(--persona-${persona})`;
  const washVar = `var(--persona-${persona}-wash)`;

  return (
    <div
      className="not-prose my-8 relative pl-6 pr-6 py-5 rounded-sm overflow-hidden"
      style={{
        background: washVar,
      }}
    >
      {/* left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: colorVar }}
      />

      {/* tag + arrow */}
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[10px] font-bold tracking-[0.22em] uppercase"
          style={{ color: colorVar }}
        >
          可以动手
        </span>
        <span
          className="text-xs"
          style={{ color: colorVar }}
        >
          →
        </span>
      </div>

      {/* body — slightly larger, semibold */}
      <div
        className="text-[15px] leading-relaxed font-medium"
        style={{ color: "var(--ink)" }}
      >
        {children}
      </div>
    </div>
  );
}
