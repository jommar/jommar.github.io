import type { Profile } from "~/types/profile"

export const profile: Profile = {
  name: "Jommar Ilagan",
  title: "Full Stack Developer",
  tagline: "Full Stack Developer · AI Agent Infrastructure",
  location: "Manila, Philippines 1016",
  email: "jommar.ilagan@gmail.com",
  phone: "+639228868650",
  linkedin: "https://www.linkedin.com/in/jommarilagan/",
  github: "https://github.com/jommar",
  cvUrl: "/cv/jvi_cv.pdf",
  metrics: [
    { value: "10+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "Full-Stack", label: "End-to-End Dev" },
  ],
  summary:
    "Experienced Full Stack Developer with 10+ years of expertise in leading development teams, optimizing full-stack applications, and driving successful API integrations. Currently focused on AI agent infrastructure — designing agent orchestration systems, configuring AI tooling, and bridging the gap between traditional software engineering and AI-powered development workflows.",

  valueProps: [
    {
      title: "10+ Years Full-Stack",
      description:
        "End-to-end application development across Vue, Nuxt, Node.js, and relational databases. Proven track record of leading teams and delivering production-grade software.",
      icon: "Code2",
    },
    {
      title: "AI Agent Architecture",
      description:
        "Designed commercial-grade AI agent orchestration systems using orchestrator/subagent/delegation patterns. Deep knowledge of Claude Code, Opencode, Hermes, Agent Zero, LangChain, CrewAI, and OpenAI Agents SDK.",
      icon: "Cpu",
    },
    {
      title: "AI Tooling Mastery",
      description:
        "Expert in configuring opencode, Claude Code, and MCP servers. Built custom subagents, skills, guardrails, and ported agent ecosystems across toolchains.",
      icon: "Bot",
    },
  ],

  capabilities: [
    {
      title: "AI Agent Orchestration",
      description:
        "Designed delegation-first agent harnesses with orchestrator/subagent patterns, stateful graph execution, memory systems, and human-in-the-loop approval flows.",
      icon: "Network",
    },
    {
      title: "AI Research & Analysis",
      description:
        "Deep-dive competitive analysis of Wayland, LangChain/LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, MCP protocols, and agent runtime architectures.",
      icon: "Search",
    },
    {
      title: "Agent Configuration",
      description:
        "Custom setups across Claude Code, Opencode, Hermes, and Agent Zero with multi-project subagents, skills, guardrails, and tool permissions. Ported .claude agents to .opencode ecosystem.",
      icon: "Settings2",
    },
    {
      title: "Full-Stack Development",
      description:
        "Vue/Nuxt frontends, Node.js/Express APIs, Knex/MySQL/MS SQL databases, AWS Lambda serverless, FHIR API integration, and legacy system modernization.",
      icon: "LayoutDashboard",
    },
  ],

  techStack: [
    {
      label: "Languages",
      items: ["JavaScript", "TypeScript", "PHP", "SQL"],
    },
    {
      label: "Frameworks",
      items: ["Vue.js", "Nuxt", "Node.js", "Express", "Knex"],
    },
    {
      label: "AI Agents",
      items: ["Claude Code", "Opencode", "Hermes", "Agent Zero"],
    },
    {
      label: "LLM Providers",
      items: ["OpenRouter", "DeepSeek", "Anthropic", "OpenAI"],
    },
    {
      label: "Tools",
      items: ["Git", "Docker", "AWS Lambda", "Postman", "Cypress"],
    },
    {
      label: "Databases",
      items: ["MySQL", "MS SQL", "Redis", "PostgreSQL"],
    },
  ],

  workHighlights: [
    {
      title: "AI Agent Harness",
      role: "Product Designer & Architect",
      period: "2026",
      description:
        "Designed a commercial AI agent orchestration platform with delegation-first architecture. Defined product vision, feature specs, technical architecture, security model, and MVP roadmap.",
      tags: ["Agent Orchestration", "System Design", "Product Docs"],
    },
    {
      title: "AI Tool Ecosystem Porting",
      role: "AI Tooling Engineer",
      period: "2026",
      description:
        "Ported Claude Code agents and skills to opencode with multi-project support. Built backend/frontend coders, code reviewers, and security audit subagents with project detection and guardrails.",
      tags: ["Opencode", "Claude Code", "Agent Config"],
    },
    {
      title: "FHIR API Integration",
      role: "Full Stack Developer",
      period: "2022-2023",
      description:
        "Led FHIR API integration at Rendition Digital, ensuring seamless healthcare data exchange between systems. Designed scalable APIs and coordinated large-scale deployments.",
      tags: ["FHIR", "API Design", "Healthcare"],
    },
  ],

  experience: [
    {
      company: "CoDev",
      role: "Full Stack Developer",
      period: "2023 — Present",
      highlights: [
        "Spearhead development and optimization of robust full-stack applications ensuring high performance and scalability",
        "Lead cross-functional teams to deliver quality software, driving codebase refactoring for improved maintainability and performance",
      ],
    },
    {
      company: "Rendition Digital Inc.",
      role: "Full Stack Developer",
      period: "2022 — 2023",
      highlights: [
        "Led integration and implementation of FHIR APIs ensuring seamless communication between healthcare systems",
        "Collaborated with back-end teams to design and develop scalable APIs, coordinating successful large-scale deployments",
      ],
    },
    {
      company: "UERM",
      role: "Senior Programmer",
      period: "2012 — 2022",
      highlights: [
        "Led end-to-end design and development of scalable applications, ensuring code quality through fixes and enhancements",
        "Partnered closely with clients to understand requirements, translating them into technical solutions while optimizing relational databases",
      ],
    },
  ],
}
