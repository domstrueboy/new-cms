import type { IPrettyBlockProps } from '@/lib/blocks/PrettyBlock/PrettyBlock.vue'
import type { IUglyBlockProps } from '@/lib/blocks/UglyBlock/UglyBlock.vue'

export enum EInputComponent {
    String = 'StringInput',
    Number = 'NumberInput',
    Color = 'ColorInput',
    Boolean = 'BooleanInput',
}

interface IPropInputConfig {
    inputComponent?: EInputComponent,
    options?: unknown[],
    optional?: Boolean,
}

export type TBlockFormConfig = Record<string, IPropInputConfig>;

type TBlockNames = 'PrettyBlock' | 'UglyBlock';
type TBlockProps = IPrettyBlockProps | IUglyBlockProps;

export interface IBlock {
  name: TBlockNames,
  props: TBlockProps,
}

export type TAllFormsConfig = Record<TBlockNames, TBlockFormConfig>;