<template>
  <section class="py-16 md:py-24 bg-surface" aria-label="Value proposition">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div class="text-center mb-12">
          <p class="text-sm font-medium text-brand uppercase tracking-wider">Why Work With Me</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Three decades of engineering,<br />one decade of shipping
          </h2>
        </div>
      </Reveal>

      <div class="grid md:grid-cols-3 gap-6">
        <Reveal v-for="(prop, idx) in profile.valueProps" :key="prop.title" :delay="idx * 150">
          <article class="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
            <div class="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
              <Code v-if="prop.icon === 'Code2'" class="w-5 h-5 text-brand" />
              <Cpu v-else-if="prop.icon === 'Cpu'" class="w-5 h-5 text-brand" />
              <Bot v-else class="w-5 h-5 text-brand" />
            </div>
            <h3 class="text-lg font-semibold">{{ prop.title }}</h3>
            <p class="text-sm text-muted mt-2 leading-relaxed">{{ prop.description }}</p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code, Cpu, Bot } from "@lucide/vue"
import { profile } from "~/data/profile"
</script>
