import { onMounted, onUnmounted, ref } from 'vue';
const __VLS_props = withDefaults(defineProps(), {
    delay: 0,
});
const root = ref(null);
const visible = ref(false);
let observer = null;
onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                visible.value = true;
                observer?.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });
    if (root.value) {
        observer.observe(root.value);
    }
});
onUnmounted(() => {
    observer?.disconnect();
});
const __VLS_defaults = {
    delay: 0,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['reveal-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: "root",
    ...{ class: "reveal-block" },
    ...{ class: ({ 'is-visible': __VLS_ctx.visible }) },
    ...{ style: ({ transitionDelay: `${__VLS_ctx.delay}ms` }) },
});
/** @type {__VLS_StyleScopedClasses['reveal-block']} */ ;
/** @type {__VLS_StyleScopedClasses['is-visible']} */ ;
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[visible, delay,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
