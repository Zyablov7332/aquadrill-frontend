import { computed, reactive, ref } from 'vue';
import { contactLinks } from '../../data/landing';
const props = defineProps();
const emit = defineEmits();
const isOpen = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
const snackbar = ref(false);
const snackbarText = ref('');
const loading = ref(false);
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');
const form = reactive({
    name: '',
    phone: '',
    comment: '',
});
const submitOrder = async () => {
    if (!form.name.trim() || !form.phone.trim()) {
        snackbarText.value = 'Заполните имя и телефон.';
        snackbar.value = true;
        return;
    }
    loading.value = true;
    try {
        const response = await fetch(`${apiBaseUrl}/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                phone: form.phone,
                comment: form.comment,
                pageUrl: window.location.href,
                source: 'landing-order-dialog',
            }),
        });
        const data = (await response.json());
        if (!response.ok || !data.ok) {
            throw new Error(data.message || 'Ошибка отправки заявки.');
        }
        snackbarText.value = 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.';
        snackbar.value = true;
        isOpen.value = false;
        form.name = '';
        form.phone = '';
        form.comment = '';
    }
    catch (error) {
        console.error(error);
        snackbarText.value = 'Не удалось отправить заявку. Попробуйте позже.';
        snackbar.value = true;
    }
    finally {
        loading.value = false;
    }
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
/** @type {__VLS_StyleScopedClasses['contact-link']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-link__body']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-link__body']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-info']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vDialog | typeof __VLS_components.VDialog | typeof __VLS_components.vDialog | typeof __VLS_components.VDialog} */
vDialog;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.isOpen),
    maxWidth: "880",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.isOpen),
    maxWidth: "880",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ class: "dialog-card" },
    rounded: "xl",
}));
const __VLS_8 = __VLS_7({
    ...{ class: "dialog-card" },
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['dialog-card']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ class: "pa-0" },
}));
const __VLS_14 = __VLS_13({
    ...{ class: "pa-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
const { default: __VLS_17 } = __VLS_15.slots;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    noGutters: true,
}));
const __VLS_20 = __VLS_19({
    noGutters: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    cols: "12",
    md: "6",
    ...{ class: "dialog-info" },
}));
const __VLS_26 = __VLS_25({
    cols: "12",
    md: "6",
    ...{ class: "dialog-info" },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {__VLS_StyleScopedClasses['dialog-info']} */ ;
const { default: __VLS_29 } = __VLS_27.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "section-eyebrow" },
});
/** @type {__VLS_StyleScopedClasses['section-eyebrow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "dialog-title" },
});
/** @type {__VLS_StyleScopedClasses['dialog-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "dialog-text" },
});
/** @type {__VLS_StyleScopedClasses['dialog-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "contact-list" },
});
/** @type {__VLS_StyleScopedClasses['contact-list']} */ ;
for (const [contact] of __VLS_vFor((__VLS_ctx.contactLinks))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        key: (contact.title),
        ...{ class: "contact-link" },
        href: (contact.href),
        target: (contact.href.startsWith('http') ? '_blank' : undefined),
        rel: (contact.href.startsWith('http') ? 'noopener' : undefined),
    });
    /** @type {__VLS_StyleScopedClasses['contact-link']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "contact-link__icon" },
        ...{ style: ({ background: contact.tint }) },
    });
    /** @type {__VLS_StyleScopedClasses['contact-link__icon']} */ ;
    let __VLS_30;
    /** @ts-ignore @type {typeof __VLS_components.vIcon | typeof __VLS_components.VIcon} */
    vIcon;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
        icon: (contact.icon),
        size: "22",
    }));
    const __VLS_32 = __VLS_31({
        icon: (contact.icon),
        size: "22",
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "contact-link__body" },
    });
    /** @type {__VLS_StyleScopedClasses['contact-link__body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    (contact.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (contact.value);
    // @ts-ignore
    [isOpen, contactLinks,];
}
// @ts-ignore
[];
var __VLS_27;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    cols: "12",
    md: "6",
    ...{ class: "dialog-form" },
}));
const __VLS_37 = __VLS_36({
    cols: "12",
    md: "6",
    ...{ class: "dialog-form" },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
/** @type {__VLS_StyleScopedClasses['dialog-form']} */ ;
const { default: __VLS_40 } = __VLS_38.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "mb-4 dialog-form__title" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-form__title']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    modelValue: (__VLS_ctx.form.name),
    label: "Ваше имя",
    variant: "outlined",
    rounded: "xl",
    hideDetails: "auto",
    ...{ class: "mb-3" },
}));
const __VLS_43 = __VLS_42({
    modelValue: (__VLS_ctx.form.name),
    label: "Ваше имя",
    variant: "outlined",
    rounded: "xl",
    hideDetails: "auto",
    ...{ class: "mb-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_46;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_47 = __VLS_asFunctionalComponent1(__VLS_46, new __VLS_46({
    modelValue: (__VLS_ctx.form.phone),
    label: "Телефон",
    variant: "outlined",
    rounded: "xl",
    hideDetails: "auto",
    ...{ class: "mb-3" },
}));
const __VLS_48 = __VLS_47({
    modelValue: (__VLS_ctx.form.phone),
    label: "Телефон",
    variant: "outlined",
    rounded: "xl",
    hideDetails: "auto",
    ...{ class: "mb-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_51;
/** @ts-ignore @type {typeof __VLS_components.vTextarea | typeof __VLS_components.VTextarea} */
vTextarea;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
    modelValue: (__VLS_ctx.form.comment),
    label: "Комментарий",
    variant: "outlined",
    rounded: "xl",
    rows: "4",
    hideDetails: "auto",
    ...{ class: "mb-4" },
}));
const __VLS_53 = __VLS_52({
    modelValue: (__VLS_ctx.form.comment),
    label: "Комментарий",
    variant: "outlined",
    rounded: "xl",
    rows: "4",
    hideDetails: "auto",
    ...{ class: "mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
let __VLS_56;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    ...{ 'onClick': {} },
    block: true,
    color: "primary",
    size: "large",
    rounded: "xl",
    loading: (__VLS_ctx.loading),
    disabled: (__VLS_ctx.loading),
}));
const __VLS_58 = __VLS_57({
    ...{ 'onClick': {} },
    block: true,
    color: "primary",
    size: "large",
    rounded: "xl",
    loading: (__VLS_ctx.loading),
    disabled: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
let __VLS_61;
const __VLS_62 = ({ click: {} },
    { onClick: (__VLS_ctx.submitOrder) });
const { default: __VLS_63 } = __VLS_59.slots;
// @ts-ignore
[form, form, form, loading, loading, submitOrder,];
var __VLS_59;
var __VLS_60;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "dialog-note" },
});
/** @type {__VLS_StyleScopedClasses['dialog-note']} */ ;
// @ts-ignore
[];
var __VLS_38;
// @ts-ignore
[];
var __VLS_21;
// @ts-ignore
[];
var __VLS_15;
// @ts-ignore
[];
var __VLS_9;
// @ts-ignore
[];
var __VLS_3;
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.vSnackbar | typeof __VLS_components.VSnackbar | typeof __VLS_components.vSnackbar | typeof __VLS_components.VSnackbar} */
vSnackbar;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    modelValue: (__VLS_ctx.snackbar),
    location: "bottom right",
    color: "secondary",
}));
const __VLS_66 = __VLS_65({
    modelValue: (__VLS_ctx.snackbar),
    location: "bottom right",
    color: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const { default: __VLS_69 } = __VLS_67.slots;
(__VLS_ctx.snackbarText);
// @ts-ignore
[snackbar, snackbarText,];
var __VLS_67;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
