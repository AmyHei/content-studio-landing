# MDX: `next-mdx-remote` defaults to `blockJS: true`

## 问题
新文章 `weekly-radar-2026-05-25.mdx` 用 `<KeywordTable rows={[...]} />` 和 `<RegionCompare left={{...}} right={{...}} />` 渲染时,组件 props 全部为 `undefined`,500 error:

```
TypeError: Cannot read properties of undefined (reading 'map')
    at SeoVariant (app/blog/_components/keyword-table.tsx:73:17)
```

## 根因
`next-mdx-remote` v6 的 `serialize` 默认开 `blockJS: true`,会装一个 remark plugin 把所有 JSX expression(`{...}`, `{[...]}`, `{{...}}`)从 MDX 里**剥掉**。结果:组件标签保留,prop 表达式消失,组件接到 `undefined`。

来源:`node_modules/next-mdx-remote/dist/serialize.js` 里的 remark plugins 注入逻辑——当 `blockJS` 为 true 时,它把 `removeJavaScriptExpressions` 这个 plugin 加进 remark pipeline。

## 修复
在 `MDXRemote` options 里加 `blockJS: false`(`blockDangerousJS` 保持 `true`,继续禁危险全局调用):

```tsx
<MDXRemote
  source={post.content}
  components={mdxComponents}
  options={{
    mdxOptions: { remarkPlugins: [remarkGfm] },
    blockJS: false,
  }}
/>
```

## 规则(blockJS=false 之后 MDX 里可用的)
- `<Comp foo="string" />` — 一直可以
- `<Comp foo={42} />` / `<Comp foo={true} />` — 现在可以
- `<Comp foo={["a","b"]} />` / `<Comp foo={{k:"v"}} />` — 现在可以
- `<Comp foo={someVar} />` — **不可以**(没有 scope,变量不存在),除非用 `scope` option 传入
- 危险全局调用 — 仍被 `blockDangerousJS` 拦截

## 教训
- 写 MDX 组件时**先验证 prop 通路**:在临时 `.mdx` 文件里写 `<Comp x={[{k:'v'}]} />` 试一下,再投入到长文里写 50 行数据
- next-mdx-remote 默认配置偏保守,**编辑部场景需要主动放开 JSX expressions**
- 不要把 `blockDangerousJS` 也设成 `false`——只放开数据传递,不打开任意代码执行通路
