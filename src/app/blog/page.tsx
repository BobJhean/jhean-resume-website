import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { posts, readingTime, categoryGroup } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — Jhean Lamprecht | The Solutionist",
  description:
    "Field notes on AI, software architecture, DevOps, and technology leadership from Jhean Lamprecht — practical, opinionated, and grounded in 14+ years of building real systems.",
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: "Insights — Field Notes from The Solutionist",
    description:
      "Practical, opinionated thinking on AI, software architecture, DevOps, and technology leadership.",
    url: `${site.url}/blog`,
    siteName: "Jhean Lamprecht",
    type: "website",
    images: [{ url: "/blog-og.jpg", width: 1200, height: 630, alt: "Insights — The Solutionist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — Field Notes from The Solutionist",
    description:
      "Practical, opinionated thinking on AI, software architecture, DevOps, and technology leadership.",
    images: ["/blog-og.jpg"],
  },
};

export default function BlogIndex() {
  const meta = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    group: categoryGroup(p.category),
    displayDate: p.displayDate,
    excerpt: p.excerpt,
    readMins: readingTime(p),
  }));

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen grid-bg">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
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

          <BlogList posts={meta} />
        </div>
      </main>
      <Footer />
    </>
  );
}
