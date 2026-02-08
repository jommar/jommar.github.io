# Jommar Ilagan · Portfolio

A Nuxt 3 + TypeScript portfolio styled with Tailwind CSS. It highlights health-tech and AI developer tooling work referenced from Jommar's GitHub profile (`jommar`) and LinkedIn presence.

## Features

- **Tailwind glassmorphism shell** – custom gradients, blur surfaces, and expressive typography.
- **Structured data model** – central `data/profile.ts` + `types/profile.ts` keeps hero, experience, and project content consistent.
- **Sections** – hero/CTA board, timeline of repositories, project case studies, and live activity/contact cards.
- **Accessible navigation** – sticky app bar with anchor links and responsive menu.

## Getting Started

Install dependencies (Node 20+ recommended):

```bash
nvm use          # loads the version defined in .nvmrc
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000 to preview changes. Hot-module reload is enabled by default.

### Production Build

```bash
npm run build
npm run preview  # optional smoke test of the build output
```

## Content Updates

- **Profile facts** live in `data/profile.ts`. Update stats, activity, or contact links there.
- **Visual tokens** (fonts, gradients, chips) are defined in `assets/styles/main.css` for a single source of truth.
- **Tailwind config** (`tailwind.config.ts`) holds typography and color extensions.

## Tech Stack

- Nuxt 3 (v4 compat mode)
- TypeScript + Vite
- Tailwind CSS + PostCSS

Feel free to extend sections, wire CMS data, or add analytics as needed.
