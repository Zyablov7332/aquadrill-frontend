<template>
  <div
    ref="root"
    class="reveal-block"
    :class="{ 'is-visible': visible }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

withDefaults(
  defineProps<{
    delay?: number
  }>(),
  {
    delay: 0,
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.14 },
  )

  if (root.value) {
    observer.observe(root.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.reveal-block {
  opacity: 0;
  transform: translateY(34px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.reveal-block.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>