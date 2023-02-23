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
                            v-model="propValue"
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
import NoSuitableInput from './forms/NoSuitableInput.vue';

const getInputBlock = (blockName: TBlockName, propName: string) => {
    const { inputComponentName = EInputComponent.String } = formsConfig[blockName][propName]
    return Forms[inputComponentName] || NoSuitableInput
}

const { page } = usePageStore()
</script>
