// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: ".",
  modules: ["@nuxtjs/tailwindcss"],
  css: [resolve("./assets/styles/main.css")],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@": resolve("."),
    "~": resolve("."),
  },
  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  app: {
    baseURL,
    head: {
      title: "Jommar Ilagan · Portfolio",
      titleTemplate: "%s · Jommar Ilagan",
      meta: [
        {
          name: "description",
          content:
            "Portfolio site for Jommar Ilagan showcasing health-tech and developer projects that use AI as a supporting tool.",
        },
        { name: "theme-color", content: "#04050c" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Jommar Ilagan Portfolio" },
        {
          property: "og:title",
          content: "Jommar Ilagan · Product-focused engineer",
        },
        {
          property: "og:description",
          content:
            "Nuxt + Tailwind portfolio featuring clinic management, developer productivity work, and projects that use AI as an amplifier.",
        },
      ],
    },
  },
});
