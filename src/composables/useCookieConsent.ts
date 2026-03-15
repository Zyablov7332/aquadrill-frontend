import { computed, ref } from 'vue'
import { getCookie, setCookie } from '../utils/cookies'

export interface CookieConsentState {
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string | null
}

const COOKIE_NAME = 'aquadrill_cookie_consent'

const consent = ref<CookieConsentState>({
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: null,
})

const loaded = ref(false)
const decided = ref(false)

function normalizeConsent(value: unknown): CookieConsentState {
  if (!value || typeof value !== 'object') {
    return {
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: null,
    }
  }

  const source = value as Partial<CookieConsentState>

  return {
    necessary: true,
    analytics: Boolean(source.analytics),
    marketing: Boolean(source.marketing),
    updatedAt: typeof source.updatedAt === 'string' ? source.updatedAt : null,
  }
}

function persistConsent(nextValue: CookieConsentState): void {
  setCookie(COOKIE_NAME, JSON.stringify(nextValue), { days: 180 })
}

function loadConsent(): void {
  if (loaded.value || typeof document === 'undefined') return

  const raw = getCookie(COOKIE_NAME)

  if (!raw) {
    loaded.value = true
    decided.value = false
    return
  }

  try {
    const parsed = JSON.parse(raw) as unknown
    consent.value = normalizeConsent(parsed)
    decided.value = true
  } catch {
    consent.value = {
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: null,
    }
    decided.value = false
  }

  loaded.value = true
}

function acceptAll(): void {
  const nextValue: CookieConsentState = {
    necessary: true,
    analytics: true,
    marketing: true,
    updatedAt: new Date().toISOString(),
  }

  consent.value = nextValue
  decided.value = true
  persistConsent(nextValue)
}

function rejectOptional(): void {
  const nextValue: CookieConsentState = {
    necessary: true,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
  }

  consent.value = nextValue
  decided.value = true
  persistConsent(nextValue)
}

function saveConsent(payload: Pick<CookieConsentState, 'analytics' | 'marketing'>): void {
  const nextValue: CookieConsentState = {
    necessary: true,
    analytics: payload.analytics,
    marketing: payload.marketing,
    updatedAt: new Date().toISOString(),
  }

  consent.value = nextValue
  decided.value = true
  persistConsent(nextValue)
}

export function useCookieConsent() {
  const showBanner = computed<boolean>(() => loaded.value && !decided.value)
  const canUseAnalytics = computed<boolean>(() => consent.value.analytics)
  const canUseMarketing = computed<boolean>(() => consent.value.marketing)

  return {
    consent,
    loaded,
    decided,
    showBanner,
    canUseAnalytics,
    canUseMarketing,
    loadConsent,
    acceptAll,
    rejectOptional,
    saveConsent,
  }
}
