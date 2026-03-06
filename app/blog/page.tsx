import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客 - AutoContent",
  description:
    "关于 AI 内容创作、公众号自动化、自媒体运营的实用文章和教程。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          博客
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
          AI 内容创作的实战经验与方法论
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-500">暂无文章</p>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <time className="text-sm text-gray-500 dark:text-gray-500">
                    {post.date}
                  </time>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
