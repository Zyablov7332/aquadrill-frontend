<template>
  <div>
    <v-navigation-drawer v-model="drawer" location="right" temporary class="drawer">
      <div class="drawer-actions">
        <v-btn
          block
          variant="outlined"
          rounded="xl"
          color="primary"
          :prepend-icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="emit('toggleTheme')"
        >
          {{ isDark ? 'Светлая тема' : 'Тёмная тема' }}
        </v-btn>
      </div>

      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.href"
          :title="item.title"
          @click="goTo(item.href)"
        />
      </v-list>

      <div class="px-4 pb-6">
        <v-btn block color="primary" size="large" rounded="xl" @click="openOrder">
          Оставить заявку
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-app-bar :elevation="elevated ? 8 : 0" height="84" class="topbar">
      <v-container class="d-flex align-center">
        <button type="button" class="brand" @click="goTo('#hero')">
          <span class="brand__badge">A</span>
          <span class="brand__text">
            <strong>КурскОблБур</strong>
            <small>бурение скважин в Курске</small>
          </span>
        </button>

        <div class="nav-links d-none d-md-flex">
          <v-btn
            v-for="item in navItems"
            :key="item.href"
            variant="text"
            color="secondary"
            rounded="xl"
            @click="goTo(item.href)"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <v-spacer />

        <div class="d-none d-md-flex align-center ga-3">
          <a class="contact-chip" href="tel:+79991234567">+7 (999) 123-45-67</a>

          <v-btn
            :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="text"
            color="secondary"
            class="theme-toggle"
            @click="emit('toggleTheme')"
          />

          <v-btn color="primary" rounded="xl" size="large" @click="openOrder">
            Заказать бурение
          </v-btn>
        </div>

        <div class="d-flex d-md-none align-center ga-1">
          <v-btn
            :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="text"
            color="secondary"
            @click="emit('toggleTheme')"
          />

          <v-btn
            icon="mdi-menu"
            variant="text"
            color="secondary"
            @click="drawer = !drawer"
          />
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navItems } from '../../data/landing'

defineProps<{
  elevated: boolean
  isDark: boolean
}>()

const emit = defineEmits<{
  navigate: [href: string]
  openOrder: []
  toggleTheme: []
}>()

const drawer = ref(false)

const goTo = (href: string): void => {
  drawer.value = false
  emit('navigate', href)
}

const openOrder = (): void => {
  drawer.value = false
  emit('openOrder')
}
</script>

<style scoped>
.topbar {
  background: var(--topbar-bg) !important;
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--topbar-border);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.brand__badge {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 800;
  background: linear-gradient(135deg, #2f6bff 0%, #4ea2ff 100%);
  box-shadow: 0 16px 30px rgba(47, 107, 255, 0.24);
}

.brand__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.05;
}

.brand__text strong {
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-primary);
}

.brand__text small {
  color: var(--text-soft);
  font-size: 0.78rem;
}

.nav-links {
  margin-left: 32px;
  gap: 6px;
}

.contact-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--contact-chip-bg);
  color: var(--text-primary);
  font-weight: 700;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.contact-chip:hover {
  background: var(--contact-chip-hover);
  transform: translateY(-2px);
}

.theme-toggle {
  color: var(--text-primary);
}

.drawer-actions {
  padding: 16px 16px 8px;
}
</style>