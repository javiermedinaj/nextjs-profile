import Link from "next/link";
import { getAllPosts } from "@/app/utils/posts";
import { TerminalWindow } from "./TerminalWindow";

export function Posts() {
  const posts = getAllPosts();

  return (
    <section id="writing">
      <TerminalWindow title="~/notes">
        <div className="command-line">
          <span className="prompt">$</span>
          <span className="command">ls -la ~/notes</span>
        </div>

        <p className="output mb-6 text-xs">
          {posts.length} archivos · reflexiones sobre código, IA y procesos
        </p>

        <div className="divide-y divide-border">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block py-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-terminal-green">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-muted">{post.date}</span>
                <span className="ml-auto text-xs text-muted transition-colors group-hover:text-accent">
                  .md →
                </span>
              </div>
              <h3 className="mt-1 text-base text-foreground transition-colors group-hover:text-accent md:text-lg">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-1 line-clamp-1 text-sm text-muted">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-4 text-xs text-muted">
          <span className="text-terminal-green">$</span> open ~/notes/README.md
        </div>
      </TerminalWindow>
    </section>
  );
}
