import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { WaitlistForm } from "@/app/components/waitlist-form";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: `${post.title} - AutoContent`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 inline-block"
        >
          &larr; 返回博客
        </Link>

        <article>
          <header className="mb-10">
            <time className="text-sm text-gray-500 dark:text-gray-500">
              {post.date}
            </time>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex gap-2 mt-4">
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
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-12 flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
            Y
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              <a
                href="https://yaqinhei.com"
                target="_blank"
                rel="noopener"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                yaqinhei
              </a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              AI 工程师，专注于 AI 自动化与内容创作工具开发。更多技术文章请访问{" "}
              <a
                href="https://yaqinhei.com"
                target="_blank"
                rel="noopener"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                yaqinhei.com
              </a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-950/30 rounded-xl text-center">
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            想让 AI 帮你自动化内容创作？
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            订阅 AutoContent 更新通知，或直接免费体验
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
