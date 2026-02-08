<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 px-4 sm:px-8 lg:px-16 xl:px-24 py-8">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
