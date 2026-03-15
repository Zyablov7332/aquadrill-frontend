import { reactive, ref } from 'vue';
import { useCookieConsent } from '../../composables/useCookieConsent';
const { consent, showBanner, acceptAll, rejectOptional, saveConsent, } = useCookieConsent();
const dialog = ref(false);
const draft = reactive({
    analytics: false,
    marketing: false,
});
const openSettings = () => {
    draft.analytics = consent.value.analytics;
    draft.marketing = consent.value.marketing;
    dialog.value = true;
};
const saveSettings = () => {
    saveConsent({
        analytics: draft.analytics,
        marketing: draft.marketing,
    });
    dialog.value = false;
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['cookie-option']} */ ;
/** @type {__VLS_StyleScopedClasses['cookie-option__content']} */ ;
/** @type {__VLS_StyleScopedClasses['cookie-banner__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['cookie-banner__actions']} */ ;
/** @type {__VLS_StyleScopedClasses['cookie-banner__actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.transition | typeof __VLS_components.Transition | typeof __VLS_components.transition | typeof __VLS_components.Transition} */
transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    name: "cookie-fade",
}));
const __VLS_2 = __VLS_1({
    name: "cookie-fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
if (__VLS_ctx.showBanner) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cookie-banner" },
    });
    /** @type {__VLS_StyleScopedClasses['cookie-banner']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cookie-banner__inner" },
    });
    /** @type {__VLS_StyleScopedClasses['cookie-banner__inner']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cookie-banner__content" },
    });
    /** @type {__VLS_StyleScopedClasses['cookie-banner__content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cookie-banner__title" },
    });
    /** @type {__VLS_StyleScopedClasses['cookie-banner__title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "cookie-banner__text" },
    });
    /** @type {__VLS_StyleScopedClasses['cookie-banner__text']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cookie-banner__actions" },
    });
    /** @type {__VLS_StyleScopedClasses['cookie-banner__actions']} */ ;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ 'onClick': {} },
        variant: "outlined",
        rounded: "xl",
        color: "secondary",
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        variant: "outlined",
        rounded: "xl",
        color: "secondary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_11;
    const __VLS_12 = ({ click: {} },
        { onClick: (__VLS_ctx.openSettings) });
    const { default: __VLS_13 } = __VLS_9.slots;
    // @ts-ignore
    [showBanner, openSettings,];
    var __VLS_9;
    var __VLS_10;
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        ...{ 'onClick': {} },
        variant: "text",
        rounded: "xl",
        color: "secondary",
    }));
    const __VLS_16 = __VLS_15({
        ...{ 'onClick': {} },
        variant: "text",
        rounded: "xl",
        color: "secondary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_19;
    const __VLS_20 = ({ click: {} },
        { onClick: (__VLS_ctx.rejectOptional) });
    const { default: __VLS_21 } = __VLS_17.slots;
    // @ts-ignore
    [rejectOptional,];
    var __VLS_17;
    var __VLS_18;
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        ...{ 'onClick': {} },
        color: "primary",
        rounded: "xl",
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onClick': {} },
        color: "primary",
        rounded: "xl",
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_27;
    const __VLS_28 = ({ click: {} },
        { onClick: (__VLS_ctx.acceptAll) });
    const { default: __VLS_29 } = __VLS_25.slots;
    // @ts-ignore
    [acceptAll,];
    var __VLS_25;
    var __VLS_26;
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.vDialog | typeof __VLS_components.VDialog | typeof __VLS_components.vDialog | typeof __VLS_components.VDialog} */
vDialog;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "640",
}));
const __VLS_32 = __VLS_31({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "640",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    ...{ class: "cookie-dialog" },
    rounded: "xl",
}));
const __VLS_38 = __VLS_37({
    ...{ class: "cookie-dialog" },
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
/** @type {__VLS_StyleScopedClasses['cookie-dialog']} */ ;
const { default: __VLS_41 } = __VLS_39.slots;
let __VLS_42;
/** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
vCardTitle;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    ...{ class: "cookie-dialog__title" },
}));
const __VLS_44 = __VLS_43({
    ...{ class: "cookie-dialog__title" },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
/** @type {__VLS_StyleScopedClasses['cookie-dialog__title']} */ ;
const { default: __VLS_47 } = __VLS_45.slots;
// @ts-ignore
[dialog,];
var __VLS_45;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cookie-option" },
});
/** @type {__VLS_StyleScopedClasses['cookie-option']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cookie-option__content" },
});
/** @type {__VLS_StyleScopedClasses['cookie-option__content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.vSwitch | typeof __VLS_components.VSwitch} */
vSwitch;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    modelValue: (true),
    color: "primary",
    inset: true,
    hideDetails: true,
    disabled: true,
}));
const __VLS_56 = __VLS_55({
    modelValue: (true),
    color: "primary",
    inset: true,
    hideDetails: true,
    disabled: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cookie-option" },
});
/** @type {__VLS_StyleScopedClasses['cookie-option']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cookie-option__content" },
});
/** @type {__VLS_StyleScopedClasses['cookie-option__content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
let __VLS_59;
/** @ts-ignore @type {typeof __VLS_components.vSwitch | typeof __VLS_components.VSwitch} */
vSwitch;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    modelValue: (__VLS_ctx.draft.analytics),
    color: "primary",
    inset: true,
    hideDetails: true,
}));
const __VLS_61 = __VLS_60({
    modelValue: (__VLS_ctx.draft.analytics),
    color: "primary",
    inset: true,
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cookie-option" },
});
/** @type {__VLS_StyleScopedClasses['cookie-option']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cookie-option__content" },
});
/** @type {__VLS_StyleScopedClasses['cookie-option__content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.vSwitch | typeof __VLS_components.VSwitch} */
vSwitch;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    modelValue: (__VLS_ctx.draft.marketing),
    color: "primary",
    inset: true,
    hideDetails: true,
}));
const __VLS_66 = __VLS_65({
    modelValue: (__VLS_ctx.draft.marketing),
    color: "primary",
    inset: true,
    hideDetails: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
// @ts-ignore
[draft, draft,];
var __VLS_51;
let __VLS_69;
/** @ts-ignore @type {typeof __VLS_components.vCardActions | typeof __VLS_components.VCardActions | typeof __VLS_components.vCardActions | typeof __VLS_components.VCardActions} */
vCardActions;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    ...{ class: "cookie-dialog__actions" },
}));
const __VLS_71 = __VLS_70({
    ...{ class: "cookie-dialog__actions" },
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
/** @type {__VLS_StyleScopedClasses['cookie-dialog__actions']} */ ;
const { default: __VLS_74 } = __VLS_72.slots;
let __VLS_75;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
    ...{ 'onClick': {} },
    variant: "text",
    color: "secondary",
    rounded: "xl",
}));
const __VLS_77 = __VLS_76({
    ...{ 'onClick': {} },
    variant: "text",
    color: "secondary",
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
let __VLS_80;
const __VLS_81 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.dialog = false;
            // @ts-ignore
            [dialog,];
        } });
const { default: __VLS_82 } = __VLS_78.slots;
// @ts-ignore
[];
var __VLS_78;
var __VLS_79;
let __VLS_83;
/** @ts-ignore @type {typeof __VLS_components.vSpacer | typeof __VLS_components.VSpacer} */
vSpacer;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({}));
const __VLS_85 = __VLS_84({}, ...__VLS_functionalComponentArgsRest(__VLS_84));
let __VLS_88;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "secondary",
    rounded: "xl",
}));
const __VLS_90 = __VLS_89({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "secondary",
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
let __VLS_93;
const __VLS_94 = ({ click: {} },
    { onClick: (__VLS_ctx.rejectOptional) });
const { default: __VLS_95 } = __VLS_91.slots;
// @ts-ignore
[rejectOptional,];
var __VLS_91;
var __VLS_92;
let __VLS_96;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
    ...{ 'onClick': {} },
    color: "primary",
    rounded: "xl",
}));
const __VLS_98 = __VLS_97({
    ...{ 'onClick': {} },
    color: "primary",
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
let __VLS_101;
const __VLS_102 = ({ click: {} },
    { onClick: (__VLS_ctx.saveSettings) });
const { default: __VLS_103 } = __VLS_99.slots;
// @ts-ignore
[saveSettings,];
var __VLS_99;
var __VLS_100;
// @ts-ignore
[];
var __VLS_72;
// @ts-ignore
[];
var __VLS_39;
// @ts-ignore
[];
var __VLS_33;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
