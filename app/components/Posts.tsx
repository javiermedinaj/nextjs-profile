import Link from "next/link";
import { getAllPosts } from "@/app/utils/posts";

export function Posts() {
  const posts = getAllPosts(["title", "date", "excerpt", "slug"]);

  return (
    <div className="py-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center ">
        Posts
      </h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.slug} className="bg-zinc-900 p-4 rounded-lg">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            </Link>
            <p className="text-gray-400 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500">Date: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
