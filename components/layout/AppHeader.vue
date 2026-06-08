<template>
  <header class="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md" role="banner">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="text-lg font-semibold tracking-tight" aria-label="Home">
          Jommar Ilagan
        </a>

        <nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm text-muted hover:text-gray-900 transition-colors">
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="p-2 rounded-lg text-muted hover:text-gray-900 hover:bg-gray-100 transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleDark"
          >
            <Sun v-if="isDark" class="w-4 h-4" />
            <Moon v-else class="w-4 h-4" />
          </button>

          <button
            type="button"
            class="md:hidden p-2 rounded-lg text-muted hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            @click="mobileOpen = !mobileOpen"
          >
            <Menu v-if="!mobileOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileOpen" class="md:hidden border-t border-gray-100 bg-white">
      <nav class="px-4 py-4 space-y-3" aria-label="Mobile navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block text-sm text-muted hover:text-gray-900 transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Sun, Moon, Menu, X } from "@lucide/vue"

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const mobileOpen = ref(false)
const isDark = ref(true)

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle("dark", isDark.value)
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark.value ? "#030712" : "#ffffff")
  localStorage.setItem("theme", isDark.value ? "dark" : "light")
}

onMounted(() => {
  const stored = localStorage.getItem("theme")
  const meta = document.querySelector('meta[name="theme-color"]')
  if (stored === "light") {
    isDark.value = false
    document.documentElement.classList.remove("dark")
    meta?.setAttribute("content", "#ffffff")
  } else {
    isDark.value = true
    document.documentElement.classList.add("dark")
    meta?.setAttribute("content", "#030712")
  }
})
</script>
