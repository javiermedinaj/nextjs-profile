import fs from 'fs'
import path from 'path'

interface Post {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

const postsFilePath = path.join(process.cwd(), 'app/content/posts.json')

// Cached posts data for better performance
let cachedPosts: Post[] = []

function loadPosts(): Post[] {
  if (cachedPosts.length > 0) {
    return cachedPosts
  }

  const fileContents = fs.readFileSync(postsFilePath, 'utf8')
  const data = JSON.parse(fileContents)
  cachedPosts = data.posts
  return cachedPosts
}

export function getPostSlugs(): string[] {
  const posts = loadPosts()
  return posts.map(post => post.slug)
}

export function getPostBySlug(slug: string | undefined): Post | null {
  if (!slug) return null
  const posts = loadPosts()
  const post = posts.find(p => p.slug === slug)
  return post || null
}

export function getAllPosts(): Post[] {
  const posts = loadPosts()
  
  // Sort by date descending
  return posts.sort((post1, post2) => {
    const date1 = new Date(post1.date || '').getTime()
    const date2 = new Date(post2.date || '').getTime()
    return date2 - date1
  })
}
