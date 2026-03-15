import RevealBlock from '../common/RevealBlock.vue';
import SectionHeading from '../common/SectionHeading.vue';
import { galleryItems } from '../../data/landing';
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['gallery-card__overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-card__overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-card']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-card']} */ ;
/** @type {__VLS_StyleScopedClasses['v-img__img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "gallery",
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
    eyebrow: "Галерея / наши работы",
    title: "Фото завершённых объектов",
    text: "В демо используются placeholder-изображения. Замените ссылки на реальные фото вашей техники, процесса бурения и готовых скважин.",
}));
const __VLS_14 = __VLS_13({
    eyebrow: "Галерея / наши работы",
    title: "Фото завершённых объектов",
    text: "В демо используются placeholder-изображения. Замените ссылки на реальные фото вашей техники, процесса бурения и готовых скважин.",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_9;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    dense: true,
    ...{ class: "mt-6" },
}));
const __VLS_19 = __VLS_18({
    dense: true,
    ...{ class: "mt-6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
const { default: __VLS_22 } = __VLS_20.slots;
for (const [item, index] of __VLS_vFor((__VLS_ctx.galleryItems))) {
    let __VLS_23;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
        key: (item.title),
        cols: "12",
        md: (item.md),
        lg: (item.lg),
    }));
    const __VLS_25 = __VLS_24({
        key: (item.title),
        cols: "12",
        md: (item.md),
        lg: (item.lg),
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
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
        ...{ class: "gallery-card" },
        rounded: "xl",
        variant: "flat",
    }));
    const __VLS_37 = __VLS_36({
        ...{ class: "gallery-card" },
        rounded: "xl",
        variant: "flat",
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    /** @type {__VLS_StyleScopedClasses['gallery-card']} */ ;
    const { default: __VLS_40 } = __VLS_38.slots;
    let __VLS_41;
    /** @ts-ignore @type {typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components.vImg | typeof __VLS_components.VImg} */
    vImg;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
        src: (item.src),
        height: (item.height),
        cover: true,
    }));
    const __VLS_43 = __VLS_42({
        src: (item.src),
        height: (item.height),
        cover: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    const { default: __VLS_46 } = __VLS_44.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "gallery-card__overlay" },
    });
    /** @type {__VLS_StyleScopedClasses['gallery-card__overlay']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.subtitle);
    // @ts-ignore
    [galleryItems,];
    var __VLS_44;
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
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
