<template>
  <section class="section cta-section">
    <v-container>
      <RevealBlock>
        <div class="cta-panel">
          <div class="cta-content">
            <div class="section-eyebrow" :class="{ 'section-eyebrow--light': isDarkTheme }">
              Быстрый расчёт
            </div>
            <h2 class="cta-title">Нужна вода на участке?</h2>
            <p class="cta-text">
              Откроем форму заказа, покажем контакты и быстро сориентируем по срокам,
              глубине и ориентировочной смете.
            </p>
          </div>

          <div class="cta-actions">
            <v-btn color="primary" size="x-large" rounded="xl" @click="emit('openOrder')">
              Открыть форму заказа
            </v-btn>
          </div>
        </div>
      </RevealBlock>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import RevealBlock from '../common/RevealBlock.vue'

const emit = defineEmits<{
  openOrder: []
}>()

const isDarkTheme = computed(() => {
  return document.documentElement.getAttribute('data-theme') === 'dark'
})
</script>

<style scoped>


.cta-panel {
  display: grid;
  grid-template-columns: 1.2fr auto;
  gap: 24px;
  align-items: center;
  padding: 40px;
  border-radius: 32px;
  background: var(--cta-panel-bg);
  border: 1px solid var(--cta-panel-border);
  box-shadow: var(--cta-panel-shadow);
  backdrop-filter: blur(12px);
}

.cta-content {
  min-width: 0;
}

.cta-title {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.02;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--cta-title-color);
}

.cta-text {
  max-width: 780px;
  margin: 0;
  color: var(--cta-text-color);
  line-height: 1.75;
}

@media (max-width: 960px) {
  .cta-panel {
    grid-template-columns: 1fr;
  }

  .cta-actions {
    width: 100%;
  }

  .cta-actions :deep(.v-btn) {
    width: 100%;
  }
}
</style>
