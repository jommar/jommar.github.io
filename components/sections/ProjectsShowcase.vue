<template>
  <section id="projects" class="py-16">
    <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p class="hero-chip">Case studies</p>
        <h2 class="section-heading mt-4">High-leverage build logs</h2>
        <p class="section-subtitle mt-2">
          Four repositories that show how I approach orchestration, guardrails, and developer ergonomics.
        </p>
      </div>
      <a
        :href="profile?.socials?.[1]?.href"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-soft hover:text-white"
      >
        View GitHub profile
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="project in profile.projects"
        :key="project.name"
        class="surface-card rounded-[28px] p-6 flex flex-col gap-6"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-soft">
              {{ project.status === 'shipped' ? 'Shipped' : 'In progress' }}
            </p>
            <h3 class="text-2xl font-semibold mt-1 mb-2">{{ project.name }}</h3>
            <p class="text-sm text-soft">{{ project.description }}</p>
          </div>
          <a
            :href="project.repo"
            target="_blank"
            rel="noopener"
            class="h-10 w-10 rounded-2xl border border-white/20 flex items-center justify-center text-soft"
            aria-label="Open repository"
          >
            ↗
          </a>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="hero-chip text-[0.65rem]"
          >
            {{ tech }}
          </span>
        </div>
        <ul class="space-y-3">
          <li
            v-for="highlight in project.highlights"
            :key="highlight"
            class="flex items-start gap-2 text-sm text-soft"
          >
            <span class="text-neon mt-0.5">●</span>
            <span>{{ highlight }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
</script>
