import { computed, onMounted, onUnmounted, ref } from 'vue';
import RevealBlock from '../common/RevealBlock.vue';
const emit = defineEmits();
const heroSlides = ref([
    {
        id: 1,
        eyebrow: 'Бурение скважин на воду для дома, дачи и бизнеса',
        title: 'Бурение скважин ',
        accent: 'в Курске',
        shortTitle: 'Скважины',
        description: 'Абиссинские, песчаные и артезианские скважины с подбором насоса, обсадной колонны и автоматики. Работаем по договору и с гарантией.',
        image: 'https://i.pinimg.com/1200x/21/1a/d8/211ad85f92e12fa8b909036291cf34f2.jpg',
    },
    {
        id: 2,
        eyebrow: 'Оперативный выезд и оценка участка',
        title: 'Подберём лучшее решение ',
        accent: 'под ваш грунт',
        shortTitle: 'Подбор',
        description: 'Оцениваем особенности участка, глубину водоносного слоя и предлагаем оптимальный тип скважины без лишних переплат.',
        image: 'https://i.pinimg.com/1200x/92/e1/8e/92e18efdf442b584731c027610ca65c5.jpg',
    },
    {
        id: 3,
        eyebrow: 'Монтаж под ключ и аккуратная сдача объекта',
        title: 'Запуск воды ',
        accent: 'без лишней суеты',
        shortTitle: 'Под ключ',
        description: 'Выполняем бурение, обсадку, подбор оборудования и сдачу объекта в чистом виде. После работ остаются документы и понятный результат.',
        image: 'https://i.pinimg.com/1200x/92/e1/8e/92e18efdf442b584731c027610ca65c5.jpg',
    },
]);
const heroHighlights = [
    {
        title: 'Выезд за 24 часа',
        text: 'Оперативно приезжаем на участок и оцениваем условия для бурения.',
        icon: 'mdi-truck-fast-outline',
    },
    {
        title: 'Смета до начала работ',
        text: 'Фиксируем понятную стоимость и объясняем, из чего она складывается.',
        icon: 'mdi-file-document-check-outline',
    },
    {
        title: 'Гарантия и паспорт',
        text: 'Передаём готовый объект, документы и рекомендации по эксплуатации.',
        icon: 'mdi-shield-check-outline',
    },
];
const currentSlide = ref(0);
const autoplayDelay = 6000;
let autoplayTimer = null;
const activeSlide = computed(() => heroSlides.value[currentSlide.value]);
const clearAutoplay = () => {
    if (autoplayTimer !== null) {
        window.clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
};
const startAutoplay = () => {
    clearAutoplay();
    autoplayTimer = window.setInterval(() => {
        nextSlide();
    }, autoplayDelay);
};
const pauseAutoplay = () => {
    clearAutoplay();
};
const resumeAutoplay = () => {
    startAutoplay();
};
const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length;
};
const goToSlide = (index) => {
    currentSlide.value = index;
    startAutoplay();
};
onMounted(() => {
    startAutoplay();
});
onUnmounted(() => {
    clearAutoplay();
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
/** @type {__VLS_StyleScopedClasses['hero-line-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__item']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__dot']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__item']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__label']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__item--active']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__label']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__item--active']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__label']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__label']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__label']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__dot']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__item--active']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-line-nav__dot']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-btn--ghost']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-info-card__body']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-info-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-info-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ onMouseenter: (__VLS_ctx.pauseAutoplay) },
    ...{ onMouseleave: (__VLS_ctx.resumeAutoplay) },
    id: "hero",
    ...{ class: "hero-section" },
});
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-carousel" },
});
/** @type {__VLS_StyleScopedClasses['hero-carousel']} */ ;
for (const [slide, index] of __VLS_vFor((__VLS_ctx.heroSlides))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (slide.id),
        ...{ class: "hero-slide" },
        ...{ class: ({ 'hero-slide--active': index === __VLS_ctx.currentSlide }) },
        ...{ style: ({ backgroundImage: `url(${slide.image})` }) },
        'aria-hidden': (index !== __VLS_ctx.currentSlide),
    });
    /** @type {__VLS_StyleScopedClasses['hero-slide']} */ ;
    /** @type {__VLS_StyleScopedClasses['hero-slide--active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "hero-slide__overlay" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-slide__overlay']} */ ;
    // @ts-ignore
    [pauseAutoplay, resumeAutoplay, heroSlides, currentSlide, currentSlide,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-noise" },
});
/** @type {__VLS_StyleScopedClasses['hero-noise']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer} */
vContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "hero-container" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "hero-container" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['hero-container']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ class: "fill-height align-end align-lg-center" },
}));
const __VLS_8 = __VLS_7({
    ...{ class: "fill-height align-end align-lg-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['fill-height']} */ ;
/** @type {__VLS_StyleScopedClasses['align-end']} */ ;
/** @type {__VLS_StyleScopedClasses['align-lg-center']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    cols: "12",
    lg: "7",
    xl: "6",
}));
const __VLS_14 = __VLS_13({
    cols: "12",
    lg: "7",
    xl: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
const __VLS_18 = RevealBlock || RevealBlock;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({}));
const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-content" },
});
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-badge" },
});
/** @type {__VLS_StyleScopedClasses['hero-badge']} */ ;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
vIcon;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    icon: "mdi-water-outline",
    size: "18",
}));
const __VLS_26 = __VLS_25({
    icon: "mdi-water-outline",
    size: "18",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.activeSlide.eyebrow);
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "hero-title" },
});
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
(__VLS_ctx.activeSlide.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "gradient-text" },
});
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
(__VLS_ctx.activeSlide.accent);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "hero-copy" },
});
/** @type {__VLS_StyleScopedClasses['hero-copy']} */ ;
(__VLS_ctx.activeSlide.description);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-actions" },
});
/** @type {__VLS_StyleScopedClasses['hero-actions']} */ ;
let __VLS_29;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    ...{ 'onClick': {} },
    color: "primary",
    size: "x-large",
    rounded: "xl",
    ...{ class: "hero-btn hero-btn--primary" },
}));
const __VLS_31 = __VLS_30({
    ...{ 'onClick': {} },
    color: "primary",
    size: "x-large",
    rounded: "xl",
    ...{ class: "hero-btn hero-btn--primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
let __VLS_34;
const __VLS_35 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.emit('openOrder');
            // @ts-ignore
            [activeSlide, activeSlide, activeSlide, activeSlide, emit,];
        } });
/** @type {__VLS_StyleScopedClasses['hero-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-btn--primary']} */ ;
const { default: __VLS_36 } = __VLS_32.slots;
// @ts-ignore
[];
var __VLS_32;
var __VLS_33;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "white",
    size: "x-large",
    rounded: "xl",
    ...{ class: "hero-btn hero-btn--ghost" },
}));
const __VLS_39 = __VLS_38({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "white",
    size: "x-large",
    rounded: "xl",
    ...{ class: "hero-btn hero-btn--ghost" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_42;
const __VLS_43 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.emit('navigate', '#prices');
            // @ts-ignore
            [emit,];
        } });
/** @type {__VLS_StyleScopedClasses['hero-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-btn--ghost']} */ ;
const { default: __VLS_44 } = __VLS_40.slots;
// @ts-ignore
[];
var __VLS_40;
var __VLS_41;
// @ts-ignore
[];
var __VLS_21;
// @ts-ignore
[];
var __VLS_15;
// @ts-ignore
[];
var __VLS_9;
const __VLS_45 = RevealBlock || RevealBlock;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    delay: (120),
}));
const __VLS_47 = __VLS_46({
    delay: (120),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
const { default: __VLS_50 } = __VLS_48.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-info-grid" },
});
/** @type {__VLS_StyleScopedClasses['hero-info-grid']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.heroHighlights))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        key: (item.title),
        ...{ class: "hero-info-card" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-info-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "hero-info-card__icon" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-info-card__icon']} */ ;
    let __VLS_51;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
        icon: (item.icon),
        size: "24",
        color: "white",
    }));
    const __VLS_53 = __VLS_52({
        icon: (item.icon),
        size: "24",
        color: "white",
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "hero-info-card__body" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-info-card__body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.text);
    // @ts-ignore
    [heroHighlights,];
}
// @ts-ignore
[];
var __VLS_48;
const __VLS_56 = RevealBlock || RevealBlock;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    delay: (180),
}));
const __VLS_58 = __VLS_57({
    delay: (180),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
const { default: __VLS_61 } = __VLS_59.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero-line-nav" },
    role: "tablist",
    'aria-label': "Навигация по слайдам",
});
/** @type {__VLS_StyleScopedClasses['hero-line-nav']} */ ;
for (const [slide, index] of __VLS_vFor((__VLS_ctx.heroSlides))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.goToSlide(index);
                // @ts-ignore
                [heroSlides, goToSlide,];
            } },
        key: (slide.id),
        type: "button",
        ...{ class: "hero-line-nav__item" },
        ...{ class: ({ 'hero-line-nav__item--active': index === __VLS_ctx.currentSlide }) },
        'aria-label': (`Переключить на слайд ${index + 1}: ${slide.shortTitle}`),
        'aria-current': (index === __VLS_ctx.currentSlide ? 'true' : 'false'),
    });
    /** @type {__VLS_StyleScopedClasses['hero-line-nav__item']} */ ;
    /** @type {__VLS_StyleScopedClasses['hero-line-nav__item--active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "hero-line-nav__dot" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-line-nav__dot']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "hero-line-nav__label" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-line-nav__label']} */ ;
    (slide.shortTitle);
    // @ts-ignore
    [currentSlide, currentSlide,];
}
// @ts-ignore
[];
var __VLS_59;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
});
export default {};
