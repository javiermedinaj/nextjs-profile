import Link from "next/link";
import { getAllPosts } from "@/app/utils/posts";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

export function Posts() {
  const posts = getAllPosts();

  return (
    <section id="writing" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-3 lg:gap-4 mb-4">
              <span className="section-label">02 / Diario</span>
              
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium text-dark">Misceláneas</h2>
            <div className="flex items-center gap-2 mt-4">
              <HiOutlineBookmark className="w-4 h-4 lg:w-5 lg:h-5 text-zinc-400" />
              <span className="text-xs text-zinc-500 font-mono">[ARCHIVO]</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className="text-sm lg:text-base text-zinc-500 leading-relaxed mb-6 lg:mb-8">
              Reflexiones sobre desarrollo web, automatización y las herramientas que utilizo diariamente.
              Explorando cómo construir software mejor.
            </p>
            
            <div className="space-y-0">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/posts/${post.slug}`}
                  className="flex items-start justify-between py-3 lg:py-4 border-b border-zinc-200 group hover:bg-zinc-50 transition-colors -mx-2 lg:-mx-4 px-2 lg:px-4"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-zinc-400 block mb-1">{post.date}</span>
                    <h3 className="text-sm lg:text-base text-dark font-medium group-hover:text-zinc-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <HiArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
