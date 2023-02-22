import type { TBlockFormConfig } from '@/types';
import { EInputComponent } from '@/types';

export const prettyBlockFormConfig: TBlockFormConfig = {
    title: {
        inputComponentName: EInputComponent.String,
    },
    likes: {
        inputComponentName: EInputComponent.Number,
        optional: true,
    },
}