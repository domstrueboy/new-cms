<template>
    <aside>
        <ol>
            <li v-for="{ id, blockName, props } in page" :key="id">
                <h3>{{ blockName }}</h3>
                <ul>
                    <li v-for="(propValue, propName) in getPropsWithInputs(blockName, props)">
                        <component
                            :is="getInputBlock(blockName, propName)"
                            :key="id + propName"
                            :title="propName"
                            :modelValue="propValue"
                            @update:modelValue="setBlockProp(id, propName, $event)"
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
import type { TBlockName, TBlockProps } from '@/types'
import * as Forms from './forms';
import NoSuitableInput from './forms/NoSuitableInput.vue';

const getPropsWithInputs = (blockName: TBlockName, props: TBlockProps) => {
    const propsWithInputs = Object.keys(props).filter(propName => !!formsConfig[blockName][propName].inputComponentName)
    return Object.entries(props).reduce((acc, [propName, propValue]) => {
        if (propsWithInputs.includes(propName)) {
            return {
                ...acc,
                [propName]: propValue 
            }
        }
        return acc
    }, {})
}

const getInputBlock = (blockName: TBlockName, propName: string) => {
    const { inputComponentName } = formsConfig[blockName][propName]
    if (inputComponentName === undefined) return null;
    return Forms[inputComponentName] || NoSuitableInput
}

const { page, setBlockProp } = usePageStore()
</script>
