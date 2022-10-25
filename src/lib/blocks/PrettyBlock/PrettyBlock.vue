<template>
    <section>
        <h3>{{ title }}</h3>
        <p>{{ likes }}</p>
    </section>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import BLOCK_NAMES from '@/lib/blocks/BLOCK_NAMES'

export interface IPrettyBlockProps {
  title?: string,
  likes?: number,
}

const {
    title = 'NO TITLE',
    likes = 0,
} = defineProps<IPrettyBlockProps>()

const { setPropsConfig } = usePageStore()
// setPropsConfig(BLOCK_NAMES.PrettyBlock, )
</script>