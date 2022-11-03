import type { TConfig } from '@/lib/blocks/commonTypes';
import { EInput } from '@/lib/blocks/commonTypes';

export const prettyBlockConfig: TConfig = {
    title: {
        value: 'Pretty default title',
        options: null,
        inputType: EInput.String,
        optional: false,
    },
    likes: {
        value: 5,
        options: [],
        inputType: EInput.Number,
        optional: true,
    },
}