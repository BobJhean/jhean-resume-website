"use client";
import { useState } from "react";
import Link from "next/link";

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
  group: string;
  displayDate: string;
  excerpt: string;
  readMins: number;
};

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState("All");

  const groups = ["All", ...Array.from(new Set(posts.map((p) => p.group)))];
  const visible = active === "All" ? posts : posts.filter((p) => p.group === active);

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {groups.map((g) => {
          const count = g === "All" ? posts.length : posts.filter((p) => p.group === g).length;
          const selected = active === g;
          return (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                selected
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white border-transparent"
                  : "bg-[#12151e] text-[#8892a4] border-[#2a2f42] hover:text-white hover:border-[#00d4ff]/50"
              }`}
            >
              {g} <span className={selected ? "opacity-80" : "opacity-60"}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Posts */}
      <div className="grid md:grid-cols-2 gap-6">
        {visible.map((p) => (
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
              <span className="text-[#8892a4] text-xs ml-auto">{p.readMins} min read</span>
            </div>
            <h2 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-[#00d4ff] transition-colors">
              {p.title}
            </h2>
            <p className="text-[#8892a4] text-sm leading-relaxed line-clamp-3">{p.excerpt}</p>
            <span className="mt-4 text-[#00d4ff] text-sm font-semibold inline-flex items-center gap-1">
              Read
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
