const jobs = [
  {
    title: "IT Manager & Digital Transformation Leader",
    company: "Computicket",
    period: "June 2015 – Present",
    tag: "Current",
    tagColor: "text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/30",
    highlights: [
      "Led complete modernization of a 20-year-old monolithic ticketing system to event-driven microservices — zero downtime for millions of users over 18 months",
      "Implemented full DevOps stack: Docker, Kubernetes, Istio, Jenkins CI/CD, Ansible, HashiCorp Vault, Keycloak",
      "Achieved 40% DB query performance improvement and 30% infrastructure cost reduction through containerization",
      "Built and managed distributed development teams across multiple African countries; reduced developer turnover by 60%",
      "Established strategic integrations with FNB eBucks, Shoprite POS, 5 bus platforms (21 operators), 3 flight booking systems, and GKPOS for international expansion",
      "Deployed full observability: Grafana, Prometheus, ELK Stack — maintaining 99.9% system availability",
    ],
    tech: ["Docker", "Kubernetes", "Istio", "Jenkins", "Oracle", "PostgreSQL", "Elasticsearch", "Redis", "Keycloak", "Ansible"],
  },
  {
    title: "Senior Database Developer & Team Leader",
    company: "Computicket",
    period: "June 2011 – May 2015",
    tag: "4 Years",
    tagColor: "text-[#7c3aed] bg-[#7c3aed]/10 border-[#7c3aed]/30",
    highlights: [
      "Led team of 4 senior developers delivering complex technical solutions within aggressive business timelines",
      "Managed all aspects of Oracle database administration: performance tuning, capacity planning, backup & recovery",
      "Designed and maintained complex data export/import systems for third-party partner integrations",
      "Implemented comprehensive monitoring systems for proactive performance issue detection",
      "Developed automated data archiving and cleanup processes managing terabytes of historical transaction data",
    ],
    tech: ["Oracle PL/SQL", "SQL Developer", "Toad", "Oracle OEM", "Data Archiving"],
  },
  {
    title: "Migration Specialist & Reports Developer",
    company: "Micros South Africa",
    period: "October 2007 – May 2011",
    tag: "4 Years",
    tagColor: "text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30",
    highlights: [
      "Became preferred migration specialist for Kempinski Group properties worldwide — luxury hotel chains across multiple countries",
      "Successfully migrated legacy systems for Marriott and Radisson across multiple countries with 100% data integrity",
      "Created automated migration tools reducing project time from weeks to days",
      "Provided 24/7 DBA support for Oracle 9i, 10g, and 11g covering 50+ hotels nationwide",
      "Developed statistical and financial reporting solutions using Oracle Report Builder",
    ],
    tech: ["Oracle 9i/10g/11g", "Oracle Reports Builder", "Oracle Forms", "PL/SQL", "Data Migration"],
  },
  {
    title: "Management & Leadership Foundation",
    company: "Various Organizations",
    period: "1996 – 2007",
    tag: "11 Years",
    tagColor: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/30",
    highlights: [
      "Hospitality Account Manager — Quest Staffing (Monte Casino): Managed 144 F&B staff across multiple venues",
      "Property Manager — Truter Management Consultants: Oversaw R85M portfolio of 61 commercial & residential properties",
      "General Manager — Rhapsodys Restaurant: Consistent profitability, monthly performance bonuses",
      "Head Waiter — Celebrity Cruise Lines: International premium hospitality, multicultural team management",
      "General Manager — Keg & Beagle: Gold awards for cleanliness and management excellence annually",
    ],
    tech: ["Team Leadership", "P&L Management", "Operations", "Customer Excellence"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d0e14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4">
            Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            14 Years of{" "}
            <span className="gradient-text">Solving What Matters</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-[#0a0b0f] border-2 border-[#00d4ff] z-10" />

                <div className="card-hover bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl">{job.title}</h3>
                      <p className="text-[#8892a4] mt-1">{job.company} · {job.period}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${job.tagColor}`}>
                      {job.tag}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#8892a4]">
                        <span className="text-[#00d4ff] mt-0.5 flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md bg-[#1a1f2e] text-[#8892a4] text-xs border border-[#2a2f42]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
