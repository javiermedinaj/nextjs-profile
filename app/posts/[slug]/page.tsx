import { getPostBySlug, getAllPosts } from "@/app/utils/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { TerminalWindow } from "../../components/TerminalWindow";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt || "Lee el artículo completo",
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <Link href="/#writing" className="text-xs text-muted hover:text-accent">
        cd ../notes
      </Link>

      <TerminalWindow title={`~/notes/${post.slug}.md`} className="mt-4">
        <header className="border-b border-border pb-6">
          <p className="text-xs text-terminal-green">
            $ cat ~/notes/{post.slug}.md
          </p>
          <h1 className="mt-3 text-2xl leading-tight text-foreground md:text-3xl">
            {post.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.author}</span>
            {post.excerpt && (
              <>
                <span>·</span>
                <span>{post.excerpt}</span>
              </>
            )}
          </div>
        </header>

        <div
          className="post-content mt-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-10 border-t border-border pt-4">
          <Link href="/#writing" className="link-terminal text-sm">
            cd ../notes
          </Link>
        </footer>
      </TerminalWindow>
    </article>
  );
}
