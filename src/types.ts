import type { IPrettyBlockProps } from '@/lib/blocks/PrettyBlock/PrettyBlock.vue'
import type { IUglyBlockProps } from '@/lib/blocks/UglyBlock/UglyBlock.vue'

export enum EInputComponent {
    String = 'StringInput',
    Number = 'NumberInput',
    Color = 'ColorInput',
    Boolean = 'BooleanInput',
}

interface IPropInputConfig {
    inputComponentName?: EInputComponent,
    options?: unknown[],
    optional?: Boolean,
}

export type TBlockFormConfig = Record<string, IPropInputConfig>;

export type TBlockName = 'PrettyBlock' | 'UglyBlock';
export type TBlockProps = IPrettyBlockProps | IUglyBlockProps;

export interface IBlock {
  name: TBlockName,
  props: TBlockProps,
}

export type TAllFormsConfig = Record<TBlockName, TBlockFormConfig>;