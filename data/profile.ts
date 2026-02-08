import type { Profile } from "~/types/profile";

export const profile: Profile = {
  name: "Jommar Ilagan",
  title: "Full-stack engineer crafting health-tech and AI tooling",
  summary:
    "I build resilient workflows for hospitals, universities, and AI teams—shipping opinionated tooling that keeps operations measurable, auditable, and fast.",
  availability:
    "Open to product engineering and technical advisory opportunities.",
  focusAreas: [
    "Health-tech platforms",
    "AI + MCP tooling",
    "Developer experience",
    "Automation strategy",
  ],
  stats: [
    {
      label: "Active repositories",
      value: "32",
      detail: "Hands-on ownership across web, mobile, and backend codebases.",
    },
    {
      label: "Contributions (12 mo)",
      value: "113",
      detail: "Recent commits across various projects.",
    },
    {
      label: "Years shipping products",
      value: "12+",
      detail: "From hospital systems to modern AI readiness pipelines.",
    },
    {
      label: "Current focus",
      value: "Preflight MCP",
      detail:
        "AI-first server that keeps large language models production ready.",
    },
  ],
  experiences: [
    {
      period: "2025–Present",
      role: "Creator (Side Project)",
      org: "Preflight MCP Server",
      impact:
        "Built as a self-initiated side project to keep pace with rapidly evolving AI agent ecosystems. Focused on experimenting with MCP patterns, schema contracts, and safety-first tool boundaries that let AI agents inspect context before taking real actions.",
      tags: ["Node.js", "MCP", "AI Safety", "AI Tooling"],
    },
    {
      period: "2023–Present",
      role: "Senior / Lead Full-Stack Developer",
      org: "CoDev",
      impact:
        "Leading backend-centric development for large-scale transportation and routing systems, driving performance improvements, approval workflows, audit logging, and database optimizations while guiding team standards and architecture decisions.",
      tags: ["Node.js", "Vue", "Knex", "MySQL", "System Design"],
    },
    {
      period: "2022–2023",
      role: "Senior Full-Stack Developer",
      org: "Rendition Digital (Wellola)",
      impact:
        "Developed clinician-facing applications using serverless Node.js and Nuxt, integrating FHIR APIs to enable secure healthcare data exchange and support real-world clinical workflows.",
      tags: ["Node.js", "Nuxt", "FHIR", "Healthcare", "AWS Lambda"],
    },
    {
      period: "2012–2022",
      role: "Full-Stack Developer",
      org: "UERM (University & Hospital)",
      impact:
        "Delivered and maintained core internal systems including EHR, HR, laboratory, and academic platforms, modernizing hospital and university operations used daily by staff and clinicians.",
      tags: ["PHP", "Node.js", "Vue", "Healthcare Systems"],
    },
  ],
  projects: [
    {
      name: "Preflight MCP",
      description:
        "Modular MCP server that keeps AI experiences safe via shared services, validators, and predictable envelopes.",
      tech: ["Node.js", "MCP", "Zod"],
      repo: "https://github.com/jommar/preflight-mcp",
      highlights: [
        "Unified controller + service pattern for both MCP tools and HTTP routes.",
        "Zod-backed schemas that prevent unvetted payloads from reaching adapters.",
        "Operational checklist so AI clients can self-inspect before invoking critical actions.",
      ],
      status: "in-progress",
    },
    {
      name: "Quiz Maker",
      description:
        "Nuxt/Vue workspace for crafting quizzes with real-time previews, import/export, and tailored UI elements.",
      tech: ["Nuxt 3", "Vue", "TypeScript"],
      repo: "https://github.com/jommar/quiz-maker-vue",
      highlights: [
        "Composable question editor with keyboard-only workflow.",
        "Server endpoints that merge imported quizzes safely.",
        "Toast-driven feedback loop for graders and authors.",
      ],
      status: "shipped",
    },
    {
      name: "Clinic Management System",
      description:
        "Legacy web app orchestrating patient intake, queueing, and physician scheduling for a neighborhood clinic.",
      tech: ["Web", "Operations", "Analytics"],
      repo: "https://github.com/jommar/clinic-management",
      highlights: [
        "Centralized charting and inventory metrics so staff can move in sync.",
        "Printable billing artifacts that shorten patient checkout time.",
        "Role-aware access controls to keep sensitive data segmented.",
      ],
      status: "shipped",
    },
    {
      name: "Email API",
      description:
        "Express-based service that standardizes admission and triage notifications for university hospitals.",
      tech: ["Node.js", "Express", "Nodemailer"],
      repo: "https://github.com/jommar/uerm-email-api--node",
      highlights: [
        "Rendered transactional templates with environment-aware branding.",
        "Queue-aware sending so sudden spikes never block urgent updates.",
        "Structured logging that feeds into campus dashboards.",
      ],
      status: "shipped",
    },
  ],
  activity: [
    "Feb 2026 · 10 commits landed on Preflight MCP to harden MCP tool registration.",
    "Feb 2026 · 2 commits to LLM Doc, documenting envelope contracts for AI clients.",
    "2025 · Continued feature work on Quiz Maker Vue after user import feedback.",
    "2018–Present · Maintaining legacy clinic/education systems used by Manila partners.",
  ],
  contact: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jommarilagan/",
      icon: "mdi-linkedin",
      caption: "Message me for collaborations or a deep-dive on these builds.",
    },
    {
      label: "GitHub",
      href: "https://github.com/jommar",
      icon: "mdi-github",
      caption: "Follow the work, open issues, or review active RFCs.",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jommarilagan/",
      icon: "mdi-linkedin",
      caption: "linkedin.com/in/jommarilagan",
    },
    {
      label: "GitHub",
      href: "https://github.com/jommar",
      icon: "mdi-github",
      caption: "github.com/jommar",
    },
  ],
};
