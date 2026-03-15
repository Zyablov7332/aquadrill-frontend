<template>
  <section id="why" class="section section--soft">
    <v-container>
      <RevealBlock>
        <SectionHeading
          eyebrow="Почему мы"
          title="Закрываем весь цикл — от заявки до чистой сдачи объекта"
          text="После обращения быстро согласуем выезд, оцениваем грунт и подбираем тип скважины под ваш участок. Работы запускаем без затягивания, а смету фиксируем заранее."
        />
      </RevealBlock>

      <v-row class="mt-6" dense>
        <v-col
          v-for="(item, index) in advantages"
          :key="item.title"
          cols="12"
          sm="6"
          lg="3"
          class="adv-col"
        >
          <RevealBlock :delay="index * 100">
            <v-card
              :ref="setCardRef"
              class="adv-card"
              rounded="xl"
              variant="flat"
              :style="cardMinHeight ? { minHeight: `${cardMinHeight}px` } : undefined"
            >
              <div class="adv-card__icon">
                <v-icon :icon="item.icon" size="30" color="primary" />
              </div>

              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
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
import { advantages } from '../../data/landing'

const cardRefs = ref<HTMLElement[]>([])
const cardMinHeight = ref<number>(0)

import type { ComponentPublicInstance } from 'vue'


const setCardRef = (target: Element | ComponentPublicInstance | null): void => {
  if (!target) return

  if (target instanceof HTMLElement) {
    cardRefs.value.push(target)
    return
  }

  if ('$el' in target && target.$el instanceof HTMLElement) {
    cardRefs.value.push(target.$el)
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
.adv-col {
  display: flex;
}

.adv-col :deep(.reveal-block) {
  display: flex;
  width: 100%;
  height: 100%;
}

.adv-card {
  width: 100%;
  height: 100%;
  padding: 28px;
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-1);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.adv-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2);
}

.adv-card__icon {
  width: 62px;
  height: 62px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  background: linear-gradient(
    135deg,
    rgba(47, 107, 255, 0.14) 0%,
    rgba(78, 162, 255, 0.08) 100%
  );
}

.adv-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
  line-height: 1.2;
  font-weight: 800;
  color: var(--text-primary);
}

.adv-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.7;
}
</style>
