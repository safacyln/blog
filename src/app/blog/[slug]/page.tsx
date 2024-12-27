import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)

    return (
      <main>
        <article className="blog-post-full">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="date">{post.date}</span>
            <span className="author">{post.author}</span>
          </div>
          <div className="post-content">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    )
  } catch (error) {
    return (
      <main>
        <h1>Yazı bulunamadı</h1>
        <p>İstediğiniz blog yazısı bulunamadı.</p>
      </main>
    )
  }
} 