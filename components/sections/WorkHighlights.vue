<template>
  <section id="work" class="py-16 md:py-24" aria-label="Work highlights">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div class="mb-12">
          <p class="text-sm font-medium text-brand uppercase tracking-wider">Work Highlights</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Key projects & contributions
          </h2>
        </div>
      </Reveal>

      <div class="space-y-6">
        <Reveal v-for="(item, idx) in profile.workHighlights" :key="item.title" :delay="idx * 150">
          <article class="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-sm text-muted">{{ item.role }} · {{ item.period }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">{{ item.description }}</p>
            <div class="flex flex-wrap gap-2 mt-3">
              <span v-for="tag in item.tags" :key="tag" class="inline-flex text-xs font-medium text-brand bg-brand/10 px-2.5 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from "~/data/profile"
</script>
