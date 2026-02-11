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
          <IconGithub class="h-5 w-5" />
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
          <IconMenu v-if="!isMenuOpen" class="h-5 w-5" />
          <IconClose v-else class="h-5 w-5" />
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
import IconGithub from '~/components/icons/IconGithub.vue'
import IconMenu from '~/components/icons/IconMenu.vue'
import IconClose from '~/components/icons/IconClose.vue'

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
