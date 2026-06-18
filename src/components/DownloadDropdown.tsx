"use client";
import { useState, useRef, useEffect } from "react";
import { site } from "@/lib/site";

export default function DownloadDropdown({
  variant = "solid",
}: {
  variant?: "solid" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const triggerClass =
    variant === "solid"
      ? "bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white glow hover:opacity-90"
      : "border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${triggerClass}`}
      >
        Download
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-[#12151e] border border-[#2a2f42] rounded-2xl shadow-2xl overflow-hidden z-50">
          {site.downloads.map((d) => (
            <a
              key={d.label}
              href={d.href}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1f2e] transition-colors border-b border-[#2a2f42] last:border-0 group"
            >
              <span className="text-xl flex-shrink-0">{d.icon}</span>
              <span className="text-left">
                <span className="block text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                  {d.label}
                </span>
                <span className="block text-[#8892a4] text-xs">{d.description}</span>
              </span>
              <svg
                className="w-4 h-4 ml-auto text-[#5a6478] group-hover:text-[#00d4ff] transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 8l-4-4m4 4l4-4" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
