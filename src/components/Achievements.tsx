const achievements = [
  {
    icon: "🚀",
    title: "Zero-Downtime Migration",
    description:
      "Migrated Computicket's mission-critical platform from 20-year-old monolith to event driven while serving millions of live users — not one second of downtime over 18 months.",
    metric: "0 min downtime",
    color: "from-[#00d4ff]/20 to-transparent",
    border: "border-[#00d4ff]/30",
  },
  {
    icon: "📈",
    title: "40% Performance Leap",
    description:
      "Redesigned Oracle database architecture for PostgreSQL portability and implemented Elasticsearch + Redis caching, delivering a 40% improvement in query response times.",
    metric: "40% faster",
    color: "from-[#7c3aed]/20 to-transparent",
    border: "border-[#7c3aed]/30",
  },
  {
    icon: "💰",
    title: "30% Cost Reduction",
    description:
      "Containerization and automation initiatives cut infrastructure costs by 30% while simultaneously increasing system reliability and scalability by an order of magnitude.",
    metric: "30% saved",
    color: "from-[#10b981]/20 to-transparent",
    border: "border-[#10b981]/30",
  },
  {
    icon: "👥",
    title: "60% Turnover Reduction",
    description:
      "Built retention strategies and a learning culture that cut developer churn by 60% despite fierce international recruitment pressure targeting South African talent.",
    metric: "60% less churn",
    color: "from-[#f59e0b]/20 to-transparent",
    border: "border-[#f59e0b]/30",
  },
  {
    icon: "🌍",
    title: "Kempinski's Preferred Specialist",
    description:
      "Became the designated global migration specialist for Kempinski Group — one of the world's most prestigious luxury hotel chains — delivering across multiple countries.",
    metric: "Worldwide trust",
    color: "from-[#ec4899]/20 to-transparent",
    border: "border-[#ec4899]/30",
  },
  {
    icon: "🔗",
    title: "Pan-African Integration Network",
    description:
      "Orchestrated integrations with 5 major bus platforms (21 operators), 3 flight systems, FNB eBucks loyalty, Shoprite nationwide POS, and international partner GKPOS.",
    metric: "21+ partners",
    color: "from-[#06b6d4]/20 to-transparent",
    border: "border-[#06b6d4]/30",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0d0e14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
            Proof of Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Results That{" "}
            <span className="gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-[#8892a4] mt-4 max-w-xl mx-auto">
            Numbers don&apos;t lie. Here are the milestones that define what it
            means to be a Solutionist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className={`card-hover relative bg-[#12151e] border ${a.border} rounded-2xl p-6 overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${a.color} pointer-events-none`}
              />
              <div className="relative">
                <div className="text-3xl mb-4">{a.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-white font-bold text-lg">{a.title}</h3>
                  <span className="flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full bg-[#1a1f2e] text-[#00d4ff] border border-[#2a2f42]">
                    {a.metric}
                  </span>
                </div>
                <p className="text-[#8892a4] text-sm leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="mt-16 bg-[#12151e] border border-[#2a2f42] rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6">Career at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "14+", label: "Years in IT", sub: "Database → Architecture → Leadership" },
              { value: "50+", label: "Hotels Supported", sub: "Oracle DBA across SA" },
              { value: "21", label: "Bus Operators", sub: "Transport integrations built" },
              { value: "10x", label: "Traffic Scalability", sub: "Microservices transformation" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
                <div className="text-white font-semibold mt-1 text-sm">{s.label}</div>
                <div className="text-[#8892a4] text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
