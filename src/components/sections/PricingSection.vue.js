import { nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue';
import RevealBlock from '../common/RevealBlock.vue';
import SectionHeading from '../common/SectionHeading.vue';
import { services } from '../../data/landing';
const emit = defineEmits();
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
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['price-col']} */ ;
/** @type {__VLS_StyleScopedClasses['price-card']} */ ;
/** @type {__VLS_StyleScopedClasses['price-card']} */ ;
/** @type {__VLS_StyleScopedClasses['price-card__list']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "prices",
    ...{ class: "section" },
});
/** @type {__VLS_StyleScopedClasses['section']} */ ;
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
    eyebrow: "Прайс / услуги",
    title: "Понятная стоимость без скрытых доплат",
    text: "Ниже демонстрационные пакеты для лендинга. Подставьте свои реальные цены за метр или итоговые пакеты “под ключ”.",
}));
const __VLS_14 = __VLS_13({
    eyebrow: "Прайс / услуги",
    title: "Понятная стоимость без скрытых доплат",
    text: "Ниже демонстрационные пакеты для лендинга. Подставьте свои реальные цены за метр или итоговые пакеты “под ключ”.",
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
for (const [service, index] of __VLS_vFor((__VLS_ctx.services))) {
    let __VLS_23;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
        key: (service.title),
        cols: "12",
        md: "4",
        ...{ class: "price-col" },
    }));
    const __VLS_25 = __VLS_24({
        key: (service.title),
        cols: "12",
        md: "4",
        ...{ class: "price-col" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    /** @type {__VLS_StyleScopedClasses['price-col']} */ ;
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
        ...{ class: (['price-card', { 'price-card--featured': service.featured }]) },
        rounded: "xl",
        variant: "flat",
        ...{ style: (__VLS_ctx.cardMinHeight ? { minHeight: `${__VLS_ctx.cardMinHeight}px` } : undefined) },
    }));
    const __VLS_37 = __VLS_36({
        ref: (__VLS_ctx.setCardRef),
        ...{ class: (['price-card', { 'price-card--featured': service.featured }]) },
        rounded: "xl",
        variant: "flat",
        ...{ style: (__VLS_ctx.cardMinHeight ? { minHeight: `${__VLS_ctx.cardMinHeight}px` } : undefined) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    /** @type {__VLS_StyleScopedClasses['price-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['price-card--featured']} */ ;
    const { default: __VLS_40 } = __VLS_38.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "price-card__content" },
    });
    /** @type {__VLS_StyleScopedClasses['price-card__content']} */ ;
    if (service.badge) {
        let __VLS_41;
        /** @ts-ignore @type {typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components.vChip | typeof __VLS_components.VChip} */
        vChip;
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
            ...{ class: "price-card__badge mb-4" },
            color: (service.featured ? 'accent' : 'primary'),
            variant: "flat",
            rounded: "xl",
        }));
        const __VLS_43 = __VLS_42({
            ...{ class: "price-card__badge mb-4" },
            color: (service.featured ? 'accent' : 'primary'),
            variant: "flat",
            rounded: "xl",
        }, ...__VLS_functionalComponentArgsRest(__VLS_42));
        /** @type {__VLS_StyleScopedClasses['price-card__badge']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        const { default: __VLS_46 } = __VLS_44.slots;
        (service.badge);
        // @ts-ignore
        [services, setCardRef, cardMinHeight, cardMinHeight,];
        var __VLS_44;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    (service.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "price-card__value" },
    });
    /** @type {__VLS_StyleScopedClasses['price-card__value']} */ ;
    (service.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "price-card__subtitle" },
    });
    /** @type {__VLS_StyleScopedClasses['price-card__subtitle']} */ ;
    (service.subtitle);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "price-card__list" },
    });
    /** @type {__VLS_StyleScopedClasses['price-card__list']} */ ;
    for (const [item] of __VLS_vFor((service.items))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (item),
        });
        let __VLS_47;
        /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
        vIcon;
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
            icon: "mdi-check-circle-outline",
            size: "18",
            color: "primary",
        }));
        const __VLS_49 = __VLS_48({
            icon: "mdi-check-circle-outline",
            size: "18",
            color: "primary",
        }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item);
        // @ts-ignore
        [];
    }
    let __VLS_52;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
        ...{ 'onClick': {} },
        block: true,
        color: (service.featured ? 'secondary' : 'primary'),
        size: "large",
        rounded: "xl",
        ...{ class: "price-card__button" },
    }));
    const __VLS_54 = __VLS_53({
        ...{ 'onClick': {} },
        block: true,
        color: (service.featured ? 'secondary' : 'primary'),
        size: "large",
        rounded: "xl",
        ...{ class: "price-card__button" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    let __VLS_57;
    const __VLS_58 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.emit('openOrder');
                // @ts-ignore
                [emit,];
            } });
    /** @type {__VLS_StyleScopedClasses['price-card__button']} */ ;
    const { default: __VLS_59 } = __VLS_55.slots;
    // @ts-ignore
    [];
    var __VLS_55;
    var __VLS_56;
    // @ts-ignore
    [];
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
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
});
export default {};
