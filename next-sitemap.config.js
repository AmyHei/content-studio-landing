/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { execSync } = require("child_process");

function getGitLastModified(filePath) {
  try {
    const result = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"] }
    ).trim();
    return result || null;
  } catch {
    return null;
  }
}

function getPageLastMod(urlPath) {
  const postsDir = path.join(process.cwd(), "content/posts");

  if (urlPath.startsWith("/blog/") && urlPath !== "/blog") {
    const slug = urlPath.replace("/blog/", "");
    const mdxPath = path.join(postsDir, `${slug}.mdx`);
    if (fs.existsSync(mdxPath)) {
      const content = fs.readFileSync(mdxPath, "utf-8");
      const { data } = matter(content);
      if (data.date) {
        return new Date(data.date).toISOString();
      }
    }
  }

  const routeMap = {
    "/": "app/page.tsx",
    "/features": "app/features/page.tsx",
    "/features/ai-wechat-article": "app/features/ai-wechat-article/page.tsx",
    "/features/ai-writing-free": "app/features/ai-writing-free/page.tsx",
    "/features/markdown-to-wechat": "app/features/markdown-to-wechat/page.tsx",
    "/features/wechat-formatter": "app/features/wechat-formatter/page.tsx",
    "/features/wechat-title-generator": "app/features/wechat-title-generator/page.tsx",
    "/tools": "app/tools/page.tsx",
    "/tools/markdown-formatter": "app/tools/markdown-formatter/page.tsx",
    "/tools/title-generator": "app/tools/title-generator/page.tsx",
    "/tools/word-counter": "app/tools/word-counter/page.tsx",
    "/blog": "app/blog/page.tsx",
  };

  const sourceFile = routeMap[urlPath];
  if (sourceFile) {
    const fullPath = path.join(process.cwd(), sourceFile);
    const gitDate = getGitLastModified(fullPath);
    if (gitDate) return gitDate;
    if (fs.existsSync(fullPath)) {
      return fs.statSync(fullPath).mtime.toISOString();
    }
  }

  return new Date().toISOString();
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://autocontent.net",
  generateRobotsTxt: true,
  outDir: "./out",
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: getPageLastMod(path),
    };
  },
};
