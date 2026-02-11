<template>
  <section id="focus" class="py-16">
    <div class="surface-card glow-border rounded-[32px] px-8 py-10 flex flex-col lg:flex-row gap-10">
      <div class="flex-1 space-y-6">
        <div class="blur-pill">
          <span class="h-2 w-2 rounded-full bg-neon inline-block"></span>
          {{ profile.availability }}
        </div>
        <div>
          <h1 class="section-heading mb-3">{{ profile.name }}</h1>
          <p class="text-lg leading-relaxed text-soft max-w-2xl">{{ profile.summary }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <span v-for="area in profile.focusAreas" :key="area" class="hero-chip">
            {{ area }}
          </span>
        </div>
        <div class="flex flex-wrap gap-4">
          <a
            :href="profile?.socials?.[0]?.href"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-2xl bg-white text-midnight px-6 py-3 text-base font-semibold"
          >
            <span aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
              <IconLinkedin class="h-4 w-4" />
            </span>
            <span>Connect on LinkedIn</span>
          </a>
          <a
            :href="profile?.socials?.[1]?.href"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 text-base font-semibold text-soft hover:text-white"
          >
            <span aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
              <IconGithub class="h-4 w-4" />
            </span>
            <span>Explore GitHub</span>
          </a>
        </div>
      </div>
      <div class="flex-1 surface-card rounded-[28px] p-6 border border-white/10">
        <p class="text-xs uppercase tracking-[0.3em] text-soft mb-4">Operating rhythm</p>
        <ul class="space-y-5">
          <li v-for="(stat, index) in profile.stats" :key="stat.label" class="pb-4 border-b border-white/10 last:border-none last:pb-0">
            <p class="text-sm font-medium">{{ stat.label }}</p>
            <p class="text-3xl font-semibold text-white">{{ stat.value }}</p>
            <p class="text-xs text-soft mt-1">{{ stat.detail }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
</script>
