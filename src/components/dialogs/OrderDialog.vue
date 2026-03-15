<template>
  <div>
    <v-dialog v-model="isOpen" max-width="880">
      <v-card class="dialog-card" rounded="xl">
        <v-card-text class="pa-0">
          <v-row no-gutters>
            <v-col cols="12" md="6" class="dialog-info">
              <div class="section-eyebrow">Форма заказа</div>
              <h3 class="dialog-title">Оставьте заявку или свяжитесь напрямую</h3>
              <p class="dialog-text">
                Заполните форму, а если удобнее — напишите в Telegram, позвоните или
                отправьте письмо на почту.
              </p>

              <div class="contact-list">
                <a
                  v-for="contact in contactLinks"
                  :key="contact.title"
                  class="contact-link"
                  :href="contact.href"
                  :target="contact.href.startsWith('http') ? '_blank' : undefined"
                  :rel="contact.href.startsWith('http') ? 'noopener' : undefined"
                >
                  <span class="contact-link__icon" :style="{ background: contact.tint }">
                    <v-icon :icon="contact.icon" size="22" />
                  </span>

                  <span class="contact-link__body">
                    <small>{{ contact.title }}</small>
                    <strong>{{ contact.value }}</strong>
                  </span>
                </a>
              </div>
            </v-col>

            <v-col cols="12" md="6" class="dialog-form">
              <h3 class="mb-4 dialog-form__title">Запросить расчёт</h3>

              <v-text-field
                v-model="form.name"
                label="Ваше имя"
                variant="outlined"
                rounded="xl"
                hide-details="auto"
                class="mb-3"
              />

              <v-text-field
                v-model="form.phone"
                label="Телефон"
                variant="outlined"
                rounded="xl"
                hide-details="auto"
                class="mb-3"
              />

              <v-textarea
                v-model="form.comment"
                label="Комментарий"
                variant="outlined"
                rounded="xl"
                rows="4"
                hide-details="auto"
                class="mb-4"
              />

              <v-btn
                block
                color="primary"
                size="large"
                rounded="xl"
                :loading="loading"
                :disabled="loading"
                @click="submitOrder"
              >
                Отправить заявку
              </v-btn>

              <p class="dialog-note">
                Сейчас здесь демо-отправка. Для реального проекта подключи API,
                Telegram-бота или почтовый сервис.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" location="bottom right" color="secondary">
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { contactLinks } from '../../data/landing'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = computed<boolean>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const snackbar = ref(false)
const snackbarText = ref('')
const loading = ref(false)

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')

const form = reactive({
  name: '',
  phone: '',
  comment: '',
})

const submitOrder = async (): Promise<void> => {
  if (!form.name.trim() || !form.phone.trim()) {
    snackbarText.value = 'Заполните имя и телефон.'
    snackbar.value = true
    return
  }

  loading.value = true

  try {
    const response = await fetch(`${apiBaseUrl}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        comment: form.comment,
        pageUrl: window.location.href,
        source: 'landing-order-dialog',
      }),
    })

    const data = (await response.json()) as { ok?: boolean; message?: string }

    if (!response.ok || !data.ok) {
      throw new Error(data.message || 'Ошибка отправки заявки.')
    }

    snackbarText.value = 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.'
    snackbar.value = true
    isOpen.value = false

    form.name = ''
    form.phone = ''
    form.comment = ''
  } catch (error) {
    console.error(error)
    snackbarText.value = 'Не удалось отправить заявку. Попробуйте позже.'
    snackbar.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.dialog-card {
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-1);
  background: var(--surface-card-solid);
}

.dialog-info {
  padding: 34px;
  background: var(--dialog-info-bg);
}

.dialog-form {
  padding: 34px;
  background: var(--surface-card-solid);
}

.dialog-title {
  margin: 0 0 14px;
  font-size: 2rem;
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--text-primary);
}

.dialog-form__title {
  color: var(--text-primary);
}

.dialog-text {
  margin: 0 0 26px;
  color: var(--text-muted);
  line-height: 1.75;
}

.contact-list {
  display: grid;
  gap: 14px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-radius: 20px;
  background: var(--contact-link-bg);
  border: 1px solid var(--contact-link-border);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-link:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-1);
}

.contact-link__icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  color: var(--text-primary);
}

.contact-link__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-link__body small {
  color: var(--text-soft);
}

.contact-link__body strong {
  font-size: 1rem;
  color: var(--text-primary);
}

.dialog-note {
  margin: 14px 0 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-soft);
}

@media (max-width: 600px) {
  .dialog-info,
  .dialog-form {
    padding: 24px;
  }
}
</style>