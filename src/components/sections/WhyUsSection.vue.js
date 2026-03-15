import { nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue';
import RevealBlock from '../common/RevealBlock.vue';
import SectionHeading from '../common/SectionHeading.vue';
import { advantages } from '../../data/landing';
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
/** @type {__VLS_StyleScopedClasses['adv-col']} */ ;
/** @type {__VLS_StyleScopedClasses['adv-card']} */ ;
/** @type {__VLS_StyleScopedClasses['adv-card']} */ ;
/** @type {__VLS_StyleScopedClasses['adv-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "why",
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
    eyebrow: "Почему мы",
    title: "Закрываем весь цикл — от заявки до чистой сдачи объекта",
    text: "После обращения быстро согласуем выезд, оцениваем грунт и подбираем тип скважины под ваш участок. Работы запускаем без затягивания, а смету фиксируем заранее.",
}));
const __VLS_14 = __VLS_13({
    eyebrow: "Почему мы",
    title: "Закрываем весь цикл — от заявки до чистой сдачи объекта",
    text: "После обращения быстро согласуем выезд, оцениваем грунт и подбираем тип скважины под ваш участок. Работы запускаем без затягивания, а смету фиксируем заранее.",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_9;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ class: "mt-6" },
    dense: true,
}));
const __VLS_19 = __VLS_18({
    ...{ class: "mt-6" },
    dense: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
const { default: __VLS_22 } = __VLS_20.slots;
for (const [item, index] of __VLS_vFor((__VLS_ctx.advantages))) {
    let __VLS_23;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
        key: (item.title),
        cols: "12",
        sm: "6",
        lg: "3",
        ...{ class: "adv-col" },
    }));
    const __VLS_25 = __VLS_24({
        key: (item.title),
        cols: "12",
        sm: "6",
        lg: "3",
        ...{ class: "adv-col" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    /** @type {__VLS_StyleScopedClasses['adv-col']} */ ;
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
        ...{ class: "adv-card" },
        rounded: "xl",
        variant: "flat",
        ...{ style: (__VLS_ctx.cardMinHeight ? { minHeight: `${__VLS_ctx.cardMinHeight}px` } : undefined) },
    }));
    const __VLS_37 = __VLS_36({
        ref: (__VLS_ctx.setCardRef),
        ...{ class: "adv-card" },
        rounded: "xl",
        variant: "flat",
        ...{ style: (__VLS_ctx.cardMinHeight ? { minHeight: `${__VLS_ctx.cardMinHeight}px` } : undefined) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    /** @type {__VLS_StyleScopedClasses['adv-card']} */ ;
    const { default: __VLS_40 } = __VLS_38.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "adv-card__icon" },
    });
    /** @type {__VLS_StyleScopedClasses['adv-card__icon']} */ ;
    let __VLS_41;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
        icon: (item.icon),
        size: "30",
        color: "primary",
    }));
    const __VLS_43 = __VLS_42({
        icon: (item.icon),
        size: "30",
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.text);
    // @ts-ignore
    [advantages, setCardRef, cardMinHeight, cardMinHeight,];
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
