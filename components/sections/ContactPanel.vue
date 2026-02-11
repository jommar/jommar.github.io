<template>
  <section id="activity" class="py-16">
    <div class="grid gap-6 md:grid-cols-2">
      <article class="surface-card rounded-[32px] p-6">
        <p class="hero-chip mb-4">Signal</p>
        <h2 class="section-heading">Recent activity</h2>
        <p class="section-subtitle mt-2 mb-6">The latest commits, docs, and refinements pulled from GitHub this quarter.</p>
        <ul class="space-y-4">
          <li
            v-for="item in profile.activity"
            :key="item"
            class="flex gap-3 text-sm text-soft"
          >
            <span class="text-lavender mt-0.5">◆</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
      <article class="surface-card rounded-[32px] p-6" id="contact">
        <p class="hero-chip mb-4">Collaborate</p>
        <h2 class="section-heading">Start a conversation</h2>
        <p class="section-subtitle mt-2 mb-6">Pick a channel that works for you—happy to share the full resume, architecture notes, or roadmap ideas.</p>
        <div class="space-y-5">
          <div v-for="link in profile.contact" :key="link.href">
            <a
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="block w-full rounded-2xl bg-white text-midnight px-5 py-3 text-center font-semibold inline-flex items-center justify-center gap-2"
            >
              <span v-if="link.label === 'LinkedIn'" aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.32H4.8V24H.22zM8.56 8.32h4.38v2.13h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V24h-4.58v-7.39c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V24H8.56z" />
                </svg>
              </span>
              <span v-else-if="link.label === 'GitHub'" aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
                  <path fill-rule="evenodd" d="M12 .5C5.649.5.5 5.65.5 12a11.5 11.5 0 0 0 7.855 10.93c.575.11.786-.25.786-.556 0-.274-.01-1.17-.016-2.125-3.197.696-3.873-1.37-3.873-1.37-.523-1.33-1.278-1.686-1.278-1.686-1.044-.713.08-.699.08-.699 1.155.082 1.764 1.187 1.764 1.187 1.027 1.76 2.694 1.252 3.351.958.104-.744.402-1.252.732-1.54-2.553-.29-5.236-1.277-5.236-5.683 0-1.255.447-2.28 1.18-3.085-.118-.29-.512-1.457.112-3.038 0 0 .964-.309 3.16 1.178a10.89 10.89 0 0 1 5.754 0c2.195-1.487 3.158-1.178 3.158-1.178.626 1.581.232 2.748.114 3.038.734.805 1.178 1.83 1.178 3.085 0 4.418-2.688 5.39-5.252 5.674.413.355.781 1.05.781 2.118 0 1.53-.014 2.761-.014 3.138 0 .308.208.67.794.555A11.504 11.504 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" clip-rule="evenodd" />
                </svg>
              </span>
              <span v-else-if="link.label.includes('CV')" aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
              </span>
              <span>{{ link.label }}</span>
            </a>
            <p class="text-xs text-soft mt-2">{{ link.caption }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
</script>
