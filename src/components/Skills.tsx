const skillGroups = [
  {
    category: "Database & Data",
    icon: "🗄️",
    skills: [
      { name: "Oracle PL/SQL", level: 98 },
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "Elasticsearch", level: 80 },
      { name: "Redis", level: 78 },
      { name: "Data Architecture & ETL", level: 90 },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: "⚙️",
    skills: [
      { name: "Docker / Kubernetes", level: 88 },
      { name: "Jenkins CI/CD", level: 85 },
      { name: "Ansible Automation", level: 82 },
      { name: "Istio Service Mesh", level: 78 },
      { name: "Linux Administration", level: 85 },
    ],
  },
  {
    category: "Security & Identity",
    icon: "🔐",
    skills: [
      { name: "Keycloak / OAuth / SAML", level: 85 },
      { name: "HashiCorp Vault", level: 82 },
      { name: "Security Architecture", level: 80 },
    ],
  },
  {
    category: "Observability",
    icon: "📊",
    skills: [
      { name: "Grafana / Prometheus", level: 88 },
      { name: "ELK Stack", level: 85 },
      { name: "SonarQube", level: 80 },
    ],
  },
  {
    category: "Leadership & Delivery",
    icon: "🚀",
    skills: [
      { name: "Agile / Scrum", level: 95 },
      { name: "Remote Team Management", level: 95 },
      { name: "Digital Transformation", level: 95 },
      { name: "Strategic Partnerships", level: 90 },
    ],
  },
  {
    category: "Development",
    icon: "💻",
    skills: [
      { name: "RESTful API Design", level: 85 },
      { name: "System Architecture", level: 90 },
      { name: "PL/SQL / SQL", level: 98 },
      { name: "Selenium / Testing", level: 75 },
    ],
  },
];

const certs = [
  { name: "Oracle Certified Associate (OCA)", sub: "PL/SQL Developer" },
  { name: "Oracle SQL Certified Professional", sub: "Advanced Query & Design" },
  { name: "Oracle Forms Development", sub: "Instructor-Led" },
  { name: "Oracle Database Administration I", sub: "Instructor-Led" },
  { name: "Data Migration Specialist", sub: "Micros Systems" },
  { name: "Property Management System", sub: "Micros Certified" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
            Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Tools of a{" "}
            <span className="gradient-text">Solutionist</span>
          </h2>
          <p className="text-[#8892a4] mt-4 max-w-xl mx-auto">
            14 years of hard-won expertise across the full technology stack — from
            raw database performance to enterprise DevOps at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#8892a4]">{skill.name}</span>
                      <span className="text-xs text-[#00d4ff]">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-[#2a2f42] rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-[#12151e] border border-[#2a2f42] rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <span>🎓</span> Certifications & Training
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certs.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1f2e] border border-[#2a2f42]"
              >
                <span className="text-[#00d4ff] mt-0.5">✓</span>
                <div>
                  <div className="text-white text-sm font-medium">{c.name}</div>
                  <div className="text-[#8892a4] text-xs mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#2a2f42]">
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#8892a4]">
              <div>
                <span className="text-white font-medium">Education:</span> UNISA Bachelor of Arts — Financial Management
              </div>
              <div>
                <span className="text-white font-medium">Languages:</span> English & Afrikaans (Native)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
