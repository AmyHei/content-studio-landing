# AutoContent · 公众号内容创作引擎

> 🌐 **官网：[autocontent.net](https://autocontent.net)**

AutoContent 是一套面向中文创作者的 AI 公众号内容工具集：从 Markdown 一键转公众号排版、AI 辅助写稿，到选题雷达（niche radar）信号扫描，帮你把「写公众号」这件事自动化。

本仓库是 [autocontent.net](https://autocontent.net) 的官网与博客（Next.js + Cloudflare Pages）。

## 主要功能

- **[Markdown 转公众号排版](https://autocontent.net/features/markdown-to-wechat)** —— 粘贴即用的内联样式 HTML，无需秀米 / 135editor
- **[AI 公众号文章](https://autocontent.net/features/ai-wechat-article)** —— AI 辅助选题与成稿
- **[公众号标题生成](https://autocontent.net/features/wechat-title-generator)** —— 标题钩子建议
- **[选题雷达](https://autocontent.net/blog)** —— 跨领域趋势信号扫描，每周更新

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。环境变量见 `.env.example`。

技术栈：[Next.js](https://nextjs.org) App Router，部署在 Cloudflare Pages（从 `main` 自动构建）。
