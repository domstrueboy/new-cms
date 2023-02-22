<template>
    <aside>
        <ol>
            <li v-for="block in page" :key="block.name">
                <h3>{{ block.name }}</h3>
                <ul>
                    <li v-for="(propValue, propName) in block.props">
                        <component
                            :is="getInputBlock(block.name, propName)"
                            :key="block.name + propName"
                            :title="propName"
                            :value="propValue"
                        />
                    </li>
                </ul>
            </li>
        </ol>
    </aside> 
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import formsConfig from '@/lib/blocks/formsConfig'
import type { TBlockName } from '@/types'
import { EInputComponent } from '@/types'
import * as Forms from './forms';

const getInputBlock = (blockName: TBlockName, propName: string) => {
    const key = formsConfig[blockName][propName]?.inputComponentName || EInputComponent.String;
    return Forms[key] || Forms.StringInput
}

const { page } = usePageStore()
</script>
