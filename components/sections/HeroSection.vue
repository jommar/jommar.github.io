<template>
  <section class="relative overflow-hidden" aria-label="About me">
    <div class="hero-bg" aria-hidden="true" />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="max-w-3xl">
        <Reveal>
          <div class="flex items-center gap-2 text-sm text-muted mb-4">
            <MapPinned class="w-4 h-4" />
            <span>{{ profile.location }}</span>
          </div>
        </Reveal>

        <Reveal :delay="100">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            {{ profile.name }}
          </h1>
        </Reveal>

        <Reveal :delay="200">
          <p class="text-xl sm:text-2xl text-muted mt-3 font-medium">
            {{ profile.title }}
          </p>
        </Reveal>

        <Reveal :delay="300">
          <p class="text-base text-muted mt-6 max-w-2xl leading-relaxed">
            {{ profile.summary }}
          </p>
        </Reveal>

        <Reveal :delay="400">
          <div class="flex flex-wrap items-center gap-3 mt-8">
            <a href="#contact" class="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors">
              Get in Touch
              <ArrowRight class="w-4 h-4" />
            </a>
            <a :href="profile.cvUrl" download class="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Download CV
              <Download class="w-4 h-4" />
            </a>
            <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <GithubIcon class="w-4 h-4" />
              GitHub
            </a>
            <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <LinkedinIcon class="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal :delay="500">
          <div class="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-100">
            <div v-for="m in profile.metrics" :key="m.label" class="flex flex-col">
              <span class="text-2xl font-bold text-gray-900">{{ m.value }}</span>
              <span class="text-xs text-muted mt-0.5">{{ m.label }}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinned, ArrowRight, Download } from "@lucide/vue"
import { profile } from "~/data/profile"
</script>
