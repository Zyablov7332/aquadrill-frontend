<template>
  <section
    id="hero"
    class="hero-section"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
  >
    <div class="hero-carousel">
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.id"
        class="hero-slide"
        :class="{ 'hero-slide--active': index === currentSlide }"
        :style="{ backgroundImage: `url(${slide.image})` }"
        :aria-hidden="index !== currentSlide"
      >
        <div class="hero-slide__overlay"></div>
      </div>
    </div>

    <div class="hero-noise"></div>

    <v-container class="hero-container">
      <v-row class="fill-height align-end align-lg-center">
        <v-col cols="12" lg="7" xl="6">
          <RevealBlock>
            <div class="hero-content">
              <div class="hero-badge">
                <v-icon icon="mdi-water-outline" size="18" />
                <span>{{ activeSlide.eyebrow }}</span>
              </div>

              <h1 class="hero-title">
                {{ activeSlide.title }}
                <span class="gradient-text">{{ activeSlide.accent }}</span>
              </h1>

              <p class="hero-copy">
                {{ activeSlide.description }}
              </p>

              <div class="hero-actions">
                <v-btn
                  color="primary"
                  size="x-large"
                  rounded="xl"
                  class="hero-btn hero-btn--primary"
                  @click="emit('openOrder')"
                >
                  Оставить заявку
                </v-btn>

                <v-btn
                  variant="outlined"
                  color="white"
                  size="x-large"
                  rounded="xl"
                  class="hero-btn hero-btn--ghost"
                  @click="emit('navigate', '#prices')"
                >
                  Посмотреть цены
                </v-btn>
              </div>
            </div>
          </RevealBlock>
        </v-col>
      </v-row>

      <RevealBlock :delay="120">
        <div class="hero-info-grid">
          <article
            v-for="item in heroHighlights"
            :key="item.title"
            class="hero-info-card"
          >
            <div class="hero-info-card__icon">
              <v-icon :icon="item.icon" size="24" color="white" />
            </div>

            <div class="hero-info-card__body">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </RevealBlock>

    <RevealBlock :delay="180">
      <div class="hero-line-nav" role="tablist" aria-label="Навигация по слайдам">
        <button
          v-for="(slide, index) in heroSlides"
          :key="slide.id"
          type="button"
          class="hero-line-nav__item"
          :class="{ 'hero-line-nav__item--active': index === currentSlide }"
          :aria-label="`Переключить на слайд ${index + 1}: ${slide.shortTitle}`"
          :aria-current="index === currentSlide ? 'true' : 'false'"
          @click="goToSlide(index)"
        >
          <span class="hero-line-nav__dot"></span>
          <span class="hero-line-nav__label">{{ slide.shortTitle }}</span>
        </button>
      </div>
    </RevealBlock>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import RevealBlock from '../common/RevealBlock.vue'

interface HeroSlide {
  id: number
  eyebrow: string
  title: string
  accent: string
  shortTitle: string
  description: string
  image: string
}

interface HeroHighlight {
  title: string
  text: string
  icon: string
}

const emit = defineEmits<{
  openOrder: []
  navigate: [href: string]
}>()

const heroSlides = ref<HeroSlide[]>([
  {
    id: 1,
    eyebrow: 'Бурение скважин на воду для дома, дачи и бизнеса',
    title: 'Бурение скважин ',
    accent: 'в Курске',
    shortTitle: 'Скважины',
    description:
      'Абиссинские, песчаные и артезианские скважины с подбором насоса, обсадной колонны и автоматики. Работаем по договору и с гарантией.',
    image:
      'https://i.pinimg.com/1200x/21/1a/d8/211ad85f92e12fa8b909036291cf34f2.jpg',
  },
  {
    id: 2,
    eyebrow: 'Оперативный выезд и оценка участка',
    title: 'Подберём лучшее решение ',
    accent: 'под ваш грунт',
    shortTitle: 'Подбор',
    description:
      'Оцениваем особенности участка, глубину водоносного слоя и предлагаем оптимальный тип скважины без лишних переплат.',
    image:
      'https://i.pinimg.com/1200x/92/e1/8e/92e18efdf442b584731c027610ca65c5.jpg',
  },
  {
    id: 3,
    eyebrow: 'Монтаж под ключ и аккуратная сдача объекта',
    title: 'Запуск воды ',
    accent: 'без лишней суеты',
    shortTitle: 'Под ключ',
    description:
      'Выполняем бурение, обсадку, подбор оборудования и сдачу объекта в чистом виде. После работ остаются документы и понятный результат.',
    image:
      'https://i.pinimg.com/1200x/92/e1/8e/92e18efdf442b584731c027610ca65c5.jpg',
  },
])

const heroHighlights: HeroHighlight[] = [
  {
    title: 'Выезд за 24 часа',
    text: 'Оперативно приезжаем на участок и оцениваем условия для бурения.',
    icon: 'mdi-truck-fast-outline',
  },
  {
    title: 'Смета до начала работ',
    text: 'Фиксируем понятную стоимость и объясняем, из чего она складывается.',
    icon: 'mdi-file-document-check-outline',
  },
  {
    title: 'Гарантия и паспорт',
    text: 'Передаём готовый объект, документы и рекомендации по эксплуатации.',
    icon: 'mdi-shield-check-outline',
  },
]

const currentSlide = ref<number>(0)
const autoplayDelay = 6000
let autoplayTimer: number | null = null

const activeSlide = computed<HeroSlide>(() => heroSlides.value[currentSlide.value])

const clearAutoplay = (): void => {
  if (autoplayTimer !== null) {
    window.clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const startAutoplay = (): void => {
  clearAutoplay()
  autoplayTimer = window.setInterval(() => {
    nextSlide()
  }, autoplayDelay)
}

const pauseAutoplay = (): void => {
  clearAutoplay()
}

const resumeAutoplay = (): void => {
  startAutoplay()
}

const nextSlide = (): void => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}


const goToSlide = (index: number): void => {
  currentSlide.value = index
  startAutoplay()
}



onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearAutoplay()
})
</script>

<style scoped>

.hero-line-nav {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 0;
  margin-top: 28px;
  padding: 10px 0;
}

.hero-line-nav::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 4px;
  transform: translateY(-50%);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12);
}

.hero-line-nav__item {
  position: relative;
  z-index: 1;
  min-height: 40px;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: transform 0.25s ease;
}

.hero-line-nav__item:hover {
  transform: translateY(-1px);
}

.hero-line-nav__dot {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  border: 4px solid rgba(47, 107, 255, 0.18);
  box-shadow:
    0 8px 18px rgba(0, 0, 0, 0.16),
    0 0 0 0 rgba(78, 162, 255, 0.22);
  transition:
    width 0.28s ease,
    height 0.28s ease,
    background 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;
}

.hero-line-nav__item--active .hero-line-nav__dot {
  width: 62px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #2f6bff 0%, #72b5ff 100%);
  border: 0;
  box-shadow:
    0 10px 24px rgba(47, 107, 255, 0.35),
    0 0 0 8px rgba(78, 162, 255, 0.12);
}

.hero-line-nav__label {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.88rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.72);
  opacity: 0;
  transition:
    opacity 0.25s ease,
    color 0.25s ease;
  pointer-events: none;
}

.hero-line-nav__item:hover .hero-line-nav__label,
.hero-line-nav__item--active .hero-line-nav__label {
  opacity: 1;
}

.hero-line-nav__item--active .hero-line-nav__label {
  color: #ffffff;
}

@media (max-width: 960px) {
  .hero-line-nav {
    margin-top: 24px;
  }

  .hero-line-nav__label {
    font-size: 0.8rem;
  }
}

@media (max-width: 600px) {
  .hero-line-nav__label {
    display: none;
  }

  .hero-line-nav__dot {
    width: 16px;
    height: 16px;
  }

  .hero-line-nav__item--active .hero-line-nav__dot {
    width: 44px;
    height: 10px;
  }
}

.hero-section {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: stretch;
}

.hero-carousel {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.03);
  transition:
    opacity 0.9s ease,
    transform 6s ease;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-slide--active {
  opacity: 1;
  transform: scale(1);
}

.hero-slide__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 13, 25, 0.84) 0%, rgba(7, 13, 25, 0.54) 36%, rgba(7, 13, 25, 0.28) 65%, rgba(7, 13, 25, 0.56) 100%),
    linear-gradient(180deg, rgba(7, 13, 25, 0.24) 0%, rgba(7, 13, 25, 0.34) 100%);
}

.hero-noise {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.14;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0, transparent 26%),
    radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.14) 0, transparent 24%);
}

.hero-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 34px;
}

.hero-content {
  max-width: 760px;
  padding-bottom: 32px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 10px 16px;
  border-radius: 999px;
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.96);
}

.hero-title {
  margin: 0 0 20px;
  max-width: 10.5ch;
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.94;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: #fff;
  text-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  display: inline;
  background: linear-gradient(135deg, #78a8ff 0%, #ffffff 45%, #ff8e84 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-copy {
  max-width: 680px;
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.84);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.hero-btn {
  min-width: 210px;
}

.hero-btn--primary {
  box-shadow: 0 18px 40px rgba(47, 107, 255, 0.28);
}

.hero-btn--ghost {
  border-color: rgba(255, 255, 255, 0.36) !important;
  color: #fff !important;
  background: rgba(255, 255, 255, 0.04);
}

.hero-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero-info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 10px;
}

.hero-info-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  min-height: 148px;
  padding: 22px 22px 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(16px);
}

.hero-info-card__icon {
  flex: 0 0 auto;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(47, 107, 255, 0.42) 0%, rgba(78, 162, 255, 0.24) 100%);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.hero-info-card__body h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
  line-height: 1.2;
  font-weight: 800;
  color: #fff;
}

.hero-info-card__body p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
}

@media (max-width: 1264px) {
  .hero-container {
    padding-top: 138px;
  }

  .hero-title {
    max-width: 11ch;
  }
}

@media (max-width: 960px) {
  .hero-section {
    min-height: auto;
  }

  .hero-container {
    padding-top: 118px;
    padding-bottom: 22px;
  }

  .hero-title {
    max-width: 100%;
    font-size: clamp(2.7rem, 10vw, 4.4rem);
  }

  .hero-info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding-top: 106px;
  }

  .hero-badge {
    width: 100%;
    justify-content: center;
    text-align: center;
    border-radius: 18px;
  }

  .hero-copy {
    font-size: 1rem;
    line-height: 1.72;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-btn {
    width: 100%;
    min-width: 0;
  }

  .hero-info-card {
    min-height: auto;
  }


  .hero-nav-btn {
    width: 48px;
    height: 48px;
  }
}
</style>