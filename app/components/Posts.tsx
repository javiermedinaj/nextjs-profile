import Link from "next/link";
import { getAllPosts } from "@/app/utils/posts";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

export function Posts() {
  const posts = getAllPosts();

  return (
    <section
      id="writing"
      className="py-20 lg:py-32 bg-surface border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left - Header */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-label text-sm lg:text-base">NEWS & NOTES</span>
              <HiOutlineBookmark className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Misceláneas
            </h2>
            <div className="flex items-center gap-3 mt-6 text-muted font-mono text-sm">
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded text-accent font-bold">
                [ARCHIVO]
              </span>
              <span>{posts.length} posts</span>
            </div>
          </div>

          {/* Right - Description & Posts */}
          <div className="flex flex-col">
            <p className="text-base lg:text-lg text-zinc-400 leading-relaxed mb-10 lg:mb-12">
              Reflexiones sobre desarrollo web, automatización y herramientas que uso
              a diario. Un archivo vivo de cómo voy afinando procesos para construir{" "}
              <span className="text-accent font-semibold">software mejor</span>.
            </p>

            <div className="space-y-0">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="flex items-start justify-between py-5 lg:py-6 border-b border-border/50 group hover:border-accent/30 transition-all duration-300 relative"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-accent font-mono font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-muted font-mono">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-base lg:text-lg text-foreground font-semibold group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted mt-2 line-clamp-1">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  <HiArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-2 transition-all flex-shrink-0 ml-4 relative z-10" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
