<template>
  <component
    :is="as"
    class="surface-card"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'article',
})
</script>
