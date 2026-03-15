<template>
  <div>
    <transition name="cookie-fade">
      <div v-if="showBanner" class="cookie-banner">
        <div class="cookie-banner__inner">
          <div class="cookie-banner__content">
            <div class="cookie-banner__title">Мы используем cookies</div>
            <p class="cookie-banner__text">
              Используем обязательные cookies для работы сайта, а аналитические и
              маркетинговые — только с вашего согласия.
            </p>
          </div>

          <div class="cookie-banner__actions">
            <v-btn variant="outlined" rounded="xl" color="secondary" @click="openSettings">
              Настроить
            </v-btn>

            <v-btn variant="text" rounded="xl" color="secondary" @click="rejectOptional">
              Только необходимые
            </v-btn>

            <v-btn color="primary" rounded="xl" @click="acceptAll">
              Принять все
            </v-btn>
          </div>
        </div>
      </div>
    </transition>

    <v-dialog v-model="dialog" max-width="640">
      <v-card class="cookie-dialog" rounded="xl">
        <v-card-title class="cookie-dialog__title">
          Настройки cookies
        </v-card-title>

        <v-card-text>
          <div class="cookie-option">
            <div class="cookie-option__content">
              <strong>Необходимые</strong>
              <p>Нужны для базовой работы сайта. Отключить нельзя.</p>
            </div>

            <v-switch
              :model-value="true"
              color="primary"
              inset
              hide-details
              disabled
            />
          </div>

          <div class="cookie-option">
            <div class="cookie-option__content">
              <strong>Аналитические</strong>
              <p>Помогают понимать, как пользователи пользуются сайтом.</p>
            </div>

            <v-switch
              v-model="draft.analytics"
              color="primary"
              inset
              hide-details
            />
          </div>

          <div class="cookie-option">
            <div class="cookie-option__content">
              <strong>Маркетинговые</strong>
              <p>Нужны для рекламных сценариев и ретаргетинга.</p>
            </div>

            <v-switch
              v-model="draft.marketing"
              color="primary"
              inset
              hide-details
            />
          </div>
        </v-card-text>

        <v-card-actions class="cookie-dialog__actions">
          <v-btn variant="text" color="secondary" rounded="xl" @click="dialog = false">
            Отмена
          </v-btn>

          <v-spacer />

          <v-btn variant="outlined" color="secondary" rounded="xl" @click="rejectOptional">
            Только необходимые
          </v-btn>

          <v-btn color="primary" rounded="xl" @click="saveSettings">
            Сохранить выбор
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useCookieConsent } from '../../composables/useCookieConsent'

const {
  consent,
  showBanner,
  acceptAll,
  rejectOptional,
  saveConsent,
} = useCookieConsent()

const dialog = ref(false)

const draft = reactive({
  analytics: false,
  marketing: false,
})

const openSettings = (): void => {
  draft.analytics = consent.value.analytics
  draft.marketing = consent.value.marketing
  dialog.value = true
}

const saveSettings = (): void => {
  saveConsent({
    analytics: draft.analytics,
    marketing: draft.marketing,
  })

  dialog.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 1200;
}

.cookie-banner__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  border-radius: 24px;
  background: var(--surface-card-solid);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-2);
  backdrop-filter: blur(14px);
}

.cookie-banner__content {
  min-width: 0;
}

.cookie-banner__title {
  margin-bottom: 8px;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text-primary);
}

.cookie-banner__text {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.65;
}

.cookie-banner__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.cookie-dialog {
  background: var(--surface-card-solid);
  border: 1px solid var(--border-color);
}

.cookie-dialog__title {
  padding: 22px 24px 8px;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
}

.cookie-dialog__actions {
  padding: 0 24px 22px;
}

.cookie-option {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid var(--border-color);
}

.cookie-option:last-child {
  border-bottom: 0;
}

.cookie-option__content strong {
  display: block;
  margin-bottom: 6px;
  color: var(--text-primary);
}

.cookie-option__content p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
}

.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

@media (max-width: 960px) {
  .cookie-banner__inner {
    grid-template-columns: 1fr;
  }

  .cookie-banner__actions {
    justify-content: stretch;
  }

  .cookie-banner__actions :deep(.v-btn) {
    flex: 1 1 100%;
  }
}
</style>
