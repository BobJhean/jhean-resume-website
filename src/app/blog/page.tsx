import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — Jhean Lamprecht | The Solutionist",
  description:
    "Field notes on AI, software architecture, DevOps, and technology leadership from Jhean Lamprecht — practical, opinionated, and grounded in 14+ years of building real systems.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen grid-bg">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
              Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
              Field Notes from{" "}
              <span className="gradient-text">The Solutionist</span>
            </h1>
            <p className="text-[#8892a4] text-lg max-w-2xl mx-auto">
              Practical, opinionated thinking on AI, software architecture, DevOps,
              and technology leadership — grounded in 14+ years of building real
              systems that have to work every day.
            </p>
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-hover group bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 flex flex-col hover:border-[#00d4ff]/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1a1f2e] text-[#00d4ff] border border-[#2a2f42]">
                    {p.category}
                  </span>
                  <span className="text-[#8892a4] text-xs">{p.displayDate}</span>
                </div>
                <h2 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-[#00d4ff] transition-colors">
                  {p.title}
                </h2>
                <p className="text-[#8892a4] text-sm leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
                <span className="mt-4 text-[#00d4ff] text-sm font-semibold inline-flex items-center gap-1">
                  Read
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
