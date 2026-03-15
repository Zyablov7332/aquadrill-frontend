<template>
  <section id="steps" class="section section--soft">
    <v-container>
      <RevealBlock>
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Прозрачный процесс без лишней суеты"
          text="Вы всегда понимаете, что происходит на каждом этапе — от первого звонка до запуска воды в доме."
        />
      </RevealBlock>

      <div class="steps-wrap mt-8">
        <div class="steps-line d-none d-lg-block"></div>

        <v-row dense>
          <v-col
            v-for="(step, index) in steps"
            :key="step.title"
            cols="12"
            sm="6"
            lg="3"
            class="step-col"
          >
            <RevealBlock :delay="index * 100">
              <v-card
                :ref="setCardRef"
                class="step-card"
                rounded="xl"
                variant="flat"
                :style="cardMinHeight ? { minHeight: `${cardMinHeight}px` } : undefined"
              >
                <div class="step-card__top">
                  <div class="step-card__num">{{ step.number }}</div>
                  <v-icon :icon="step.icon" size="26" color="primary" />
                </div>

                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </v-card>
            </RevealBlock>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import RevealBlock from '../common/RevealBlock.vue'
import SectionHeading from '../common/SectionHeading.vue'
import { steps } from '../../data/landing'

const cardRefs = ref<HTMLElement[]>([])
const cardMinHeight = ref<number>(0)

const setCardRef = (
  target: Element | ComponentPublicInstance | null
): void => {
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
.steps-wrap {
  position: relative;
}

.steps-line {
  position: absolute;
  top: 44px;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  background: var(--step-line);
}

.step-col {
  display: flex;
}

.step-col :deep(.reveal-block) {
  display: flex;
  width: 100%;
  height: 100%;
}

.step-card {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 28px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-1);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2);
}

.step-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.step-card__num {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #2f6bff 0%, #4ea2ff 100%);
  color: #fff;
  font-weight: 900;
  box-shadow: 0 16px 30px rgba(47, 107, 255, 0.22);
}

.step-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
  line-height: 1.2;
  font-weight: 800;
  color: var(--text-primary);
}

.step-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.7;
}
</style>
