import { nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue';
import RevealBlock from '../common/RevealBlock.vue';
import SectionHeading from '../common/SectionHeading.vue';
import { steps } from '../../data/landing';
const cardRefs = ref([]);
const cardMinHeight = ref(0);
const setCardRef = (target) => {
    if (!target)
        return;
    if (target instanceof HTMLElement) {
        cardRefs.value.push(target);
        return;
    }
    if ('$el' in target && target.$el instanceof HTMLElement) {
        cardRefs.value.push(target.$el);
    }
};
onBeforeUpdate(() => {
    cardRefs.value = [];
});
const updateCardHeights = async () => {
    await nextTick();
    if (!cardRefs.value.length)
        return;
    cardMinHeight.value = 0;
    await nextTick();
    let maxHeight = 0;
    for (const card of cardRefs.value) {
        const height = card.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    }
    cardMinHeight.value = maxHeight;
};
let resizeObserver = null;
const handleResize = () => {
    void updateCardHeights();
};
onMounted(async () => {
    await updateCardHeights();
    window.addEventListener('resize', handleResize, { passive: true });
    resizeObserver = new ResizeObserver(() => {
        void updateCardHeights();
    });
    cardRefs.value.forEach((card) => {
        resizeObserver?.observe(card);
    });
    if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
            void updateCardHeights();
        });
    }
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    resizeObserver?.disconnect();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['step-col']} */ ;
/** @type {__VLS_StyleScopedClasses['step-card']} */ ;
/** @type {__VLS_StyleScopedClasses['step-card']} */ ;
/** @type {__VLS_StyleScopedClasses['step-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "steps",
    ...{ class: "section section--soft" },
});
/** @type {__VLS_StyleScopedClasses['section']} */ ;
/** @type {__VLS_StyleScopedClasses['section--soft']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer} */
vContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
const __VLS_6 = RevealBlock || RevealBlock;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
const __VLS_12 = SectionHeading;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    eyebrow: "Как мы работаем",
    title: "Прозрачный процесс без лишней суеты",
    text: "Вы всегда понимаете, что происходит на каждом этапе — от первого звонка до запуска воды в доме.",
}));
const __VLS_14 = __VLS_13({
    eyebrow: "Как мы работаем",
    title: "Прозрачный процесс без лишней суеты",
    text: "Вы всегда понимаете, что происходит на каждом этапе — от первого звонка до запуска воды в доме.",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "steps-wrap mt-8" },
});
/** @type {__VLS_StyleScopedClasses['steps-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "steps-line d-none d-lg-block" },
});
/** @type {__VLS_StyleScopedClasses['steps-line']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['d-lg-block']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    dense: true,
}));
const __VLS_19 = __VLS_18({
    dense: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const { default: __VLS_22 } = __VLS_20.slots;
for (const [step, index] of __VLS_vFor((__VLS_ctx.steps))) {
    let __VLS_23;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
        key: (step.title),
        cols: "12",
        sm: "6",
        lg: "3",
        ...{ class: "step-col" },
    }));
    const __VLS_25 = __VLS_24({
        key: (step.title),
        cols: "12",
        sm: "6",
        lg: "3",
        ...{ class: "step-col" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    /** @type {__VLS_StyleScopedClasses['step-col']} */ ;
    const { default: __VLS_28 } = __VLS_26.slots;
    const __VLS_29 = RevealBlock || RevealBlock;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
        delay: (index * 100),
    }));
    const __VLS_31 = __VLS_30({
        delay: (index * 100),
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    const { default: __VLS_34 } = __VLS_32.slots;
    let __VLS_35;
    /** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
    vCard;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
        ref: (__VLS_ctx.setCardRef),
        ...{ class: "step-card" },
        rounded: "xl",
        variant: "flat",
        ...{ style: (__VLS_ctx.cardMinHeight ? { minHeight: `${__VLS_ctx.cardMinHeight}px` } : undefined) },
    }));
    const __VLS_37 = __VLS_36({
        ref: (__VLS_ctx.setCardRef),
        ...{ class: "step-card" },
        rounded: "xl",
        variant: "flat",
        ...{ style: (__VLS_ctx.cardMinHeight ? { minHeight: `${__VLS_ctx.cardMinHeight}px` } : undefined) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    /** @type {__VLS_StyleScopedClasses['step-card']} */ ;
    const { default: __VLS_40 } = __VLS_38.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-card__top" },
    });
    /** @type {__VLS_StyleScopedClasses['step-card__top']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-card__num" },
    });
    /** @type {__VLS_StyleScopedClasses['step-card__num']} */ ;
    (step.number);
    let __VLS_41;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
        icon: (step.icon),
        size: "26",
        color: "primary",
    }));
    const __VLS_43 = __VLS_42({
        icon: (step.icon),
        size: "26",
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    (step.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (step.text);
    // @ts-ignore
    [steps, setCardRef, cardMinHeight, cardMinHeight,];
    var __VLS_38;
    // @ts-ignore
    [];
    var __VLS_32;
    // @ts-ignore
    [];
    var __VLS_26;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_20;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
