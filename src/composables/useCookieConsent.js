import { computed, ref } from 'vue';
import { getCookie, setCookie } from '../utils/cookies';
const COOKIE_NAME = 'aquadrill_cookie_consent';
const consent = ref({
    necessary: true,
    analytics: false,
    marketing: false,
    updatedAt: null,
});
const loaded = ref(false);
const decided = ref(false);
function normalizeConsent(value) {
    if (!value || typeof value !== 'object') {
        return {
            necessary: true,
            analytics: false,
            marketing: false,
            updatedAt: null,
        };
    }
    const source = value;
    return {
        necessary: true,
        analytics: Boolean(source.analytics),
        marketing: Boolean(source.marketing),
        updatedAt: typeof source.updatedAt === 'string' ? source.updatedAt : null,
    };
}
function persistConsent(nextValue) {
    setCookie(COOKIE_NAME, JSON.stringify(nextValue), { days: 180 });
}
function loadConsent() {
    if (loaded.value || typeof document === 'undefined')
        return;
    const raw = getCookie(COOKIE_NAME);
    if (!raw) {
        loaded.value = true;
        decided.value = false;
        return;
    }
    try {
        const parsed = JSON.parse(raw);
        consent.value = normalizeConsent(parsed);
        decided.value = true;
    }
    catch {
        consent.value = {
            necessary: true,
            analytics: false,
            marketing: false,
            updatedAt: null,
        };
        decided.value = false;
    }
    loaded.value = true;
}
function acceptAll() {
    const nextValue = {
        necessary: true,
        analytics: true,
        marketing: true,
        updatedAt: new Date().toISOString(),
    };
    consent.value = nextValue;
    decided.value = true;
    persistConsent(nextValue);
}
function rejectOptional() {
    const nextValue = {
        necessary: true,
        analytics: false,
        marketing: false,
        updatedAt: new Date().toISOString(),
    };
    consent.value = nextValue;
    decided.value = true;
    persistConsent(nextValue);
}
function saveConsent(payload) {
    const nextValue = {
        necessary: true,
        analytics: payload.analytics,
        marketing: payload.marketing,
        updatedAt: new Date().toISOString(),
    };
    consent.value = nextValue;
    decided.value = true;
    persistConsent(nextValue);
}
export function useCookieConsent() {
    const showBanner = computed(() => loaded.value && !decided.value);
    const canUseAnalytics = computed(() => consent.value.analytics);
    const canUseMarketing = computed(() => consent.value.marketing);
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
    };
}
