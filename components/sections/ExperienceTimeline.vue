<template>
  <section id="experience" class="py-16 md:py-24 bg-surface" aria-label="Work experience">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div class="mb-12">
          <p class="text-sm font-medium text-brand uppercase tracking-wider">Experience</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Where I've worked
          </h2>
        </div>
      </Reveal>

      <div class="space-y-0">
        <div v-for="(exp, idx) in profile.experience" :key="exp.company" class="relative pl-8 pb-8 border-l-2 border-gray-100 last:pb-0">
          <div class="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand" />
          <Reveal :delay="idx * 150">
            <div class="bg-white border border-gray-100 rounded-xl p-5">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 class="text-base font-semibold">{{ exp.company }}</h3>
                  <p class="text-sm text-muted">{{ exp.role }}</p>
                </div>
                <time class="text-xs text-muted whitespace-nowrap">{{ exp.period }}</time>
              </div>
              <ul class="space-y-1.5 mt-3">
                <li v-for="h in exp.highlights" :key="h" class="text-sm text-gray-700 flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand/40 mt-1.5 shrink-0" />
                  {{ h }}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from "~/data/profile"
</script>
