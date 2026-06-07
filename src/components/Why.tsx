const pains = [
  {
    icon: "🔥",
    pain: "Systems that fail at the worst possible moment",
    cost: "Revenue loss, reputational damage, sleepless nights",
  },
  {
    icon: "🧩",
    pain: "Technology complexity that only grows",
    cost: "Accumulated technical debt that nobody wants to touch",
  },
  {
    icon: "🌀",
    pain: "Teams that fight fires instead of building futures",
    cost: "Talented people burning out on avoidable problems",
  },
  {
    icon: "🔒",
    pain: "Legacy systems holding the business hostage",
    cost: "Missed opportunities while competitors move faster",
  },
];

export default function Why() {
  return (
    <section className="py-24 bg-[#0d0e14] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7c3aed]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Opening question — large and arresting */}
        <div className="text-center mb-16">
          <p className="text-[#8892a4] text-sm font-semibold tracking-widest uppercase mb-6">
            The Real Question
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Do you need IT to be a{" "}
            <span className="gradient-text">pillar you can depend on?</span>
          </h2>
          <p className="text-[#8892a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Most IT environments are held together by workarounds, heroic individuals,
            and hope. That&apos;s not a strategy — it&apos;s a liability. The question
            isn&apos;t whether something will break. It&apos;s whether you have someone
            who&apos;s already built the safety net.
          </p>
        </div>

        {/* Pain grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {pains.map((p) => (
            <div
              key={p.pain}
              className="flex gap-4 bg-[#12151e] border border-[#2a2f42] rounded-2xl p-5"
            >
              <div className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</div>
              <div>
                <p className="text-white font-semibold mb-1">{p.pain}</p>
                <p className="text-[#8892a4] text-sm">{p.cost}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The shift — resolution */}
        <div className="relative bg-gradient-to-br from-[#12151e] to-[#1a1f2e] border border-[#00d4ff]/20 rounded-3xl p-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#7c3aed]/5 pointer-events-none" />
          <div className="relative">
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3">
              The answer
            </p>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Add an authentic Solutionist to the fold
              <br />
              <span className="gradient-text">and achieve your tech solution.</span>
            </h3>
            <p className="text-[#8892a4] text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              I don&apos;t just manage IT — I engineer reliability, build teams that
              own their systems, and create the kind of technology foundation that
              lets your business move with confidence. Not someday. Now.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: "Zero-downtime migrations", icon: "✓" },
                { label: "Teams that don't need babysitting", icon: "✓" },
                { label: "Systems built to last, not just to ship", icon: "✓" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-[#00d4ff]">
                  <span className="font-bold">{item.icon}</span>
                  <span className="text-[#e8eaf0]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
