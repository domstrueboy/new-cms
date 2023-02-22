import type { TAllFormsConfig } from '@/types'
import { prettyBlockFormConfig } from './configs/PrettyBlockFormConfig'

const allFormsConfig: TAllFormsConfig = {
    PrettyBlock: prettyBlockFormConfig,
    UglyBlock: prettyBlockFormConfig, // @todo: replace it to uglyBlockFormConfig when it's ready
}

export default allFormsConfig;
