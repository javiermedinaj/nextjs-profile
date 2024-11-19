import { getPostBySlug, getAllPosts } from "@/app/utils/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import "../../styles/notion.styles.css";
import Link from "next/link";
import { ReactNode } from "react";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const CustomLink = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) => {
  const isExternal = href && href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <a href={href}>{children}</a>;
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "excerpt",
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="px-16">
      <article className="notion-like">
        <h1>{post.title}</h1>
        <p className="text-gray-600 mb-2">{post.excerpt}</p>
        <div className="text-sm text-gray-500 mb-4">
          <p>Date: {post.date}</p>
          <p>Author: {post.author}</p>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            a: CustomLink as any,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
      <Link
        href="/"
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
