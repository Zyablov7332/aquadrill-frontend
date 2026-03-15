import { ref } from 'vue';
import { navItems } from '../../data/landing';
const __VLS_props = defineProps();
const emit = defineEmits();
const drawer = ref(false);
const goTo = (href) => {
    drawer.value = false;
    emit('navigate', href);
};
const openOrder = () => {
    drawer.value = false;
    emit('openOrder');
};
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
/** @type {__VLS_StyleScopedClasses['brand__text']} */ ;
/** @type {__VLS_StyleScopedClasses['brand__text']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-chip']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vNavigationDrawer | typeof __VLS_components.VNavigationDrawer | typeof __VLS_components.vNavigationDrawer | typeof __VLS_components.VNavigationDrawer} */
vNavigationDrawer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.drawer),
    location: "right",
    temporary: true,
    ...{ class: "drawer" },
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.drawer),
    location: "right",
    temporary: true,
    ...{ class: "drawer" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['drawer']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "drawer-actions" },
});
/** @type {__VLS_StyleScopedClasses['drawer-actions']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onClick': {} },
    block: true,
    variant: "outlined",
    rounded: "xl",
    color: "primary",
    prependIcon: (__VLS_ctx.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onClick': {} },
    block: true,
    variant: "outlined",
    rounded: "xl",
    color: "primary",
    prependIcon: (__VLS_ctx.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.emit('toggleTheme');
            // @ts-ignore
            [drawer, isDark, emit,];
        } });
const { default: __VLS_13 } = __VLS_9.slots;
(__VLS_ctx.isDark ? 'Светлая тема' : 'Тёмная тема');
// @ts-ignore
[isDark,];
var __VLS_9;
var __VLS_10;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.vList | typeof __VLS_components.VList | typeof __VLS_components.vList | typeof __VLS_components.VList} */
vList;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    nav: true,
}));
const __VLS_16 = __VLS_15({
    nav: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_17.slots;
for (const [item] of __VLS_vFor((__VLS_ctx.navItems))) {
    let __VLS_20;
    /** @ts-ignore @type {typeof __VLS_components.vListItem | typeof __VLS_components.VListItem} */
    vListItem;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        ...{ 'onClick': {} },
        key: (item.href),
        title: (item.title),
    }));
    const __VLS_22 = __VLS_21({
        ...{ 'onClick': {} },
        key: (item.href),
        title: (item.title),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_25;
    const __VLS_26 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.goTo(item.href);
                // @ts-ignore
                [navItems, goTo,];
            } });
    var __VLS_23;
    var __VLS_24;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_17;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "px-4 pb-6" },
});
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-6']} */ ;
let __VLS_27;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    ...{ 'onClick': {} },
    block: true,
    color: "primary",
    size: "large",
    rounded: "xl",
}));
const __VLS_29 = __VLS_28({
    ...{ 'onClick': {} },
    block: true,
    color: "primary",
    size: "large",
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
let __VLS_32;
const __VLS_33 = ({ click: {} },
    { onClick: (__VLS_ctx.openOrder) });
const { default: __VLS_34 } = __VLS_30.slots;
// @ts-ignore
[openOrder,];
var __VLS_30;
var __VLS_31;
// @ts-ignore
[];
var __VLS_3;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.vAppBar | typeof __VLS_components.VAppBar | typeof __VLS_components.vAppBar | typeof __VLS_components.VAppBar} */
vAppBar;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    elevation: (__VLS_ctx.elevated ? 8 : 0),
    height: "84",
    ...{ class: "topbar" },
}));
const __VLS_37 = __VLS_36({
    elevation: (__VLS_ctx.elevated ? 8 : 0),
    height: "84",
    ...{ class: "topbar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
const { default: __VLS_40 } = __VLS_38.slots;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer} */
vContainer;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    ...{ class: "d-flex align-center" },
}));
const __VLS_43 = __VLS_42({
    ...{ class: "d-flex align-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
const { default: __VLS_46 } = __VLS_44.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.goTo('#hero');
            // @ts-ignore
            [goTo, elevated,];
        } },
    type: "button",
    ...{ class: "brand" },
});
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "brand__badge" },
});
/** @type {__VLS_StyleScopedClasses['brand__badge']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "brand__text" },
});
/** @type {__VLS_StyleScopedClasses['brand__text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav-links d-none d-md-flex" },
});
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['d-md-flex']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.navItems))) {
    let __VLS_47;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
        ...{ 'onClick': {} },
        key: (item.href),
        variant: "text",
        color: "secondary",
        rounded: "xl",
    }));
    const __VLS_49 = __VLS_48({
        ...{ 'onClick': {} },
        key: (item.href),
        variant: "text",
        color: "secondary",
        rounded: "xl",
    }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    let __VLS_52;
    const __VLS_53 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.goTo(item.href);
                // @ts-ignore
                [navItems, goTo,];
            } });
    const { default: __VLS_54 } = __VLS_50.slots;
    (item.title);
    // @ts-ignore
    [];
    var __VLS_50;
    var __VLS_51;
    // @ts-ignore
    [];
}
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.vSpacer | typeof __VLS_components.VSpacer} */
vSpacer;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({}));
const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-none d-md-flex align-center ga-3" },
});
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['d-md-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['ga-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "contact-chip" },
    href: "tel:+79991234567",
});
/** @type {__VLS_StyleScopedClasses['contact-chip']} */ ;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
    ...{ 'onClick': {} },
    icon: (__VLS_ctx.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'),
    variant: "text",
    color: "secondary",
    ...{ class: "theme-toggle" },
}));
const __VLS_62 = __VLS_61({
    ...{ 'onClick': {} },
    icon: (__VLS_ctx.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'),
    variant: "text",
    color: "secondary",
    ...{ class: "theme-toggle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
let __VLS_65;
const __VLS_66 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.emit('toggleTheme');
            // @ts-ignore
            [isDark, emit,];
        } });
/** @type {__VLS_StyleScopedClasses['theme-toggle']} */ ;
var __VLS_63;
var __VLS_64;
let __VLS_67;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
    ...{ 'onClick': {} },
    color: "primary",
    rounded: "xl",
    size: "large",
}));
const __VLS_69 = __VLS_68({
    ...{ 'onClick': {} },
    color: "primary",
    rounded: "xl",
    size: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
let __VLS_72;
const __VLS_73 = ({ click: {} },
    { onClick: (__VLS_ctx.openOrder) });
const { default: __VLS_74 } = __VLS_70.slots;
// @ts-ignore
[openOrder,];
var __VLS_70;
var __VLS_71;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex d-md-none align-center ga-1" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['d-md-none']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['ga-1']} */ ;
let __VLS_75;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
    ...{ 'onClick': {} },
    icon: (__VLS_ctx.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'),
    variant: "text",
    color: "secondary",
}));
const __VLS_77 = __VLS_76({
    ...{ 'onClick': {} },
    icon: (__VLS_ctx.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'),
    variant: "text",
    color: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
let __VLS_80;
const __VLS_81 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.emit('toggleTheme');
            // @ts-ignore
            [isDark, emit,];
        } });
var __VLS_78;
var __VLS_79;
let __VLS_82;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({
    ...{ 'onClick': {} },
    icon: "mdi-menu",
    variant: "text",
    color: "secondary",
}));
const __VLS_84 = __VLS_83({
    ...{ 'onClick': {} },
    icon: "mdi-menu",
    variant: "text",
    color: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_83));
let __VLS_87;
const __VLS_88 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.drawer = !__VLS_ctx.drawer;
            // @ts-ignore
            [drawer, drawer,];
        } });
var __VLS_85;
var __VLS_86;
// @ts-ignore
[];
var __VLS_44;
// @ts-ignore
[];
var __VLS_38;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
