import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Insights() {
  const latest = posts.slice(0, 3);

  return (
    <section id="insights" className="py-24 bg-[#0d0e14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3">
              Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Thinking Out{" "}
              <span className="gradient-text">Loud</span>
            </h2>
            <p className="text-[#8892a4] mt-4 max-w-xl">
              Field notes on AI, architecture, and technology leadership — the kind
              of thinking I bring to every problem.
            </p>
          </div>
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-full border border-[#2a2f42] text-[#e8eaf0] text-sm font-semibold hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all whitespace-nowrap"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="card-hover group bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 flex flex-col hover:border-[#00d4ff]/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1a1f2e] text-[#00d4ff] border border-[#2a2f42]">
                  {p.category}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-[#00d4ff] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#8892a4] text-sm leading-relaxed line-clamp-3 flex-1">
                {p.excerpt}
              </p>
              <span className="mt-4 text-[#8892a4] text-xs">{p.displayDate}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
