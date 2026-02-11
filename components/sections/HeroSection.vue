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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.32H4.8V24H.22zM8.56 8.32h4.38v2.13h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V24h-4.58v-7.39c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V24H8.56z" />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
                <path fill-rule="evenodd" d="M12 .5C5.649.5.5 5.65.5 12a11.5 11.5 0 0 0 7.855 10.93c.575.11.786-.25.786-.556 0-.274-.01-1.17-.016-2.125-3.197.696-3.873-1.37-3.873-1.37-.523-1.33-1.278-1.686-1.278-1.686-1.044-.713.08-.699.08-.699 1.155.082 1.764 1.187 1.764 1.187 1.027 1.76 2.694 1.252 3.351.958.104-.744.402-1.252.732-1.54-2.553-.29-5.236-1.277-5.236-5.683 0-1.255.447-2.28 1.18-3.085-.118-.29-.512-1.457.112-3.038 0 0 .964-.309 3.16 1.178a10.89 10.89 0 0 1 5.754 0c2.195-1.487 3.158-1.178 3.158-1.178.626 1.581.232 2.748.114 3.038.734.805 1.178 1.83 1.178 3.085 0 4.418-2.688 5.39-5.252 5.674.413.355.781 1.05.781 2.118 0 1.53-.014 2.761-.014 3.138 0 .308.208.67.794.555A11.504 11.504 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" clip-rule="evenodd" />
              </svg>
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
</script>
