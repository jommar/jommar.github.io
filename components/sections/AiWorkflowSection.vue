<template>
  <section id="ai-workflow" class="py-16">
    <div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="hero-chip">AI-assisted workflow</p>
        <h2 class="section-heading mt-4">AI toolkit</h2>
        <p class="section-subtitle mt-2">
          Practical ways I plug AI into a JavaScript / Node / Vue stackalways with tests, observability, and code review in the loop.
        </p>
      </div>
      <div class="max-w-sm text-xs text-soft leading-relaxed">
        <p>
          I treat AI as an amplifier: a tool for plans, refactors, and scaffolding. I still own the architecture, data models, and edge cases.
        </p>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <SurfaceCard
        v-for="item in profile.aiWorkflow"
        :key="item.title"
        as="article"
        class="rounded-[24px] p-6 flex flex-col gap-4"
      >
        <div>
          <p class="text-xs uppercase tracking-[0.25em] text-soft">Practice</p>
          <h3 class="mt-2 text-lg font-semibold">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-soft">{{ item.summary }}</p>
        </div>
        <ul class="mt-2 space-y-2 text-sm text-soft">
          <li
            v-for="point in item.points"
            :key="point"
            class="flex gap-2"
          >
            <span class="mt-1 text-neon">•</span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </SurfaceCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
import SurfaceCard from '~/components/ui/SurfaceCard.vue'
</script>
