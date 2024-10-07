import { getPostBySlug, getAllPosts } from '@/app/utils/posts'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import '../../styles/notion.styles.css'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'excerpt'])

  if (!post) {
    notFound()
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
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
      <Link href="/" className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        ← Back to Home
      </Link>
    </div>
  )
}