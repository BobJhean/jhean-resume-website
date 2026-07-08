import { site } from "@/lib/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/5 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
            Let&apos;s Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Add an authentic Solutionist to the fold —{" "}
            <span className="gradient-text">achieve your tech solution.</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-xl mx-auto">
            Whether it&apos;s a legacy system begging for transformation, a team
            that needs direction, or an integration challenge that&apos;s stumping
            everyone else — I&apos;m interested. Let&apos;s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — contact details */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-5 flex items-center gap-4 hover:border-[#00d4ff]/50 transition-colors group"
            >
              <div className="text-2xl">📧</div>
              <div>
                <div className="text-[#8892a4] text-xs uppercase tracking-wide">Email</div>
                <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                  {site.email}
                </div>
              </div>
            </a>

            <a
              href={site.phoneHref}
              className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-5 flex items-center gap-4 hover:border-[#00d4ff]/50 transition-colors group"
            >
              <div className="text-2xl">📱</div>
              <div>
                <div className="text-[#8892a4] text-xs uppercase tracking-wide">Phone</div>
                <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                  {site.phone}
                </div>
              </div>
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-5 flex items-center gap-4 hover:border-[#00d4ff]/50 transition-colors group"
            >
              <div className="text-2xl">💼</div>
              <div>
                <div className="text-[#8892a4] text-xs uppercase tracking-wide">LinkedIn</div>
                <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                  in/jhean-lamprecht
                </div>
              </div>
            </a>

            <div className="bg-[#12151e] border border-[#2a2f42] rounded-2xl p-5 flex items-center gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <div className="text-[#8892a4] text-xs uppercase tracking-wide">Location</div>
                <div className="text-white text-sm font-medium">{site.location}</div>
                <div className="text-[#8892a4] text-xs mt-0.5">Open to relocation &amp; remote</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/30 rounded-2xl p-5">
              <div className="text-[#00d4ff] text-xs uppercase tracking-wide font-semibold mb-3">
                Downloads
              </div>
              <div className="flex flex-col gap-2.5">
                {site.downloads.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    download
                    className="flex items-center gap-3 text-white text-sm font-medium hover:text-[#00d4ff] transition-colors group"
                  >
                    <span>{d.icon}</span>
                    <span>{d.label}</span>
                    <span className="text-[#8892a4] text-xs font-normal">— {d.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — message form */}
          <ContactForm />
        </div>

        <div className="mt-8 text-center text-[#8892a4] text-sm">
          Typically responds within 24 hours.
        </div>
      </div>
    </section>
  );
}
