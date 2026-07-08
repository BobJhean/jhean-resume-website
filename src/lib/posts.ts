export type Post = {
  slug: string;
  date: string;
  displayDate: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    "slug": "whats-next-ai-native-systems-will-need-old-school-discipline",
    "date": "2026-05-29",
    "displayDate": "29 May 2026",
    "title": "What’s Next: AI-Native Systems Will Need Old-School Discipline",
    "category": "Prediction / Architecture",
    "excerpt": "AI-native systems sound futuristic.",
    "content": [
      "AI-native systems sound futuristic.",
      "Agents, models, vector search, natural-language interfaces, automated workflows, adaptive recommendations, intelligent monitoring.",
      "But the systems that survive will need old-school discipline.",
      "Clear data ownership.",
      "Good logging.",
      "Permission controls.",
      "Testing.",
      "Rollback.",
      "Architecture decisions.",
      "Monitoring.",
      "Cost management.",
      "Human approval.",
      "Documentation.",
      "The more powerful the system becomes, the more important these basics become.",
      "AI does not remove software engineering. It raises the cost of poor engineering.",
      "A bad traditional system may produce errors. A bad AI-enabled system may produce errors confidently, at scale, while users trust it.",
      "That is the uncomfortable part.",
      "The future belongs to teams that combine modern AI capability with boring operational maturity.",
      "Not the flashiest teams. Not the loudest vendors.",
      "The teams that can build useful systems, understand failure, and keep control.",
      "That is what comes next."
    ]
  },
  {
    "slug": "software-teams-need-ai-policies-that-developers-can-actually-follow",
    "date": "2026-05-18",
    "displayDate": "18 May 2026",
    "title": "Software Teams Need AI Policies That Developers Can Actually Follow",
    "category": "AI / Software Development",
    "excerpt": "Many AI policies are written like legal shields.",
    "content": [
      "Many AI policies are written like legal shields.",
      "They are long, vague, and difficult to apply during real work.",
      "Developers need something more practical.",
      "Can I paste code into this tool?",
      "Can I use production logs?",
      "Can I generate tests?",
      "Can I ask it to explain a vendor API?",
      "Can I use it for database scripts?",
      "Can I include customer data?",
      "Must I disclose AI-generated code in review?",
      "If the policy does not answer these questions clearly, people will improvise.",
      "That is risky.",
      "A good developer AI policy should be short enough to read, specific enough to follow, and strict where the consequences are serious.",
      "It should define approved tools, prohibited data, review requirements, security expectations, and accountability.",
      "AI coding tools are useful. But unmanaged usage can leak sensitive data, introduce weak code, or create licensing concerns.",
      "Developers do not need fear-based policy.",
      "They need clear rules that match real workflows."
    ]
  },
  {
    "slug": "news-reflection-ai-talent-models-and-money-are-becoming-strategic-asse",
    "date": "2026-05-07",
    "displayDate": "7 May 2026",
    "title": "News Reflection: AI Talent, Models, and Money Are Becoming Strategic Assets",
    "category": "AI / News Reflection",
    "excerpt": "The AI industry is starting to look less like a software trend and more like a strategic resource race.",
    "content": [
      "The AI industry is starting to look less like a software trend and more like a strategic resource race.",
      "The scarce assets are clear: talent, compute, data, distribution, trust, and capital.",
      "This changes the market.",
      "Companies are no longer only competing on product features. They are competing on who can train models, hire researchers, secure infrastructure, attract developers, and integrate AI into daily workflows.",
      "For smaller businesses, this can feel distant.",
      "But the effects will reach everyone.",
      "AI tools will become more capable. Vendor dependency will increase. Pricing may shift. Regulation may tighten. Data protection will matter more. Businesses will need to decide which platforms they trust.",
      "There is opportunity here, but also concentration risk.",
      "If too much intelligence infrastructure sits in too few hands, the rest of the market becomes dependent.",
      "The practical response is not panic. It is architecture discipline: avoid unnecessary lock-in, protect your data, design clear integration layers, and understand what your AI vendors can and cannot access."
    ]
  },
  {
    "slug": "optimistic-note-the-future-is-still-buildable",
    "date": "2026-04-29",
    "displayDate": "29 April 2026",
    "title": "Optimistic Note: The Future Is Still Buildable",
    "category": "Technology / Optimism",
    "excerpt": "It is easy to feel overwhelmed by technology.",
    "content": [
      "It is easy to feel overwhelmed by technology.",
      "AI is moving quickly. Cybersecurity risks are growing. Systems are becoming more complex. Skills are ageing faster. Regulation is uncertain. Costs are rising.",
      "That can make the future feel like something happening to us.",
      "But technology is still built by people making decisions.",
      "Architecture can be simplified. Processes can be improved. Knowledge can be documented. Teams can be trained. Systems can be made safer. AI can be used carefully. Automation can remove boring work. Better tools can help smaller teams do more.",
      "The future is not automatically good. It is also not automatically bad.",
      "It is shaped by incentives, discipline, imagination, and responsibility.",
      "That is both uncomfortable and hopeful.",
      "We do not need to accept every trend. We need to choose what is useful, reject what is careless, and build systems that make human work better.",
      "That is still possible."
    ]
  },
  {
    "slug": "the-human-side-of-ai-adoption-is-being-underestimated",
    "date": "2026-04-17",
    "displayDate": "17 April 2026",
    "title": "The Human Side of AI Adoption Is Being Underestimated",
    "category": "AI / Change Management",
    "excerpt": "AI adoption is often discussed as a tooling problem.",
    "content": [
      "AI adoption is often discussed as a tooling problem.",
      "Choose the model. Connect the data. Configure the workflow. Train the users.",
      "That is incomplete.",
      "AI changes how people feel about their work.",
      "Some feel faster. Some feel replaced. Some distrust the output. Some over-trust it. Some avoid it because they do not want to look incompetent. Some use it secretly because policy is unclear.",
      "Ignoring this human layer is a mistake.",
      "Successful AI adoption needs more than technical rollout. It needs clear expectations.",
      "What may staff use AI for?",
      "What must they not use it for?",
      "When must output be reviewed?",
      "How will performance be measured?",
      "Will AI reduce headcount or reduce repetitive work?",
      "People behave differently when they believe a tool is a threat.",
      "The technology may be new, but the change-management problem is old.",
      "Trust is part of the system."
    ]
  },
  {
    "slug": "event-driven-architecture-needs-product-thinking",
    "date": "2026-04-08",
    "displayDate": "8 April 2026",
    "title": "Event-Driven Architecture Needs Product Thinking",
    "category": "Event-Driven Architecture",
    "excerpt": "Event-driven systems often fail when they are treated as purely technical projects.",
    "content": [
      "Event-driven systems often fail when they are treated as purely technical projects.",
      "The business needs to understand the events.",
      "A refund requested is not the same as a refund approved.",
      "A payment initiated is not the same as a payment completed.",
      "A booking reserved is not the same as a ticket issued.",
      "These distinctions matter.",
      "If events are named vaguely, downstream systems make wrong assumptions. Reports become confusing. Support teams cannot explain status. Integrations become fragile.",
      "Event design should involve product owners, analysts, developers, and operations.",
      "The question is not only “What message do we publish?”",
      "The question is “What business fact are we recording?”",
      "A good event catalogue becomes a shared language between business and technology. A bad one becomes technical noise.",
      "Event-driven architecture is not just about queues and brokers.",
      "It is about modelling business change accurately."
    ]
  },
  {
    "slug": "prediction-ai-will-force-better-permission-models",
    "date": "2026-03-31",
    "displayDate": "31 March 2026",
    "title": "Prediction: AI Will Force Better Permission Models",
    "category": "Security / AI",
    "excerpt": "AI systems make permission problems harder.",
    "content": [
      "AI systems make permission problems harder.",
      "A normal application shows a user what they are allowed to see. An AI assistant may summarise, infer, combine, and expose information across sources.",
      "That creates subtle risk.",
      "A user may not have access to a document, but they may ask a question that causes the AI to reveal something from it indirectly. Or the AI may combine harmless facts into sensitive insight.",
      "Traditional permissions are not enough if the AI layer can reason across boundaries.",
      "Businesses will need stronger access control, source filtering, audit logs, and answer-level permission checks.",
      "This will become more important as AI moves from chat into operational systems.",
      "The question is not only “Can the user access this document?”",
      "It is also “Can the user receive this answer?”",
      "That is a harder problem.",
      "My prediction: many early enterprise AI systems will need redesign once permission leakage becomes visible."
    ]
  },
  {
    "slug": "the-case-for-boring-technology",
    "date": "2026-03-18",
    "displayDate": "18 March 2026",
    "title": "The Case for Boring Technology",
    "category": "Software Engineering",
    "excerpt": "Boring technology is underrated.",
    "content": [
      "Boring technology is underrated.",
      "A stable database. A reliable queue. A simple API. Clear logs. Proven deployment scripts. Good backups. Basic monitoring. Predictable authentication.",
      "These things do not impress people in presentations, but they keep businesses alive.",
      "The technology industry often rewards novelty. New frameworks, new architectures, new platforms, new tools.",
      "Some of them are valuable. Some are distractions.",
      "The mature question is not “Is this new?”",
      "It is “Does this reduce risk, improve delivery, or create meaningful capability?”",
      "Boring technology has one major advantage: people understand its failure modes.",
      "That matters.",
      "In critical systems, predictability often beats elegance. The best architecture may use modern ideas where they help, and boring tools where reliability matters.",
      "Innovation is useful. Stability is useful too.",
      "A good engineer should respect both."
    ]
  },
  {
    "slug": "ai-in-software-architecture-helpful-assistant-not-final-authority",
    "date": "2026-03-09",
    "displayDate": "9 March 2026",
    "title": "AI in Software Architecture: Helpful Assistant, Not Final Authority",
    "category": "AI / Architecture",
    "excerpt": "AI can already assist with architecture work.",
    "content": [
      "AI can already assist with architecture work.",
      "It can compare options, draft architecture decision records, generate diagrams, explain trade-offs, identify risks, summarise requirements, and suggest migration paths.",
      "This is useful.",
      "But architecture is not only pattern selection.",
      "Architecture is context: business priorities, team skills, data sensitivity, budget, operational maturity, legacy constraints, politics, timelines, and risk tolerance.",
      "AI can help structure thinking, but it should not be treated as the final authority.",
      "A model may recommend microservices without understanding the team cannot operate them. It may suggest event-driven design without understanding the reporting constraints. It may propose cloud-native patterns without understanding cost pressure.",
      "The best use is as a challenger.",
      "Ask AI: what are we missing? What can go wrong? What are the trade-offs? What is a simpler option? What would you reject?",
      "Use it to improve thinking, not replace accountability.",
      "Architecture decisions still need human ownership."
    ]
  },
  {
    "slug": "wonder-biotechnology-and-computing-are-moving-closer-together",
    "date": "2026-02-28",
    "displayDate": "28 February 2026",
    "title": "Wonder: Biotechnology and Computing Are Moving Closer Together",
    "category": "Technology / Random Topic",
    "excerpt": "Some of the most interesting future technology may sit between biology and computing.",
    "content": [
      "Some of the most interesting future technology may sit between biology and computing.",
      "Better sensors, AI-assisted research, lab automation, genetic analysis, protein modelling, and medical data platforms are slowly changing how we understand living systems.",
      "This area deserves both excitement and caution.",
      "The upside is huge: better diagnostics, faster research, more personalised treatment, improved agriculture, and new materials.",
      "The risks are also real: privacy, unequal access, biosecurity, regulation, and ethical limits.",
      "Unlike consumer software, biotechnology deals directly with living systems. Mistakes can carry heavier consequences.",
      "Still, the convergence is fascinating.",
      "Software is no longer only managing business processes. It is helping scientists explore biological complexity that was previously too large to reason about manually.",
      "That should create some humility.",
      "The future is not just smarter apps. It may include better ways to understand life itself."
    ]
  },
  {
    "slug": "what-comes-after-microservices-maybe-better-boundaries",
    "date": "2026-02-19",
    "displayDate": "19 February 2026",
    "title": "What Comes After Microservices? Maybe Better Boundaries",
    "category": "Architecture / Prediction",
    "excerpt": "People like naming the next big architecture style.",
    "content": [
      "People like naming the next big architecture style.",
      "Monolith. SOA. Microservices. Serverless. Event-driven. Mesh. Edge. Agentic systems.",
      "The next step may not be a new label.",
      "It may be better boundaries.",
      "Most architecture pain comes from poor boundaries: unclear domains, shared data ownership, hidden dependencies, leaky APIs, mixed responsibilities, and teams stepping on each other.",
      "Whether the system is a monolith, microservice estate, event-driven platform, or serverless workflow, bad boundaries will hurt.",
      "AI may make this more visible.",
      "If AI tools analyse codebases, tickets, logs, and schemas, they may help identify coupling, ownership gaps, and unstable interfaces.",
      "But they will not decide the business boundaries for us.",
      "That still requires human judgement.",
      "Maybe the future of architecture is less about chasing the next pattern and more about getting the old fundamentals right: cohesion, coupling, ownership, resilience, data integrity, and changeability.",
      "Not trendy. Necessary."
    ]
  },
  {
    "slug": "the-future-of-search-looks-more-like-conversation",
    "date": "2026-02-10",
    "displayDate": "10 February 2026",
    "title": "The Future of Search Looks More Like Conversation",
    "category": "AI / User Experience",
    "excerpt": "Traditional search asks users to know the right keywords.",
    "content": [
      "Traditional search asks users to know the right keywords.",
      "AI search allows users to ask in natural language.",
      "That sounds simple, but it changes behaviour.",
      "A user does not want ten links. They want an answer, a summary, a comparison, or a next action. They want the system to understand intent, not just match text.",
      "This will affect websites, internal systems, customer portals, and documentation.",
      "But conversational search must be careful.",
      "Users need sources. They need dates. They need to know when the system is uncertain. They need to know whether the answer came from policy, data, opinion, or inference.",
      "A confident answer without traceability is dangerous.",
      "The best search experiences may combine conversation with structured results: answer first, sources beside it, filters available, actions controlled.",
      "Search is moving from retrieval to reasoning.",
      "That is powerful, but only if the reasoning can be inspected."
    ]
  },
  {
    "slug": "concern-we-are-automating-before-we-understand",
    "date": "2026-01-31",
    "displayDate": "31 January 2026",
    "title": "Concern: We Are Automating Before We Understand",
    "category": "AI / Automation",
    "excerpt": "There is a dangerous pattern in technology adoption.",
    "content": [
      "There is a dangerous pattern in technology adoption.",
      "A process is slow.",
      "Nobody fully understands why.",
      "Someone proposes automation.",
      "The automation preserves the confusion, but faster.",
      "AI makes this easier.",
      "A company can automate replies before fixing support quality. Generate reports before agreeing on metrics. Classify requests before defining ownership. Summarise meetings before improving decisions.",
      "Automation should come after understanding, not before it.",
      "The correct sequence is boring: map the process, remove unnecessary steps, define ownership, clarify rules, then automate what remains.",
      "If you automate a bad process, you may make it harder to see.",
      "This is one of the reasons I remain both optimistic and cautious about AI. It can remove real friction. It can also become a very expensive way to avoid thinking.",
      "The question should not be “Can we automate this?”",
      "The first question should be “Should this process exist in this form?”"
    ]
  },
  {
    "slug": "software-architecture-is-becoming-more-socio-technical",
    "date": "2026-01-20",
    "displayDate": "20 January 2026",
    "title": "Software Architecture Is Becoming More Socio-Technical",
    "category": "Software Architecture",
    "excerpt": "Architecture is not only about systems.",
    "content": [
      "Architecture is not only about systems.",
      "It is about teams.",
      "A service boundary that looks perfect technically may fail if no team owns it. A shared database may work technically but create political conflict. A microservice strategy may collapse if deployment skills are weak. A modular monolith may succeed if the team has discipline.",
      "This is why architecture is becoming more socio-technical.",
      "The structure of software and the structure of the organisation influence each other.",
      "AI adds another layer. If AI tools generate code, documentation, tests, and analysis, teams need review patterns, approval rules, and accountability. The architecture is no longer only code and infrastructure. It includes human-machine workflows.",
      "That sounds abstract, but it is practical.",
      "Before choosing architecture, ask: who owns this, who changes it, who supports it, who pays for it, who understands it, and who gets woken up when it fails?",
      "The best architecture is not the cleverest one.",
      "It is the one the organisation can actually operate."
    ]
  },
  {
    "slug": "welcome-to-the-year-of-practical-ai",
    "date": "2026-01-09",
    "displayDate": "9 January 2026",
    "title": "Welcome to the Year of Practical AI",
    "category": "AI / Outlook",
    "excerpt": "2026 may be the year AI becomes less about amazement and more about practical integration.",
    "content": [
      "2026 may be the year AI becomes less about amazement and more about practical integration.",
      "That is a good thing.",
      "The market has had enough demos. Businesses now need value.",
      "Can AI reduce ticket handling time?",
      "Can it improve reporting?",
      "Can it assist developers safely?",
      "Can it detect anomalies?",
      "Can it help users navigate complex systems?",
      "Can it reduce manual admin?",
      "These are less glamorous questions than “Can AI think?” but they are more useful.",
      "The practical phase will be harder than the demo phase.",
      "It requires clean data, security review, change management, monitoring, user training, and honest measurement.",
      "Some AI projects will fail because they were never attached to a real problem. Some will fail because they were technically clever but operationally careless.",
      "The useful ones will probably be narrow, boring, and deeply integrated.",
      "That is not disappointing. That is maturity."
    ]
  },
  {
    "slug": "2026-prediction-ai-will-become-less-magical-and-more-embedded",
    "date": "2025-12-30",
    "displayDate": "30 December 2025",
    "title": "2026 Prediction: AI Will Become Less Magical and More Embedded",
    "category": "Prediction / AI",
    "excerpt": "The first wave of AI adoption felt magical.",
    "content": [
      "The first wave of AI adoption felt magical.",
      "Ask a question, get an answer. Generate text. Generate code. Summarise documents. Create images. Translate ideas into drafts.",
      "The next wave will feel less magical but more useful.",
      "AI will be embedded into normal workflows: support desks, CRMs, development environments, reporting tools, finance systems, knowledge bases, monitoring platforms, and customer portals.",
      "That is where the real test begins.",
      "A standalone AI tool can impress people. An embedded AI feature must work inside permissions, business rules, audit requirements, data quality problems, and user expectations.",
      "This will expose weak systems.",
      "If the underlying process is unclear, AI will amplify confusion. If the data is messy, AI will produce messy intelligence. If ownership is vague, AI will create accountability problems.",
      "My prediction for 2026: the winners will not be the companies that “use AI.” Everyone will claim that.",
      "The winners will be the ones that integrate AI into controlled, valuable, measurable workflows."
    ]
  },
  {
    "slug": "skeptical-note-not-everything-needs-to-be-real-time",
    "date": "2025-12-17",
    "displayDate": "17 December 2025",
    "title": "Skeptical Note: Not Everything Needs to Be Real-Time",
    "category": "Architecture / Data",
    "excerpt": "Real-time sounds impressive.",
    "content": [
      "Real-time sounds impressive.",
      "Real-time dashboards. Real-time alerts. Real-time synchronisation. Real-time decisioning.",
      "Sometimes it is necessary. Fraud detection, payments, safety systems, stock availability, and live operations may need fast reaction.",
      "But many business processes do not need true real-time behaviour.",
      "They need timely, reliable, understandable updates.",
      "Real-time systems are more complex. They cost more. They create more failure modes. They require stronger observability and operational maturity.",
      "Before building real-time architecture, ask what latency the business can actually tolerate.",
      "One second? One minute? Fifteen minutes? Overnight?",
      "The answer matters.",
      "Batch processing is not primitive. Scheduled processing is not automatically bad. Simpler systems are often more reliable.",
      "The goal is not maximum speed. The goal is appropriate speed.",
      "Architecture should serve the business reality, not the ego of the diagram."
    ]
  },
  {
    "slug": "end-of-year-thought-technology-is-moving-faster-than-management",
    "date": "2025-12-08",
    "displayDate": "8 December 2025",
    "title": "End-of-Year Thought: Technology Is Moving Faster Than Management",
    "category": "Technology / Business",
    "excerpt": "Technology teams are adopting AI, automation, cloud services, observability tools, and new development patterns quickly.",
    "content": [
      "Technology teams are adopting AI, automation, cloud services, observability tools, and new development patterns quickly.",
      "Management practices are not always keeping up.",
      "Many companies still approve work slowly, define requirements poorly, underinvest in documentation, ignore technical debt, and measure output instead of outcomes.",
      "That mismatch is becoming more obvious.",
      "AI can make teams faster, but it cannot fix confused priorities. Cloud can make deployment faster, but it cannot fix weak ownership. Microservices can support scale, but they cannot fix unclear domains.",
      "The bottleneck is often not technical capability. It is decision quality.",
      "In 2026, companies may need less technology theatre and more management discipline.",
      "Clear ownership. Smaller decisions. Faster feedback. Better metrics. Real retrospectives. Honest cost tracking. Practical governance.",
      "The tools are improving. The question is whether organisations can improve with them."
    ]
  },
  {
    "slug": "prediction-internal-developer-platforms-will-matter-more",
    "date": "2025-11-29",
    "displayDate": "29 November 2025",
    "title": "Prediction: Internal Developer Platforms Will Matter More",
    "category": "Prediction / DevOps",
    "excerpt": "Developer productivity is not only about better coding tools.",
    "content": [
      "Developer productivity is not only about better coding tools.",
      "It is about reducing friction.",
      "How long does it take to create a service? Get access? Deploy safely? View logs? Run tests? Create a database? Configure secrets? Roll back? Understand standards?",
      "If every team solves these problems differently, the organisation pays a hidden tax.",
      "Internal developer platforms try to reduce that tax.",
      "The goal is not to remove responsibility from developers. The goal is to provide paved roads: approved patterns, templates, pipelines, observability, security defaults, and deployment workflows.",
      "AI may strengthen this trend. Developers will generate more code and services faster. Without platform discipline, that speed can create chaos.",
      "The next productivity bottleneck may not be writing code. It may be operating everything that gets created.",
      "A good platform helps teams move quickly without inventing the basics every time."
    ]
  },
  {
    "slug": "ai-regulation-will-probably-be-messy-before-it-is-useful",
    "date": "2025-11-18",
    "displayDate": "18 November 2025",
    "title": "AI Regulation Will Probably Be Messy Before It Is Useful",
    "category": "AI / Governance",
    "excerpt": "AI regulation is coming from many directions.",
    "content": [
      "AI regulation is coming from many directions.",
      "Privacy. Copyright. Employment. Security. Child safety. Competition. National security. Consumer protection. Financial risk.",
      "That means regulation will not arrive as one clean global rulebook.",
      "It will be messy.",
      "Different countries will move at different speeds. Different industries will face different rules. Large companies will adapt faster than small companies. Some rules will be sensible. Some will be vague. Some may age badly.",
      "Businesses should not wait for perfect clarity.",
      "They should start with internal controls: data handling rules, approved AI tools, review requirements, audit trails, human accountability, and clear restrictions on sensitive use cases.",
      "Good governance is not anti-innovation. It is what allows serious adoption.",
      "The companies that treat AI as a toy will move fast and create risk. The companies that treat it as a controlled capability will move slower at first, but probably further."
    ]
  },
  {
    "slug": "the-architecture-diagram-is-not-the-architecture",
    "date": "2025-11-07",
    "displayDate": "7 November 2025",
    "title": "The Architecture Diagram Is Not the Architecture",
    "category": "Software Architecture",
    "excerpt": "A diagram can lie.",
    "content": [
      "A diagram can lie.",
      "Not intentionally. But easily.",
      "Boxes look clean. Arrows look simple. Labels look definitive.",
      "Then you inspect the system and find hidden dependencies, manual steps, shared tables, undocumented jobs, batch files, direct database access, retry scripts, and one old service nobody wants to touch.",
      "The diagram was not wrong. It was incomplete.",
      "Architecture is the actual structure and behaviour of the system, not the picture of what people wish it was.",
      "Good diagrams are still valuable. They help people reason, communicate, and align. But they must be treated as living artefacts, not decorations.",
      "A useful architecture diagram should show boundaries, data flow, ownership, failure points, and operational reality.",
      "If the diagram cannot help during an incident, migration, onboarding session, or design review, it may just be technical wallpaper.",
      "Draw the system you have. Then draw the system you want. Do not confuse the two."
    ]
  },
  {
    "slug": "wonder-robots-are-slowly-leaving-the-demo-stage",
    "date": "2025-10-28",
    "displayDate": "28 October 2025",
    "title": "Wonder: Robots Are Slowly Leaving the Demo Stage",
    "category": "Robotics / Technology",
    "excerpt": "Robots have been “almost ready” for a long time.",
    "content": [
      "Robots have been “almost ready” for a long time.",
      "The demos are usually impressive. The real world is less forgiving. Floors are uneven. Lighting changes. Objects move. Humans behave unpredictably. Maintenance matters. Batteries matter. Safety matters.",
      "Still, something is shifting.",
      "Better sensors, better AI models, better simulation, and cheaper hardware are pushing robotics into more practical territory. Warehouses, agriculture, inspection, healthcare support, and manufacturing all have real use cases.",
      "The exciting part is not humanoid robots walking on a stage.",
      "It is robots doing boring, repetitive, physically difficult tasks safely and reliably.",
      "That future is less dramatic than science fiction, but more useful.",
      "The question is not whether robots can impress us in a video. The question is whether they can work every day without creating more problems than they solve.",
      "When that happens, robotics becomes infrastructure."
    ]
  },
  {
    "slug": "cloud-first-should-not-mean-cost-last",
    "date": "2025-10-19",
    "displayDate": "19 October 2025",
    "title": "“Cloud First” Should Not Mean “Cost Last”",
    "category": "Cloud / Architecture",
    "excerpt": "Cloud platforms are powerful.",
    "content": [
      "Cloud platforms are powerful.",
      "They make infrastructure flexible, scalable, and fast to provision. They also make it easy to spend money invisibly.",
      "That is the uncomfortable side of cloud adoption.",
      "A poorly designed system can run. It can scale. It can also produce a bill that nobody expected.",
      "Architecture decisions now need cost awareness from the start.",
      "How much data are we moving?",
      "How often does this function run?",
      "What is retained?",
      "What is duplicated?",
      "What must be real-time?",
      "What can be batch processed?",
      "What can be archived?",
      "Cost is not only a finance concern. It is an architecture concern.",
      "The best cloud systems are not just scalable. They are economically understandable.",
      "A system that works technically but cannot be afforded operationally is not a success."
    ]
  },
  {
    "slug": "ai-search-will-change-how-companies-use-their-own-knowledge",
    "date": "2025-10-10",
    "displayDate": "10 October 2025",
    "title": "AI Search Will Change How Companies Use Their Own Knowledge",
    "category": "AI / Knowledge Management",
    "excerpt": "Most companies already have the answers somewhere.",
    "content": [
      "Most companies already have the answers somewhere.",
      "In emails. PDFs. SharePoint folders. Tickets. Wikis. Spreadsheets. Old project plans. Meeting notes. Source code. Database comments. Vendor contracts.",
      "The problem is finding the right answer at the right time.",
      "AI search may become one of the most useful business applications of this decade.",
      "Not because it is flashy, but because internal knowledge is usually trapped in badly organised places.",
      "A good AI knowledge system could help staff ask practical questions: What is the refund process? Which vendor owns this integration? Has this issue happened before? What changed in the last release?",
      "The risk is trust.",
      "If the AI cannot show sources, dates, and confidence, users should be cautious. Internal search must respect permissions and version history.",
      "Still, the value is obvious.",
      "Companies lose enormous time asking the same questions repeatedly. AI will not fix poor knowledge discipline, but it may finally make the cost visible."
    ]
  },
  {
    "slug": "a-more-honest-view-of-automation",
    "date": "2025-09-30",
    "displayDate": "30 September 2025",
    "title": "A More Honest View of Automation",
    "category": "Business / Technology",
    "excerpt": "Automation is usually sold as a way to save time.",
    "content": [
      "Automation is usually sold as a way to save time.",
      "That is only partly true.",
      "Automation also moves responsibility.",
      "A person used to check a form. Now a system checks it. A person used to send a reminder. Now a workflow sends it. A person used to notice a strange pattern. Now an alert is supposed to catch it.",
      "When automation works, nobody notices.",
      "When it fails, people suddenly ask who was watching.",
      "That means automation needs ownership. Every automated process should have a human owner, monitoring, exception handling, and review.",
      "Otherwise, automation becomes unattended risk.",
      "The best automation removes repetitive work while making exceptions clearer. The worst automation hides problems until they become expensive.",
      "Before automating a process, ask: what happens when the input is wrong, the rule is outdated, the integration fails, or the customer does something unexpected?",
      "Automation is not only about speed. It is about controlled delegation."
    ]
  },
  {
    "slug": "the-next-big-software-skill-may-be-system-editing",
    "date": "2025-09-20",
    "displayDate": "20 September 2025",
    "title": "The Next Big Software Skill May Be System Editing",
    "category": "Prediction / Software",
    "excerpt": "We talk about software development as writing.",
    "content": [
      "We talk about software development as writing.",
      "Writing code. Writing documentation. Writing tests.",
      "But AI may shift a lot of work toward editing.",
      "The first draft of code, design, documentation, emails, test cases, or user stories may come from an AI tool. The human role becomes judgement: cut this, change that, reject this, check that assumption, add the missing constraint.",
      "Editing sounds smaller than creating, but it is not.",
      "A good editor understands purpose, audience, structure, risk, and quality. In software, that means understanding architecture, security, data, operations, and business rules.",
      "The danger is passive acceptance.",
      "If developers accept AI output without deep review, systems will accumulate subtle defects quickly.",
      "The opportunity is faster exploration.",
      "A strong developer can use AI to generate options, then edit aggressively.",
      "The future may reward people who can inspect, challenge, and reshape machine output with precision.",
      "That is not less skill. It is a different concentration of skill."
    ]
  },
  {
    "slug": "event-streams-are-business-history-not-just-technical-plumbing",
    "date": "2025-09-09",
    "displayDate": "9 September 2025",
    "title": "Event Streams Are Business History, Not Just Technical Plumbing",
    "category": "Event-Driven Architecture",
    "excerpt": "An event stream is often treated as infrastructure.",
    "content": [
      "An event stream is often treated as infrastructure.",
      "Topics. Producers. Consumers. Offsets. Retries. Schemas.",
      "That is all necessary.",
      "But the deeper value is history.",
      "An event stream records what happened in the business: order created, payment authorised, refund requested, shipment delayed, user verified, stock adjusted.",
      "If designed well, it becomes a timeline of business facts.",
      "That opens useful possibilities: audit trails, replay, analytics, integration, anomaly detection, and system recovery.",
      "If designed badly, it becomes a pipe full of vague messages nobody trusts.",
      "The naming matters. The schema matters. The ownership matters. The versioning matters. The business meaning matters.",
      "“CustomerUpdated” is rarely enough. What changed? Why? Who initiated it? Is this a correction, a preference change, a compliance update, or a system sync?",
      "Events should be specific enough to be useful later.",
      "Technical plumbing moves data. Business events preserve meaning."
    ]
  },
  {
    "slug": "concern-ai-could-make-bad-decisions-look-more-professional",
    "date": "2025-08-31",
    "displayDate": "31 August 2025",
    "title": "Concern: AI Could Make Bad Decisions Look More Professional",
    "category": "AI / Concern",
    "excerpt": "One uncomfortable thing about AI is how polished it can make weak thinking look.",
    "content": [
      "One uncomfortable thing about AI is how polished it can make weak thinking look.",
      "A poor strategy can become a clean presentation. A vague requirement can become a formal specification. A bad email can become diplomatic. A shallow analysis can become fluent.",
      "That creates risk.",
      "In the past, weak thinking often looked weak. Now it may look formatted, structured, and confident.",
      "This matters in business.",
      "Managers may approve documents that read well but lack substance. Teams may accept generated requirements that do not reflect real constraints. Customers may receive impressive explanations that avoid the actual issue.",
      "AI improves presentation. It does not guarantee correctness.",
      "The practical response is review discipline.",
      "Ask: what evidence supports this? What assumption is hidden? What decision is required? What would make this wrong? Who checked it?",
      "Fluency is not intelligence. Formatting is not truth.",
      "That distinction will matter more every year."
    ]
  },
  {
    "slug": "the-return-of-the-modular-monolith",
    "date": "2025-08-18",
    "displayDate": "18 August 2025",
    "title": "The Return of the Modular Monolith",
    "category": "Software Architecture",
    "excerpt": "The modular monolith is having a quiet comeback.",
    "content": [
      "The modular monolith is having a quiet comeback.",
      "Not because microservices failed. Because teams are becoming more honest about cost.",
      "A modular monolith offers clear internal boundaries without distributed-system overhead. It can enforce domain separation while keeping deployment simpler. It can be a strong starting point for products that have not yet earned microservice complexity.",
      "This matters especially for small and medium teams.",
      "Not every business needs dozens of services, service mesh, distributed tracing, complex CI/CD, and multiple databases. Sometimes what they need is clean modules, disciplined interfaces, good tests, and a database designed properly.",
      "The trick is discipline.",
      "A modular monolith without enforced boundaries becomes a mudball. A modular monolith with clear ownership can be excellent.",
      "The future may not be monolith versus microservices.",
      "It may be staged architecture: start modular, observe pressure, extract only when the boundary proves it needs independence.",
      "That feels less fashionable. It also feels more sensible."
    ]
  },
  {
    "slug": "ai-coding-tools-are-changing-junior-developer-training",
    "date": "2025-08-07",
    "displayDate": "7 August 2025",
    "title": "AI Coding Tools Are Changing Junior Developer Training",
    "category": "Software Development / AI",
    "excerpt": "Junior developers used to learn by struggling through syntax, boilerplate, examples, and bugs.",
    "content": [
      "Junior developers used to learn by struggling through syntax, boilerplate, examples, and bugs.",
      "Now AI can remove some of that struggle.",
      "That is good and bad.",
      "Good, because juniors can move faster, ask more questions, and explore unfamiliar code without waiting for a senior developer to explain every line.",
      "Bad, because some struggle is educational. Debugging teaches cause and effect. Reading documentation teaches precision. Writing code manually teaches structure.",
      "If AI gives the answer too early, learning can become shallow.",
      "The solution is not to ban AI. That would be unrealistic.",
      "The solution is to change training.",
      "Ask juniors to explain generated code. Ask them to write tests. Ask them to identify edge cases. Ask them to compare two implementations. Ask them to debug intentionally broken code.",
      "AI can be a tutor, but only if the learner is forced to think.",
      "Otherwise it becomes autocomplete for ignorance."
    ]
  },
  {
    "slug": "random-advancement-space-technology-is-becoming-more-practical",
    "date": "2025-07-29",
    "displayDate": "29 July 2025",
    "title": "Random Advancement: Space Technology Is Becoming More Practical",
    "category": "Technology / Random Topic",
    "excerpt": "Space used to feel distant from normal business.",
    "content": [
      "Space used to feel distant from normal business.",
      "Interesting, expensive, and mostly government-driven.",
      "That is changing.",
      "Satellite connectivity, earth observation, climate monitoring, logistics data, agriculture intelligence, and disaster response are becoming more practical use cases.",
      "The most interesting part is not the rocket launch. It is the data layer.",
      "Better satellite data can help farmers monitor crops, governments track fires and floods, insurers assess risk, and logistics companies understand movement patterns.",
      "This is where space technology becomes less romantic and more useful.",
      "There are concerns. Surveillance, military use, orbital debris, and unequal access all matter. But the practical upside is real.",
      "Sometimes progress looks like a dramatic launch. Sometimes it looks like better weather data reaching a farmer before the damage is done.",
      "That is still progress."
    ]
  },
  {
    "slug": "we-need-better-words-than-digital-transformation",
    "date": "2025-07-19",
    "displayDate": "19 July 2025",
    "title": "We Need Better Words Than “Digital Transformation”",
    "category": "Business / Technology",
    "excerpt": "“Digital transformation” has become too vague.",
    "content": [
      "“Digital transformation” has become too vague.",
      "It can mean replacing paper forms. It can mean cloud migration. It can mean automation. It can mean analytics. It can mean AI. It can mean a new website. It can mean consultants in a boardroom.",
      "When a phrase means everything, it starts meaning nothing.",
      "Companies should be more specific.",
      "Are we reducing manual capture?",
      "Are we shortening customer turnaround time?",
      "Are we improving reporting accuracy?",
      "Are we exposing APIs?",
      "Are we modernising legacy systems?",
      "Are we reducing operational risk?",
      "Are we enabling new products?",
      "Each goal needs different work.",
      "The danger of broad transformation language is that it hides accountability. Everyone agrees with the slogan, but nobody agrees on the target.",
      "Technology change is hard enough without foggy language.",
      "Say what is changing. Say why. Say who benefits. Say how success will be measured.",
      "Then build."
    ]
  },
  {
    "slug": "the-weird-comfort-of-logs",
    "date": "2025-07-08",
    "displayDate": "8 July 2025",
    "title": "The Weird Comfort of Logs",
    "category": "Technology / Engineering",
    "excerpt": "Logs are not glamorous.",
    "content": [
      "Logs are not glamorous.",
      "They are messy, noisy, repetitive, and often ignored until something breaks.",
      "Then suddenly they become priceless.",
      "A good log line can save hours. A bad log line can waste a day. No log line can turn a simple issue into archaeology.",
      "As systems become more distributed, logging and observability become less optional. You cannot reason about a system you cannot see.",
      "AI may help here too. It can group patterns, summarise incidents, detect anomalies, and explain likely causes. But the raw material still matters.",
      "If the logs are inconsistent, vague, or missing context, AI will only summarise confusion.",
      "Good observability is a design decision. It should be part of development, not an afterthought added during production panic.",
      "The question is simple: when this fails at 02:00, what will we wish we had logged?",
      "Build that in before the failure."
    ]
  },
  {
    "slug": "prediction-the-database-will-become-more-important-not-less",
    "date": "2025-06-30",
    "displayDate": "30 June 2025",
    "title": "Prediction: The Database Will Become More Important, Not Less",
    "category": "Prediction / Data",
    "excerpt": "Every few years, someone declares the database less important.",
    "content": [
      "Every few years, someone declares the database less important.",
      "The application layer gets smarter. The cache gets faster. The search engine gets richer. The AI layer gets more capable.",
      "Yet the database remains the place where truth eventually has to live.",
      "AI may actually make databases more important.",
      "When systems generate more actions, summaries, classifications, recommendations, and automations, the need for trustworthy data increases. You need lineage. You need constraints. You need transaction history. You need auditability. You need to know what changed and why.",
      "Loose data produces loose intelligence.",
      "This does not mean every rule belongs in the database. It means core business truth must be protected somewhere reliable.",
      "Modern systems may use event streams, document stores, caches, vector databases, and APIs. Fine. Use the right tool.",
      "But do not confuse data movement with data integrity.",
      "The future still needs a source of truth."
    ]
  },
  {
    "slug": "ai-in-support-desks-useful-but-dont-let-it-hide-bad-service",
    "date": "2025-06-16",
    "displayDate": "16 June 2025",
    "title": "AI in Support Desks: Useful, But Don’t Let It Hide Bad Service",
    "category": "AI / Business",
    "excerpt": "Support desks are a natural place for AI.",
    "content": [
      "Support desks are a natural place for AI.",
      "Tickets are text-heavy. Users repeat issues. Knowledge bases exist. Classification matters. Response time matters.",
      "AI can help.",
      "It can summarise tickets, detect urgency, suggest replies, group similar incidents, identify missing information, and route work to the right team.",
      "But there is a bad version of this future.",
      "Companies may use AI to create the appearance of responsiveness while solving nothing faster. Customers receive polished replies, but no actual resolution. Support agents get more dashboards, but not more authority. Management sees better metrics, but users still wait.",
      "AI should reduce friction, not disguise it.",
      "The best support AI will help humans understand and solve problems faster. It should not become a layer of polite delay.",
      "Measure resolution quality, not just response speed.",
      "A fast answer is not the same as help."
    ]
  },
  {
    "slug": "the-best-software-still-starts-with-a-boring-question",
    "date": "2025-06-06",
    "displayDate": "6 June 2025",
    "title": "The Best Software Still Starts With a Boring Question",
    "category": "Software Development",
    "excerpt": "Before frameworks, cloud platforms, AI models, queues, APIs, dashboards, or databases, there is one boring question:",
    "content": [
      "Before frameworks, cloud platforms, AI models, queues, APIs, dashboards, or databases, there is one boring question:",
      "What problem are we solving?",
      "Teams skip this question because it feels obvious.",
      "It usually is not.",
      "One person thinks the goal is speed. Another thinks it is control. Another thinks it is cost reduction. Another thinks it is reporting. Another thinks it is compliance.",
      "Then the team builds a system that tries to satisfy all of them badly.",
      "The best technical decisions come after the problem is made explicit.",
      "If the problem is reliability, architecture changes.",
      "If the problem is auditability, data design changes.",
      "If the problem is speed to market, scope changes.",
      "If the problem is team ownership, boundaries change.",
      "Technology choices should follow the problem, not lead it.",
      "This sounds basic because it is. But basic mistakes are still the expensive ones."
    ]
  },
  {
    "slug": "hopeful-thought-ai-might-help-smaller-teams-compete",
    "date": "2025-05-27",
    "displayDate": "27 May 2025",
    "title": "Hopeful Thought: AI Might Help Smaller Teams Compete",
    "category": "AI / Optimism",
    "excerpt": "Large companies have money, staff, infrastructure, legal teams, procurement departments, and brand trust.",
    "content": [
      "Large companies have money, staff, infrastructure, legal teams, procurement departments, and brand trust.",
      "Small teams usually have speed.",
      "AI may increase that speed.",
      "A small team can now draft copy, prototype interfaces, analyse logs, generate test cases, explore code, build internal tools, and produce documentation faster than before.",
      "That does not mean a two-person company can magically outbuild an enterprise. But it does mean some work that previously required five specialists may now be possible with two skilled generalists and good judgement.",
      "This could matter.",
      "It may help small businesses automate admin. It may help local companies build better digital services. It may help independent developers create products that would have been unrealistic a few years ago.",
      "There is still danger. Bad AI output can create legal, technical, and security problems. But used carefully, AI may reduce the distance between idea and execution.",
      "That is worth being hopeful about."
    ]
  },
  {
    "slug": "architecture-decisions-need-receipts",
    "date": "2025-05-18",
    "displayDate": "18 May 2025",
    "title": "Architecture Decisions Need Receipts",
    "category": "Software Architecture / Process",
    "excerpt": "Every system has architecture decisions.",
    "content": [
      "Every system has architecture decisions.",
      "Some are written down. Most are buried in chats, meetings, old tickets, and one person’s memory.",
      "That is a problem.",
      "Six months later, someone asks why a service exists, why a queue was used, why a table has that strange column, or why a process cannot be changed quickly.",
      "Nobody remembers clearly.",
      "Architecture decision records are not glamorous, but they are useful. They do not need to be long. A good decision note can be one page: context, options considered, decision, consequences, and review date.",
      "AI may make this easier by summarising discussions and drafting decision records. But the team still needs to confirm the reasoning.",
      "The goal is not bureaucracy. The goal is memory.",
      "A system without decision history becomes harder to change because nobody knows which constraints are real and which are ghosts.",
      "Good architecture is not only structure. It is recorded reasoning."
    ]
  },
  {
    "slug": "ai-agents-are-interesting-production-agents-are-hard",
    "date": "2025-05-09",
    "displayDate": "9 May 2025",
    "title": "AI Agents Are Interesting. Production Agents Are Hard.",
    "category": "AI / Systems",
    "excerpt": "The idea of AI agents is attractive.",
    "content": [
      "The idea of AI agents is attractive.",
      "Give an AI a goal. Let it plan. Let it use tools. Let it complete work.",
      "In demos, this looks impressive. In production, it becomes complicated quickly.",
      "What tools may the agent use?",
      "What data may it access?",
      "Can it spend money?",
      "Can it email customers?",
      "Can it update records?",
      "Can it delete anything?",
      "What happens when it misunderstands the task?",
      "The moment an AI can act, not just answer, the risk profile changes.",
      "A chatbot can be wrong in text. An agent can be wrong in the database.",
      "That does not make agents a bad idea. It means they need proper control design. Permissions, approval steps, sandboxing, audit logs, rollback mechanisms, and human review are not optional.",
      "The first useful business agents will probably not be fully autonomous. They will be constrained workers inside narrow workflows.",
      "Less science fiction. More reliable assistant.",
      "That is where the value will start."
    ]
  },
  {
    "slug": "the-next-interface-might-not-be-a-screen",
    "date": "2025-04-29",
    "displayDate": "29 April 2025",
    "title": "The Next Interface Might Not Be a Screen",
    "category": "Prediction / Technology",
    "excerpt": "For decades, software has mostly meant screens.",
    "content": [
      "For decades, software has mostly meant screens.",
      "Forms. Buttons. Tables. Dashboards. Menus.",
      "AI is starting to challenge that.",
      "More users now expect to type or speak intent: “Show me the delayed orders,” “Summarise the customer issue,” “Create a support ticket,” “Compare this month with last month.”",
      "That does not mean screens disappear. They probably become more focused.",
      "The interface may become a conversation first, with screens used for confirmation, review, exception handling, and visual exploration.",
      "This is both exciting and risky.",
      "Screens force structure. They show fields, constraints, and available actions. Conversational interfaces can hide complexity too well. A user may not understand what the system did, what data it used, or what assumptions it made.",
      "The next generation of interfaces should not simply be chat boxes glued onto old systems.",
      "They need transparency. They need audit trails. They need reversible actions. They need permission boundaries.",
      "The future interface may be less about clicking and more about intent. But intent still needs control."
    ]
  },
  {
    "slug": "microservices-did-not-remove-complexity-they-moved-it",
    "date": "2025-04-17",
    "displayDate": "17 April 2025",
    "title": "Microservices Did Not Remove Complexity. They Moved It.",
    "category": "Software Architecture",
    "excerpt": "Microservices are often sold as simplification.",
    "content": [
      "Microservices are often sold as simplification.",
      "Small services. Clear ownership. Independent deployments. Better scaling.",
      "That can be true.",
      "But microservices do not remove complexity. They move it from code boundaries into system boundaries.",
      "Instead of one process call, you now have network calls. Instead of one transaction, you may have eventual consistency. Instead of one deployment, you may have many. Instead of one log file, you may have distributed tracing.",
      "This is not a criticism of microservices. It is a warning against naive adoption.",
      "Microservices work best when the organisation has strong DevOps, observability, automated testing, deployment pipelines, service ownership, and domain discipline.",
      "Without that, the architecture becomes a distributed monolith: all the pain of microservices, none of the independence.",
      "The better path is usually evolutionary.",
      "Start with clear modules. Identify real scaling or ownership pressure. Extract services when the boundary earns its independence.",
      "Do not split because a diagram looks modern.",
      "Split because the business, team, and operational model can support the split."
    ]
  },
  {
    "slug": "the-ai-hype-cycle-is-annoying-but-not-empty",
    "date": "2025-04-08",
    "displayDate": "8 April 2025",
    "title": "The AI Hype Cycle Is Annoying, But Not Empty",
    "category": "AI / Opinion",
    "excerpt": "The hype is irritating.",
    "content": [
      "The hype is irritating.",
      "Every product is “AI-powered.” Every vendor claims transformation. Every pitch deck uses the same language: agents, copilots, automation, intelligence, productivity.",
      "It is easy to become cynical.",
      "But dismissing the whole thing would be lazy.",
      "Under the marketing noise, real change is happening. Developers are using AI to move faster. Support teams are testing AI triage. Businesses are summarising documents, classifying emails, generating reports, and searching internal knowledge in new ways.",
      "The hype is inflated. The usefulness is real.",
      "That makes this phase difficult. We need skepticism without becoming blind. We need optimism without becoming gullible.",
      "A practical rule: ignore the label and inspect the workflow.",
      "Does the AI reduce actual work?",
      "Does it improve decision quality?",
      "Can the result be checked?",
      "Does it protect sensitive information?",
      "Does it fail safely?",
      "If yes, it may be useful. If not, it is probably theatre."
    ]
  },
  {
    "slug": "random-advancement-lab-grown-materials-deserve-more-attention",
    "date": "2025-03-30",
    "displayDate": "30 March 2025",
    "title": "Random Advancement: Lab-Grown Materials Deserve More Attention",
    "category": "Technology / Random Topic",
    "excerpt": "AI gets most of the headlines, but materials science may quietly reshape the physical world.",
    "content": [
      "AI gets most of the headlines, but materials science may quietly reshape the physical world.",
      "New materials can change batteries, medical devices, construction, computing, clothing, and manufacturing. A small improvement in durability, conductivity, insulation, or biodegradability can ripple through entire industries.",
      "It is less glamorous than a chatbot. It is also more tangible.",
      "Software people sometimes forget that the world still runs on atoms. Screens, chips, cables, batteries, data centres, vehicles, medical tools, farming equipment — all of it depends on physical materials.",
      "The interesting part is that AI may accelerate this too. Better simulation, faster candidate screening, and automated lab workflows could shorten discovery cycles.",
      "That creates a strange loop: software improves material discovery, and better materials improve computing infrastructure.",
      "Not every breakthrough will become a product. Most will not. But this is one of the areas where progress still feels almost science-fictional.",
      "The future is not only digital. Sometimes it is a better battery separator, a lighter composite, or a coating that lasts twice as long."
    ]
  },
  {
    "slug": "rag-is-useful-but-it-is-not-magic",
    "date": "2025-03-21",
    "displayDate": "21 March 2025",
    "title": "RAG Is Useful, But It Is Not Magic",
    "category": "AI / Information Systems",
    "excerpt": "Retrieval-augmented generation sounds like the solution to AI hallucination.",
    "content": [
      "Retrieval-augmented generation sounds like the solution to AI hallucination.",
      "Connect the model to your documents. Ask questions. Get grounded answers.",
      "Useful, yes. Magic, no.",
      "RAG systems still fail in very ordinary ways. They retrieve the wrong document. They retrieve the right document but the wrong section. They miss context from another system. They over-trust outdated content. They summarise conflicting documents as if there is no conflict.",
      "The hardest part of RAG is not the model. It is the information estate.",
      "Are documents current?",
      "Are permissions correct?",
      "Are naming conventions sane?",
      "Are versions controlled?",
      "Are business rules written down?",
      "Are exceptions captured?",
      "Most companies do not have an AI problem. They have a knowledge management problem that AI exposes.",
      "RAG can be excellent when it is built on clean, governed, structured information. When it is built on years of document clutter, it becomes a confident search assistant with a memory problem.",
      "Still worth building. Just not worth worshipping."
    ]
  },
  {
    "slug": "software-development-is-becoming-more-like-supervision-than-typing",
    "date": "2025-03-12",
    "displayDate": "12 March 2025",
    "title": "Software Development Is Becoming More Like Supervision Than Typing",
    "category": "AI / Software Development",
    "excerpt": "A developer’s job is changing.",
    "content": [
      "A developer’s job is changing.",
      "Not disappearing. Changing.",
      "More code can now be generated quickly. More boilerplate can be skipped. More examples can be produced in seconds. That does not remove the developer. It changes where the developer’s attention goes.",
      "The work shifts toward supervision.",
      "Is the requirement correct?",
      "Is the generated code safe?",
      "Does it fit the existing architecture?",
      "Does it handle failure?",
      "Does it expose data incorrectly?",
      "Does it create a maintenance problem six months from now?",
      "The typing was never the highest-value part of software development. It only looked that way because typing was visible.",
      "The real work is judgement.",
      "AI will make weak developers faster at creating weak systems. It will make strong developers faster at exploring options. The gap may widen, not shrink.",
      "The future developer may write less code manually, but they will need sharper architecture, testing, security, and debugging instincts.",
      "The keyboard is becoming less important. The review brain is becoming more important."
    ]
  },
  {
    "slug": "the-most-underrated-ai-skill-is-asking-smaller-questions",
    "date": "2025-02-28",
    "displayDate": "28 February 2025",
    "title": "The Most Underrated AI Skill Is Asking Smaller Questions",
    "category": "AI / Practical",
    "excerpt": "People often ask AI tools massive questions.",
    "content": [
      "People often ask AI tools massive questions.",
      "“Build me a business strategy.”",
      "“Explain this entire system.”",
      "“Write the full specification.”",
      "“Analyse this company.”",
      "The results can be impressive, but also vague.",
      "A better pattern is emerging: smaller questions, better context, tighter review.",
      "Instead of asking AI to design the whole system, ask it to challenge one assumption. Instead of asking it to write the whole policy, ask it to identify missing clauses. Instead of asking it to explain all the logs, ask it to group unusual errors from the last hour.",
      "AI performs better when the task has boundaries.",
      "This is not a weakness. It is how most human experts work too. Good thinking is rarely one giant answer. It is a sequence of smaller, checked steps.",
      "The best AI users in 2025 will not be the people who type the longest prompts. They will be the people who know how to break problems into useful pieces."
    ]
  },
  {
    "slug": "event-driven-systems-feel-simple-until-you-have-to-explain-time",
    "date": "2025-02-19",
    "displayDate": "19 February 2025",
    "title": "Event-Driven Systems Feel Simple Until You Have to Explain Time",
    "category": "Software Architecture",
    "excerpt": "Event-driven architecture sounds elegant.",
    "content": [
      "Event-driven architecture sounds elegant.",
      "Something happens. An event is published. Other systems react.",
      "Clean.",
      "Then reality arrives.",
      "Events are delayed. Consumers fail. Messages are duplicated. Ordering becomes unclear. A customer changes something twice in two seconds. A downstream system receives event two before event one. Someone asks why the report does not match the transaction screen.",
      "Suddenly, the architecture conversation becomes a conversation about time.",
      "What happened?",
      "When did it happen?",
      "When did we know it happened?",
      "When did each system process it?",
      "What state is considered true?",
      "Event-driven architecture is powerful because it allows systems to decouple and scale. But it also forces teams to become precise about state, sequencing, idempotency, replay, and auditability.",
      "That is where many projects fail.",
      "They adopt events as a technical pattern, but not as a business truth model.",
      "An event should not just be a message. It should be a fact the business understands.",
      "If the business cannot explain the event, the system probably should not depend on it yet."
    ]
  },
  {
    "slug": "the-quiet-problem-with-ai-assistants-nobody-knows-who-owns-the-answer",
    "date": "2025-02-10",
    "displayDate": "10 February 2025",
    "title": "The Quiet Problem With AI Assistants: Nobody Knows Who Owns the Answer",
    "category": "AI / Governance",
    "excerpt": "AI assistants are entering businesses faster than policies can catch up.",
    "content": [
      "AI assistants are entering businesses faster than policies can catch up.",
      "A user asks a question. The AI gives an answer. The answer sounds reasonable. Someone acts on it.",
      "Then something goes wrong.",
      "Who owns the mistake?",
      "The user? The AI vendor? The company that configured the assistant? The team that connected it to internal documents? The person who uploaded outdated procedures? The developer who wrote the retrieval logic?",
      "This is not a theoretical concern. It is one of the central governance problems of AI in business.",
      "Traditional software gives us clear ownership. A rule was coded. A calculation was implemented. A workflow was approved. A report was built from known tables.",
      "AI blurs that line.",
      "It combines model behaviour, prompt design, retrieved data, system instructions, user input, and probability. That does not mean it is unusable. It means companies need a new operating model.",
      "For internal AI systems, every answer should have three things: source traceability, confidence boundaries, and escalation paths.",
      "Without those, AI does not remove risk. It spreads it."
    ]
  },
  {
    "slug": "a-small-prediction-ai-will-make-documentation-valuable-again",
    "date": "2025-01-31",
    "displayDate": "31 January 2025",
    "title": "A Small Prediction: AI Will Make Documentation Valuable Again",
    "category": "Prediction",
    "excerpt": "Documentation has always been one of the most disliked parts of software development.",
    "content": [
      "Documentation has always been one of the most disliked parts of software development.",
      "Not because it is useless. Because it goes stale.",
      "Developers write it after the real work is done. Business users rarely read it. New team members do not trust it. Eventually, everyone asks the one senior developer who “just knows how it works.”",
      "AI may change this.",
      "Not by magically fixing discipline, but by lowering the cost of keeping knowledge usable.",
      "Imagine documentation that is partly generated from code, commits, tickets, database schemas, API contracts, incidents, and architecture decision records. Imagine asking a system, “Why does this process work this way?” and getting an answer linked back to the original decision, the current code, and the relevant support cases.",
      "That would be a serious shift.",
      "But there is a catch. AI cannot document what a team never decided clearly. It cannot infer intent reliably from chaos. It can summarise mess, but it cannot turn bad process into good architecture.",
      "My prediction: teams with decent discipline will get a huge documentation advantage from AI. Teams without discipline will generate more words, not more clarity."
    ]
  },
  {
    "slug": "the-monolith-is-not-dead-bad-monoliths-are",
    "date": "2025-01-27",
    "displayDate": "27 January 2025",
    "title": "The Monolith Is Not Dead. Bad Monoliths Are.",
    "category": "Software Architecture",
    "excerpt": "Every few years, architecture fashion turns a word into an insult.",
    "content": [
      "Every few years, architecture fashion turns a word into an insult.",
      "For a while, that word was monolith.",
      "The story was simple: monoliths are old, microservices are modern, and anyone serious about scale should break everything apart.",
      "Reality is less clean.",
      "A well-designed modular monolith can be easier to build, easier to test, easier to deploy, and cheaper to run than a badly split microservice estate. The real problem is not that the system is deployed as one unit. The problem is when the codebase has no boundaries, no ownership, no discipline, and no internal structure.",
      "That is not a monolith problem. That is an architecture problem.",
      "Microservices solve certain problems well: independent scaling, team autonomy, isolated deployment, resilience boundaries, and domain separation. But they also introduce distributed failure, network complexity, data consistency problems, monitoring overhead, and operational cost.",
      "In 2025, the mature conversation should not be “monolith or microservices?”",
      "It should be: what is the business domain, what is the team structure, what are the failure modes, and what level of complexity can the organisation actually operate?",
      "Architecture is not a religion. It is a trade-off ledger."
    ]
  },
  {
    "slug": "ai-is-no-longer-a-feature-it-is-becoming-infrastructure",
    "date": "2025-01-15",
    "displayDate": "15 January 2025",
    "title": "AI Is No Longer a Feature. It Is Becoming Infrastructure.",
    "category": "AI / Opinion",
    "excerpt": "There was a time when software teams asked, “Should we add AI?” That question already feels dated.",
    "content": [
      "There was a time when software teams asked, “Should we add AI?” That question already feels dated.",
      "The better question now is: where should AI sit in the system?",
      "For years, AI was treated like a smart add-on. A chatbot here. A recommendation engine there. A bit of automation in the background. Useful, but not central.",
      "That is changing.",
      "AI is starting to behave more like infrastructure. It supports search. It assists support teams. It helps write code. It analyses logs. It reads documents. It explains data. It sits between users and systems and starts translating intent into action.",
      "That is exciting, but also uncomfortable.",
      "Infrastructure must be reliable. It must be observable. It must fail safely. Most AI systems are not there yet. They are powerful, but still unpredictable. They produce convincing answers before they produce correct ones.",
      "The opportunity is massive. So is the engineering responsibility.",
      "The next phase of AI adoption will not be about who adds the flashiest chatbot. It will be about who can make AI boring, dependable, governed, monitored, and useful every day.",
      "That is when it becomes real infrastructure."
    ]
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function readingTime(post: Post): number {
  const words = post.content.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function categoryGroup(category: string): string {
  const c = category.toLowerCase();
  if (/\bai\b/.test(c)) return "AI";
  if (c.includes("architecture") || c.includes("cloud")) return "Architecture";
  if (c.includes("development") || c.includes("engineering") || c.includes("devops") || c.includes("software")) return "Engineering";
  if (c.includes("prediction")) return "Predictions";
  if (c.includes("business")) return "Business";
  return "Technology";
}
