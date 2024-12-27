/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'standalone',
  images: {
    domains: ['blog.mustafaceylan.tech'],
    unoptimized: true,
  }
}

module.exports = nextConfig 