<template>
  <section id="activity" class="py-16">
    <div class="grid gap-6 md:grid-cols-2">
      <SurfaceCard as="article" class="rounded-[32px] p-6">
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
      </SurfaceCard>
      <SurfaceCard as="article" class="rounded-[32px] p-6" id="contact">
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
                <IconLinkedin class="h-4 w-4" />
              </span>
              <span v-else-if="link.label === 'GitHub'" aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
                <IconGithub class="h-4 w-4" />
              </span>
              <span v-else-if="link.label.includes('CV')" aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
                <IconDocument class="h-4 w-4" />
              </span>
              <span>{{ link.label }}</span>
            </a>
            <p class="text-xs text-soft mt-2">{{ link.caption }}</p>
          </div>
        </div>
      </SurfaceCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
import SurfaceCard from '~/components/ui/SurfaceCard.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconDocument from '~/components/icons/IconDocument.vue'
</script>
