/**
 * PersonaSection — 每个读者画像的章节包裹器。
 * Visual:
 *   ─────────────────────── (一条 persona-colored 短横线)
 *      01    [PERSONA TAG in small caps]
 *      给 SaaS / 独立开发者          (display serif h2)
 *   ──────────────────────────────── (一条 ink rule)
 *      [section body in slot]
 */

type Persona = "saas" | "wechat" | "sidehustle" | "engineer";

const PERSONA_LABEL: Record<Persona, string> = {
  saas: "FOR · BUILDERS",
  wechat: "FOR · WRITERS",
  sidehustle: "FOR · HUSTLERS",
  engineer: "FOR · ENGINEERS",
};

export function PersonaSection({
  persona,
  number,
  title,
  children,
}: {
  persona: Persona;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const colorVar = `var(--persona-${persona})`;

  return (
    <section className="not-prose mt-20 mb-8 scroll-mt-20" id={`section-${number}`}>
      {/* short persona-colored bar */}
      <div
        className="h-[3px] w-12 mb-6"
        style={{ background: colorVar }}
      />

      {/* number + label */}
      <div className="flex items-baseline gap-4 mb-3">
        <span
          className="font-mono text-sm font-semibold"
          style={{ color: colorVar }}
        >
          {number}
        </span>
        <span
          className="text-[10px] font-semibold tracking-[0.22em]"
          style={{ color: "var(--ink-muted)" }}
        >
          {PERSONA_LABEL[persona]}
        </span>
      </div>

      {/* heading */}
      <h2
        className="text-[28px] md:text-[32px] font-bold leading-[1.2] mb-6"
        style={{
          fontFamily: "var(--font-display-zh)",
          color: "var(--ink)",
        }}
      >
        {title}
      </h2>

      {/* thin full-width rule under heading */}
      <div
        className="h-px w-full mb-8"
        style={{ background: "var(--divider)" }}
      />

      {/* body content — uses article-body styles so prose-like nesting works */}
      <div className="article-body">{children}</div>
    </section>
  );
}
