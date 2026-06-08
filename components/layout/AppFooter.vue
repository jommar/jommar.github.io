<template>
  <footer class="border-t border-gray-100 py-8 mt-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted">
          &copy; {{ new Date().getFullYear() }} Jommar Ilagan
        </p>
        <div class="flex items-center gap-4">
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-gray-900 transition-colors" aria-label="GitHub">
            <GitHubIcon class="w-5 h-5" />
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-gray-900 transition-colors" aria-label="LinkedIn">
            <LinkedinIcon class="w-5 h-5" />
          </a>
          <a :href="`mailto:${profile.email}`" class="text-muted hover:text-gray-900 transition-colors" aria-label="Email">
            <Mail class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail } from "@lucide/vue"
import { profile } from "~/data/profile"
</script>
