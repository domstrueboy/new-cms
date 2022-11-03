export enum EInput {
    String,
    Number,
    Color,
    Boolean,
}

interface IProp {
    value: unknown,
    options?: unknown[] | null,
    inputType?: EInput | null,
    optional?: Boolean | null,
}

export type TConfig = Record<string, IProp>;