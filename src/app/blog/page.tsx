import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Phil Tompkins",
  description: "Blog posts from Phil Tompkins on engineering, leadership, and building things.",
};

const posts = [
  {
    slug: "rebuilding-my-portfolio",
    title: "Rebuilding My Portfolio with Next.js 16",
    date: "February 17, 2026",
    excerpt:
      "Why I moved from VitePress to Next.js 16, the stack choices behind the new site, and what's next.",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-surface rounded-xl p-6 hover:ring-1 hover:ring-emerald transition-all"
          >
            <p className="text-emerald text-sm font-mono mb-1">{post.date}</p>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
