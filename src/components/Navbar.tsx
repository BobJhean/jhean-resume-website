"use client";
import { useState, useEffect } from "react";
import { site } from "@/lib/site";
import DownloadDropdown from "./DownloadDropdown";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0b0f]/90 backdrop-blur-md border-b border-[#2a2f42]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          <span className="gradient-text">JL</span>
          <span className="text-[#8892a4] ml-1 font-light">/ Solutionist</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[#8892a4] hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2">
            <DownloadDropdown variant="outline" />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#8892a4] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#12151e]/95 backdrop-blur-md border-b border-[#2a2f42] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8892a4] hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#2a2f42] mt-1">
            <div className="text-[#8892a4] text-xs uppercase tracking-wide mb-2">Download</div>
            <div className="flex flex-col gap-2">
              {site.downloads.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  download
                  className="flex items-center gap-2 text-[#e8eaf0] text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{d.icon}</span> {d.label}
                </a>
              ))}
            </div>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center px-4 py-2 rounded-full border border-[#2a2f42] text-[#e8eaf0] text-sm font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
