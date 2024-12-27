import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main>
      <div className="blog-posts">
        {posts.map((post) => (
          <article key={post.slug} className="blog-post">
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="post-meta">
              <span className="date">{post.date}</span>
              <span className="author">{post.author}</span>
            </div>
            <div className="post-excerpt">
              <p>{post.excerpt}</p>
            </div>
            <Link href={`/blog/${post.slug}`} className="read-more">
              Devamını Oku →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
