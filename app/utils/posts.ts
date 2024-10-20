import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { rehype } from 'rehype'

const postsDirectory = path.join(process.cwd(), 'app/content/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown)

  const processedContent = await rehype()
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(() => (tree) => {
      const visit = (node: any) => {
        if (node.tagName === 'a' && node.properties && node.properties.href) {
          // Check if the link is external
          if (node.properties.href.startsWith('http')) {
            node.properties.target = '_blank'
            node.properties.rel = 'noopener noreferrer'
          }
        }
        if (node.children) {
          node.children.forEach(visit)
        }
      }
      visit(tree)
    })
    .process(result.toString())

  return processedContent.toString()
}