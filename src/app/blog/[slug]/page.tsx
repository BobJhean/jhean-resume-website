import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — Jhean Lamprecht`,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${site.url}/blog/${post.slug}`,
      siteName: "Jhean Lamprecht",
      images: [{ url: "/blog-og.jpg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/blog-og.jpg"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = posts[idx + 1]; // older
  const next = posts[idx - 1]; // newer

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    articleSection: post.category,
    url: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-32 pb-24 min-h-screen">
        <article className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="text-[#8892a4] hover:text-[#00d4ff] text-sm font-medium inline-flex items-center gap-1.5 mb-8 transition-colors"
          >
            ← All insights
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1a1f2e] text-[#00d4ff] border border-[#2a2f42]">
              {post.category}
            </span>
            <span className="text-[#8892a4] text-sm">{post.displayDate}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>

          <div className="space-y-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-[#c5ccd8] text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-12 pt-8 border-t border-[#2a2f42] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-white font-bold flex-shrink-0">
              JL
            </div>
            <div>
              <div className="text-white font-semibold">{site.name}</div>
              <div className="text-[#8892a4] text-sm">{site.role}</div>
            </div>
            <Link
              href="/#contact"
              className="ml-auto px-4 py-2 rounded-full border border-[#00d4ff] text-[#00d4ff] text-sm font-semibold hover:bg-[#00d4ff]/10 transition-colors whitespace-nowrap"
            >
              Get in touch
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-xl p-4 hover:border-[#00d4ff]/50 transition-colors"
              >
                <div className="text-[#8892a4] text-xs mb-1">← Older</div>
                <div className="text-white text-sm font-medium line-clamp-2">{prev.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-xl p-4 hover:border-[#00d4ff]/50 transition-colors text-right"
              >
                <div className="text-[#8892a4] text-xs mb-1">Newer →</div>
                <div className="text-white text-sm font-medium line-clamp-2">{next.title}</div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
