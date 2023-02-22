import type { TBlockFormConfig } from '@/types';
import { EInputComponent } from '@/types';

export const prettyBlockFormConfig: TBlockFormConfig = {
    title: {
        inputComponent: EInputComponent.String,
    },
    likes: {
        inputComponent: EInputComponent.Number,
        optional: true,
    },
}