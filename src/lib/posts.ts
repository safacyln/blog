import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory)
  
  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const post = await getPostBySlug(slug)
        return post
      })
  )

  // Tarihe göre sırala
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  
  // Markdown dosyasını parse et
  const { data, content } = matter(fileContents)
  
  // Markdown'ı HTML'e çevir
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    content: contentHtml,
  }
} 