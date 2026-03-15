import { onMounted, onUnmounted, ref } from 'vue';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import WhyUsSection from './components/sections/WhyUsSection.vue';
import PricingSection from './components/sections/PricingSection.vue';
import ProcessSection from './components/sections/ProcessSection.vue';
import CtaSection from './components/sections/CtaSection.vue';
import GallerySection from './components/sections/GallerySection.vue';
import OrderDialog from './components/dialogs/OrderDialog.vue';
import CookieConsent from './components/common/CookieConsent.vue';
import { useThemeMode } from './composables/useThemeMode';
import { useCookieConsent } from './composables/useCookieConsent';
const dialog = ref(false);
const elevated = ref(false);
const { isDark, toggleTheme } = useThemeMode();
const { loadConsent } = useCookieConsent();
const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
const handleScroll = () => {
    elevated.value = window.scrollY > 12;
};
onMounted(() => {
    loadConsent();
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
});
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vApp | typeof __VLS_components.VApp | typeof __VLS_components.vApp | typeof __VLS_components.VApp} */
vApp;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "app-shell" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "app-shell" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['app-shell']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
const __VLS_7 = AppHeader;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ 'onNavigate': {} },
    ...{ 'onOpenOrder': {} },
    ...{ 'onToggleTheme': {} },
    elevated: (__VLS_ctx.elevated),
    isDark: (__VLS_ctx.isDark),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onNavigate': {} },
    ...{ 'onOpenOrder': {} },
    ...{ 'onToggleTheme': {} },
    elevated: (__VLS_ctx.elevated),
    isDark: (__VLS_ctx.isDark),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
const __VLS_13 = ({ navigate: {} },
    { onNavigate: (__VLS_ctx.scrollToSection) });
const __VLS_14 = ({ openOrder: {} },
    { onOpenOrder: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [elevated, isDark, scrollToSection, dialog,];
        } });
const __VLS_15 = ({ toggleTheme: {} },
    { onToggleTheme: (__VLS_ctx.toggleTheme) });
var __VLS_10;
var __VLS_11;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components.vMain | typeof __VLS_components.VMain} */
vMain;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_21 } = __VLS_19.slots;
const __VLS_22 = HeroSection;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    ...{ 'onNavigate': {} },
    ...{ 'onOpenOrder': {} },
}));
const __VLS_24 = __VLS_23({
    ...{ 'onNavigate': {} },
    ...{ 'onOpenOrder': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
let __VLS_27;
const __VLS_28 = ({ navigate: {} },
    { onNavigate: (__VLS_ctx.scrollToSection) });
const __VLS_29 = ({ openOrder: {} },
    { onOpenOrder: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [scrollToSection, dialog, toggleTheme,];
        } });
var __VLS_25;
var __VLS_26;
const __VLS_30 = WhyUsSection;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const __VLS_35 = PricingSection;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    ...{ 'onOpenOrder': {} },
}));
const __VLS_37 = __VLS_36({
    ...{ 'onOpenOrder': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
let __VLS_40;
const __VLS_41 = ({ openOrder: {} },
    { onOpenOrder: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [dialog,];
        } });
var __VLS_38;
var __VLS_39;
const __VLS_42 = ProcessSection;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({}));
const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
const __VLS_47 = CtaSection;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    ...{ 'onOpenOrder': {} },
}));
const __VLS_49 = __VLS_48({
    ...{ 'onOpenOrder': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
let __VLS_52;
const __VLS_53 = ({ openOrder: {} },
    { onOpenOrder: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [dialog,];
        } });
var __VLS_50;
var __VLS_51;
const __VLS_54 = GallerySection;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({}));
const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
// @ts-ignore
[];
var __VLS_19;
const __VLS_59 = AppFooter;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    ...{ 'onNavigate': {} },
    ...{ 'onOpenOrder': {} },
}));
const __VLS_61 = __VLS_60({
    ...{ 'onNavigate': {} },
    ...{ 'onOpenOrder': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
let __VLS_64;
const __VLS_65 = ({ navigate: {} },
    { onNavigate: (__VLS_ctx.scrollToSection) });
const __VLS_66 = ({ openOrder: {} },
    { onOpenOrder: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [scrollToSection, dialog,];
        } });
var __VLS_62;
var __VLS_63;
const __VLS_67 = OrderDialog;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
    modelValue: (__VLS_ctx.dialog),
}));
const __VLS_69 = __VLS_68({
    modelValue: (__VLS_ctx.dialog),
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
const __VLS_72 = CookieConsent;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({}));
const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
// @ts-ignore
[dialog,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
