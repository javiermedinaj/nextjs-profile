import { getPostBySlug, getAllPosts } from "@/app/utils/posts";
import { notFound } from "next/navigation";
import "../../styles/notion.styles.css";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "Lee el artículo completo",
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
            <Link href="/#writing" className="hover:text-dark transition-colors">
              Escritos
            </Link>
            <span>/</span>
            <span className="text-dark font-medium truncate">{post.title}</span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-sm text-zinc-500 border-b border-zinc-200 pb-6">
            <time dateTime={post.date}>{post.date}</time>
            <span className="hidden lg:inline">•</span>
            <span>Por {post.author}</span>
            {post.excerpt && (
              <>
                <span className="hidden lg:inline">•</span>
                <span className="text-zinc-600">{post.excerpt}</span>
              </>
            )}
          </div>
        </header>

        {/* Content */}
        <div 
          className="post-content prose prose-sm lg:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Navigation */}
        <footer className="mt-12 lg:mt-16 pt-8 border-t border-zinc-200">
          <Link
            href="/#writing"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark hover:text-zinc-600 transition-colors"
          >
            
            Volver a Escritos
          </Link>
        </footer>
      </div>
    </article>
  );
}