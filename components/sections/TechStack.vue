<template>
  <section id="tech-stack" class="py-16 md:py-24 bg-surface" aria-label="Tech stack">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div class="mb-12">
          <p class="text-sm font-medium text-brand uppercase tracking-wider">Tech Stack</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Tools & technologies I work with
          </h2>
        </div>
      </Reveal>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <Reveal v-for="(cat, idx) in profile.techStack" :key="cat.label" :delay="idx * 100">
          <div>
            <h3 class="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{{ cat.label }}</h3>
            <ul class="space-y-2">
              <li v-for="item in cat.items" :key="item" class="text-sm text-gray-700 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-brand/40" />
                {{ item }}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from "~/data/profile"
</script>
