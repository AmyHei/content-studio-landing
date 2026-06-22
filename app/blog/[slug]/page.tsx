import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { ArticleHeader } from "../_components/article-header";
import { ArticleFooter } from "../_components/article-footer";
import { mdxComponents } from "../_components/mdx-components";

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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "zh_CN",
      images: post.cover_image ? [{ url: post.cover_image }] : undefined,
    },
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
    <div className="article-page min-h-screen">
      <ArticleHeader
        title={post.title}
        excerpt={post.excerpt}
        date={post.date}
        tags={post.tags}
        coverImage={post.cover_image}
      />

      <article
        className="article-body max-w-[688px] mx-auto px-6"
        style={{ color: "var(--ink)" }}
      >
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
            blockJS: false,
          }}
        />
      </article>

      <ArticleFooter />
    </div>
  );
}
