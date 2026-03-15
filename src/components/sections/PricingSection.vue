<template>
  <section id="prices" class="section">
    <v-container>
      <RevealBlock>
        <SectionHeading
          eyebrow="Прайс / услуги"
          title="Понятная стоимость без скрытых доплат"
          text="Ниже демонстрационные пакеты для лендинга. Подставьте свои реальные цены за метр или итоговые пакеты “под ключ”."
        />
      </RevealBlock>

      <v-row class="mt-6" dense>
        <v-col
          v-for="(service, index) in services"
          :key="service.title"
          cols="12"
          md="4"
          class="price-col"
        >
          <RevealBlock :delay="index * 100">
            <v-card
              :ref="setCardRef"
              :class="['price-card', { 'price-card--featured': service.featured }]"
              rounded="xl"
              variant="flat"
              :style="cardMinHeight ? { minHeight: `${cardMinHeight}px` } : undefined"
            >
              <div class="price-card__content">
                <v-chip
                  v-if="service.badge"
                  class="price-card__badge mb-4"
                  :color="service.featured ? 'accent' : 'primary'"
                  variant="flat"
                  rounded="xl"
                >
                  {{ service.badge }}
                </v-chip>

                <h3>{{ service.title }}</h3>
                <div class="price-card__value">{{ service.price }}</div>
                <p class="price-card__subtitle">{{ service.subtitle }}</p>

                <ul class="price-card__list">
                  <li v-for="item in service.items" :key="item">
                    <v-icon icon="mdi-check-circle-outline" size="18" color="primary" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <v-btn
                block
                :color="service.featured ? 'secondary' : 'primary'"
                size="large"
                rounded="xl"
                class="price-card__button"
                @click="emit('openOrder')"
              >
                Оставить заявку
              </v-btn>
            </v-card>
          </RevealBlock>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue'
import RevealBlock from '../common/RevealBlock.vue'
import SectionHeading from '../common/SectionHeading.vue'
import { services } from '../../data/landing'

const emit = defineEmits<{
  openOrder: []
}>()

const cardRefs = ref<HTMLElement[]>([])
const cardMinHeight = ref<number>(0)

const setCardRef = (el: Element | null): void => {
  if (el instanceof HTMLElement) {
    cardRefs.value.push(el)
  }
}

onBeforeUpdate(() => {
  cardRefs.value = []
})

const updateCardHeights = async (): Promise<void> => {
  await nextTick()

  if (!cardRefs.value.length) return

  cardMinHeight.value = 0
  await nextTick()

  let maxHeight = 0

  for (const card of cardRefs.value) {
    const height = card.offsetHeight
    if (height > maxHeight) {
      maxHeight = height
    }
  }

  cardMinHeight.value = maxHeight
}

let resizeObserver: ResizeObserver | null = null

const handleResize = (): void => {
  void updateCardHeights()
}

onMounted(async () => {
  await updateCardHeights()

  window.addEventListener('resize', handleResize, { passive: true })

  resizeObserver = new ResizeObserver(() => {
    void updateCardHeights()
  })

  cardRefs.value.forEach((card) => {
    resizeObserver?.observe(card)
  })

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      void updateCardHeights()
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  resizeObserver?.disconnect()
})
</script>

<style scoped>
.price-col {
  display: flex;
}

.price-col :deep(.reveal-block) {
  display: flex;
  width: 100%;
  height: 100%;
}

.price-card {
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--surface-card-solid);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-1);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.price-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2);
}

.price-card--featured {
  border-color: rgba(47, 107, 255, 0.26);
  background: linear-gradient(
    180deg,
    var(--surface-card-solid) 0%,
    rgba(47, 107, 255, 0.08) 100%
  );
}

.price-card__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.price-card__badge {
  align-self: flex-start;
  width: auto;
  max-width: max-content;
  flex: 0 0 auto;
}

.price-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
  line-height: 1.2;
  font-weight: 800;
  color: var(--text-primary);
}

.price-card__value {
  margin: 18px 0 10px;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--text-primary);
}

.price-card__subtitle {
  margin: 0 0 20px;
  color: var(--text-muted);
  line-height: 1.7;
}

.price-card__list {
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.price-card__list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.price-card__button {
  width: 100%;
  margin-top: 28px;
  align-self: stretch;
  flex: 0 0 auto;
}
</style>
