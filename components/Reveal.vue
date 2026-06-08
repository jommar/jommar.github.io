<template>
  <div ref="el" class="transition-all duration-700" :class="{ 'opacity-0': !visible, 'opacity-100': visible, 'translate-y-6': !visible, 'translate-y-0': visible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number
}>(), {
  delay: 0,
})

const visible = ref(false)
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (props.delay) {
          setTimeout(() => { visible.value = true }, props.delay)
        } else {
          visible.value = true
        }
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (el.value) observer.observe(el.value)
})
</script>
