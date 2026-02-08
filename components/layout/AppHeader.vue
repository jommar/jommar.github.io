<template>
  <header class="px-4 sm:px-8 lg:px-16 xl:px-24 pt-6">
    <div class="surface-card rounded-3xl px-5 py-4 flex items-center gap-4 sticky top-6 z-40">
      <a href="#focus" class="flex items-center gap-3" aria-label="Back to hero focus">
        <div class="h-12 w-12 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center font-black tracking-[0.3em] text-sm">
          {{ initials }}
        </div>
        <div>
          <p class="font-semibold">{{ profile.name }}</p>
          <p class="text-xs text-soft uppercase tracking-wide">{{ profile.title }}</p>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-3 ml-auto">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-xs tracking-[0.2em] uppercase text-soft hover:text-white transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2 ml-auto md:ml-0">
        <a
          :href="profile?.socials?.[1]?.href"
          target="_blank"
          rel="noopener"
          class="h-11 w-11 rounded-2xl border border-white/15 flex items-center justify-center text-soft hover:text-white"
          aria-label="GitHub profile"
        >
          <span class="sr-only">GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <path fill-rule="evenodd" d="M12 .5C5.649.5.5 5.65.5 12a11.5 11.5 0 0 0 7.855 10.93c.575.11.786-.25.786-.556 0-.274-.01-1.17-.016-2.125-3.197.696-3.873-1.37-3.873-1.37-.523-1.33-1.278-1.686-1.278-1.686-1.044-.713.08-.699.08-.699 1.155.082 1.764 1.187 1.764 1.187 1.027 1.76 2.694 1.252 3.351.958.104-.744.402-1.252.732-1.54-2.553-.29-5.236-1.277-5.236-5.683 0-1.255.447-2.28 1.18-3.085-.118-.29-.512-1.457.112-3.038 0 0 .964-.309 3.16 1.178a10.89 10.89 0 0 1 5.754 0c2.195-1.487 3.158-1.178 3.158-1.178.626 1.581.232 2.748.114 3.038.734.805 1.178 1.83 1.178 3.085 0 4.418-2.688 5.39-5.252 5.674.413.355.781 1.05.781 2.118 0 1.53-.014 2.761-.014 3.138 0 .308.208.67.794.555A11.504 11.504 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" clip-rule="evenodd" />
          </svg>
        </a>
        <a
          :href="profile?.socials?.[0]?.href"
          target="_blank"
          rel="noopener"
          class="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white text-midnight px-5 py-2 text-sm font-semibold"
        >
          Connect
        </a>
        <button
          class="md:hidden h-11 w-11 rounded-2xl border border-white/15 text-soft"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          @click="toggleMenu"
        >
          <span class="sr-only">Toggle menu</span>
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <path d="m18.3 5.71-1-1L12 10l-5.3-5.29-1 1L11 11l-5.3 5.29 1 1L12 12l5.3 5.29 1-1L13 11z" />
          </svg>
        </button>
      </div>
    </div>

    <div
      id="mobile-nav"
      v-if="isMenuOpen"
      class="mt-3 surface-card rounded-3xl px-6 py-4 flex flex-col gap-4 md:hidden"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="text-xs tracking-[0.2em] uppercase text-soft hover:text-white"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
      <a
        :href="profile?.socials?.[0]?.href"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center justify-center rounded-2xl bg-white text-midnight px-5 py-3 text-sm font-semibold"
        @click="closeMenu"
      >
        Connect
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { profile } from '~/data/profile'

const navItems = [
  { label: 'Focus', href: '#focus' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact', href: '#contact' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const initials = computed(() =>
  profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
)
</script>
