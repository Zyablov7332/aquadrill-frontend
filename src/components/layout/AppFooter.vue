<template>
  <v-footer class="footer">
    <v-container class="py-8">
      <div class="footer-grid">
        <div>
          <h3 class="footer-title">NAME COMPANY</h3>
          <p class="footer-text">
            Современный лендинг для услуг бурения скважин на воду с понятной структурой
            и современными анимациями.
          </p>
        </div>

        <div>
          <h4 class="footer-subtitle">Навигация</h4>
          <div class="footer-links">
            <button
              v-for="item in navItems"
              :key="item.href"
              type="button"
              class="footer-link"
              @click="emit('navigate', item.href)"
            >
              {{ item.title }}
            </button>
          </div>
        </div>

        <div>
          <h4 class="footer-subtitle">Контакты</h4>
          <div class="footer-links">
            <a
              v-for="contact in contactLinks"
              :key="contact.title"
              class="footer-link"
              :href="contact.href"
              :target="contact.href.startsWith('http') ? '_blank' : undefined"
              :rel="contact.href.startsWith('http') ? 'noopener' : undefined"
            >
              {{ contact.title }}: {{ contact.value }}
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ year }} NAME COMPANY</span>
        <span>Prod by Zyablov website</span>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { contactLinks, navItems } from '../../data/landing'

const emit = defineEmits<{
  navigate: [href: string]
  openOrder: []
}>()

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--footer-bg);
  color: var(--footer-text);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 32px;
}

.footer-title {
  margin: 0 0 12px;
  font-size: 1.4rem;
  color: #fff;
}

.footer-subtitle {
  margin: 0 0 14px;
  font-size: 1rem;
  color: #fff;
}

.footer-text {
  margin: 0;
  max-width: 420px;
  line-height: 1.75;
  color: var(--footer-muted);
}

.footer-links {
  display: grid;
  gap: 10px;
}

.footer-link {
  width: fit-content;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--footer-link);
  cursor: pointer;
  transition: color 0.25s ease;
}

.footer-link:hover {
  color: #8fb2ff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 28px;
  margin-top: 28px;
  border-top: 1px solid var(--footer-line);
  color: var(--footer-bottom);
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .footer-bottom {
    flex-direction: column;
  }
}
</style>