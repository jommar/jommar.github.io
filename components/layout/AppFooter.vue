<template>
  <footer class="px-4 sm:px-8 lg:px-16 xl:px-24 py-10">
    <div class="text-center text-soft space-y-3">
      <div class="blur-pill mx-auto text-xs tracking-[0.2em] uppercase">
        ⚡ Shipping with Nuxt 3 + Tailwind
      </div>
      <p class="text-sm">© {{ year }} {{ profile.name }} · Built with care and measurable outcomes.</p>
      <p class="text-xs">Last updated Feb 2026 · Contributions pulled directly from GitHub.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>
