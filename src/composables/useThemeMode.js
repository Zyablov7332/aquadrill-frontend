import { computed, onMounted, ref } from 'vue';
import { useTheme } from 'vuetify';
const STORAGE_KEY = 'aquadrill-theme';
export function useThemeMode() {
    const vuetifyTheme = useTheme();
    const mode = ref('light');
    const isDark = computed(() => mode.value === 'dark');
    const applyTheme = (value) => {
        mode.value = value;
        vuetifyTheme.global.name.value = value === 'dark' ? 'landingDark' : 'landingLight';
        document.documentElement.setAttribute('data-theme', value);
        localStorage.setItem(STORAGE_KEY, value);
    };
    const toggleTheme = () => {
        applyTheme(isDark.value ? 'light' : 'dark');
    };
    onMounted(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
            applyTheme(saved);
            return;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    });
    return {
        mode,
        isDark,
        applyTheme,
        toggleTheme,
    };
}
