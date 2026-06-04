const values = [
  {
    icon: "⚡",
    title: "Problem-First Thinking",
    description:
      "I start with the problem, not the technology. Every solution I design is grounded in business reality, not just technical elegance.",
  },
  {
    icon: "🔄",
    title: "Change Architect",
    description:
      "I don't manage change — I architect it. From monolith to microservices, from chaos to clarity, I build the bridge and walk teams across it.",
  },
  {
    icon: "📚",
    title: "Perpetual Learner",
    description:
      "Technology evolves daily. My superpower is the hunger to learn whatever it takes to get the job done — and teach others along the way.",
  },
  {
    icon: "🤝",
    title: "People Multiplier",
    description:
      "The best technology is built by the best teams. I recruit for mindset, develop talent relentlessly, and create cultures where people do their life's best work.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - story */}
          <div>
            <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
              Who I Am
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              I solve problems others{" "}
              <span className="gradient-text">call impossible</span>.
            </h2>
            <div className="space-y-4 text-[#8892a4] leading-relaxed text-base">
              <p>
                I&apos;ve spent 14+ years at the intersection of technology and
                business transformation. My career has taken me from luxury hotel
                chains in Europe to South Africa&apos;s largest ticketing platform —
                always with one constant: find the problem, engineer the solution,
                leave things better than I found them.
              </p>
              <p>
                At Computicket, I led the complete modernization of a 20-year-old
                monolithic system into an event-driven microservices architecture —{" "}
                <span className="text-white font-medium">
                  without a single minute of downtime
                </span>{" "}
                for millions of users. Not because it was easy. Because I built a
                strategy, assembled the right team, and executed with discipline.
              </p>
              <p>
                I call myself a Solutionist because that&apos;s what I do: I look at
                what others see as insurmountable technical debt, legacy systems,
                or organizational friction — and I engineer a path forward.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "40%", label: "DB Performance Gain" },
                { value: "60%", label: "Reduced Dev Turnover" },
                { value: "30%", label: "Infrastructure Cost Cut" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#12151e] border border-[#2a2f42] rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[#8892a4] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - values */}
          <div className="grid grid-cols-1 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-5 flex gap-4"
              >
                <div className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1f2e]">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{v.title}</h3>
                  <p className="text-[#8892a4] text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
