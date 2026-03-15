<template>
  <v-app class="app-shell">
    <AppHeader
      :elevated="elevated"
      :is-dark="isDark"
      @navigate="scrollToSection"
      @open-order="dialog = true"
      @toggle-theme="toggleTheme"
    />

    <v-main>
      <HeroSection @navigate="scrollToSection" @open-order="dialog = true" />
      <WhyUsSection />
      <PricingSection @open-order="dialog = true" />
      <ProcessSection />
      <CtaSection @open-order="dialog = true" />
      <GallerySection />
    </v-main>

    <AppFooter @navigate="scrollToSection" @open-order="dialog = true" />

    <OrderDialog v-model="dialog" />
    <CookieConsent />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import WhyUsSection from './components/sections/WhyUsSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import GallerySection from './components/sections/GallerySection.vue'
import OrderDialog from './components/dialogs/OrderDialog.vue'
import CookieConsent from './components/common/CookieConsent.vue'
import { useThemeMode } from './composables/useThemeMode'
import { useCookieConsent } from './composables/useCookieConsent'

const dialog = ref(false)
const elevated = ref(false)

const { isDark, toggleTheme } = useThemeMode()
const { loadConsent } = useCookieConsent()

const scrollToSection = (href: string): void => {
  const target = document.querySelector(href)

  if (target instanceof HTMLElement) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const handleScroll = (): void => {
  elevated.value = window.scrollY > 12
}

onMounted(() => {
  loadConsent()
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
