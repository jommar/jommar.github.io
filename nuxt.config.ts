export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: ".",
  css: ["~/assets/styles/main.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/robots.txt", "/llms.txt"],
    },
  },
  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        class: "dark",
      },
      title: "Jommar Ilagan · Full Stack Developer & AI Agent Infrastructure",
      titleTemplate: "%s · Jommar Ilagan",
      meta: [
        {
          name: "description",
          content:
            "Full Stack Developer with 10+ years of expertise in full-stack applications, AI agent infrastructure, and API integrations.",
        },
        { name: "theme-color", content: "#030712" },
        { name: "color-scheme", content: "dark light" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Jommar Ilagan" },
        {
          property: "og:title",
          content: "Jommar Ilagan · Full Stack Developer & AI Agent Infrastructure",
        },
        {
          property: "og:description",
          content:
            "Full Stack Developer with 10+ years of expertise in full-stack applications, AI agent infrastructure, and API integrations.",
        },
        { property: "og:image", content: "/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Jommar Ilagan · Full Stack Developer & AI Agent Infrastructure" },
        {
          name: "twitter:description",
          content:
            "Full Stack Developer with 10+ years of expertise in full-stack applications, AI agent infrastructure, and API integrations.",
        },
      ],
      script: [
        {
          children:
            "(function(){var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}})()",
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jommar Ilagan",
            givenName: "Jommar",
            familyName: "Ilagan",
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer with 10+ years of expertise in full-stack applications, AI agent infrastructure, and API integrations.",
            knowsAbout: [
              "AI Agent Infrastructure",
              "Agent Orchestration",
              "Claude Code",
              "Opencode",
              "Hermes",
              "Agent Zero",
              "OpenRouter",
              "DeepSeek",
              "Vue.js",
              "Nuxt",
              "Node.js",
              "Express",
              "Knex",
              "MySQL",
              "MS SQL",
              "AWS Lambda",
              "FHIR API",
              "TypeScript",
              "JavaScript",
              "PHP",
            ],
            worksFor: [
              { "@type": "Organization", name: "CoDev" },
              { "@type": "Organization", name: "Rendition Digital Inc." },
              { "@type": "Organization", name: "UERM" },
            ],
            sameAs: [
              "https://github.com/jommar",
              "https://www.linkedin.com/in/jommarilagan/",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Manila",
              addressCountry: "PH",
            },
            email: "jommar.ilagan@gmail.com",
          }),
        },
      ],
    },
  },
})
