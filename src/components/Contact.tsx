export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
          Let&apos;s Work Together
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Got a Problem That Needs{" "}
          <span className="gradient-text">Solving?</span>
        </h2>
        <p className="text-[#8892a4] text-lg mb-12 max-w-xl mx-auto">
          Whether it&apos;s a legacy system begging for transformation, a team
          that needs direction, or an integration challenge that&apos;s stumping
          everyone else — I&apos;m interested. Let&apos;s talk.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:jhean@bluethoughtech.com"
            className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 text-center hover:border-[#00d4ff]/50 transition-colors group"
          >
            <div className="text-3xl mb-3">📧</div>
            <div className="text-[#8892a4] text-xs mb-1 uppercase tracking-wide">Email</div>
            <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
              jhean@bluethoughtech.com
            </div>
          </a>

          <a
            href="tel:+27826588336"
            className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 text-center hover:border-[#00d4ff]/50 transition-colors group"
          >
            <div className="text-3xl mb-3">📱</div>
            <div className="text-[#8892a4] text-xs mb-1 uppercase tracking-wide">Phone</div>
            <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
              +27 82 658 8336
            </div>
          </a>

          <div className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">📍</div>
            <div className="text-[#8892a4] text-xs mb-1 uppercase tracking-wide">Location</div>
            <div className="text-white text-sm font-medium">
              Johannesburg, South Africa
            </div>
            <div className="text-[#8892a4] text-xs mt-1">Open to relocation & remote</div>
          </div>
        </div>

        <div className="inline-flex items-center gap-4">
          <a
            href="mailto:jhean@bluethoughtech.com"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold hover:opacity-90 transition-opacity glow"
          >
            Start a Conversation
          </a>
        </div>

        <div className="mt-4 text-[#8892a4] text-sm">
          Typically responds within 24 hours.
        </div>
      </div>
    </section>
  );
}
