<template>
  <section id="capabilities" class="py-16 md:py-24" aria-label="Capabilities">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div class="mb-12">
          <p class="text-sm font-medium text-brand uppercase tracking-wider">Capabilities</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            What I bring to the table
          </h2>
          <p class="text-muted mt-3 max-w-2xl">
            A blend of traditional full-stack engineering and modern AI infrastructure skills.
          </p>
        </div>
      </Reveal>

      <div class="grid md:grid-cols-2 gap-6">
        <Reveal v-for="(cap, idx) in profile.capabilities" :key="cap.title" :delay="idx * 100">
          <article class="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
            <div class="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
              <Network v-if="cap.icon === 'Network'" class="w-5 h-5 text-brand" />
              <SearchCode v-else-if="cap.icon === 'Search'" class="w-5 h-5 text-brand" />
              <Settings2 v-else-if="cap.icon === 'Settings2'" class="w-5 h-5 text-brand" />
              <LayoutDashboard v-else class="w-5 h-5 text-brand" />
            </div>
            <h3 class="text-lg font-semibold">{{ cap.title }}</h3>
            <p class="text-sm text-muted mt-2 leading-relaxed">{{ cap.description }}</p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Network, SearchCode, Settings2, LayoutDashboard } from "@lucide/vue"
import { profile } from "~/data/profile"
</script>
