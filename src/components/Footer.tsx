import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2f42] py-8 bg-[#0a0b0f]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#8892a4]">
        <div>
          <span className="gradient-text font-bold">Jhean Lamprecht</span> · The Solutionist
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#00d4ff] transition-colors inline-flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-[#00d4ff] transition-colors">
            {site.email}
          </a>
          <a href={site.cv} download className="hover:text-[#00d4ff] transition-colors">
            Download CV
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} · Problems solved daily.
        </div>
      </div>
    </footer>
  );
}
