<template>
  <section id="contact" class="py-16 md:py-24" aria-label="Contact information">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <Reveal>
          <p class="text-sm font-medium text-brand uppercase tracking-wider">Contact</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Let's work together
          </h2>
          <p class="text-muted mt-3">
            Whether you have a project in mind, want to discuss AI infrastructure, or just want to connect — reach out.
          </p>
        </Reveal>

        <Reveal :delay="150">
          <div class="flex flex-wrap justify-center gap-3 mt-8">
            <a :href="`mailto:${profile.email}`" class="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors">
              <Mail class="w-4 h-4" />
              {{ profile.email }}
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

        <Reveal :delay="300">
          <div class="mt-8 pt-8 border-t border-gray-100">
            <a :href="profile.cvUrl" download class="inline-flex items-center gap-2 text-sm text-muted hover:text-gray-900 transition-colors">
              <Download class="w-4 h-4" />
              Download CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Download } from "@lucide/vue"
import { profile } from "~/data/profile"
</script>
