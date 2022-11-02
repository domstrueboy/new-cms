enum EForm {
    String,
    Multiline,
    Number,
    Color,
    Boolean,
}

interface IProp {
    value: unknown,
    options?: unknown[],
    type?: EForm,
}

export const config = {
    title: {
        value: 'Pretty default title',
        options: null,
        formType: EForm.String,
        switched: false,
    },
    likes: {
        value: 5,
        values: [],
        type: EForm.Number,
        required: false,
    },
}