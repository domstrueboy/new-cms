import type { TAllFormsConfig } from '@/types'
import { prettyBlockFormConfig } from '@/lib/blocks/PrettyBlock/PrettyBlockFormConfig'

const formsConfig: TAllFormsConfig = {
    PrettyBlock: prettyBlockFormConfig,
    UglyBlock: prettyBlockFormConfig, // @todo: replace it to uglyBlockFormConfig when it's ready
}

export default formsConfig;
