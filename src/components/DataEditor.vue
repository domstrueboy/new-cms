<template>
    <aside>
        <p v-for="block in page" :key="block.name">
            {{ typeof block }}
        </p>
    </aside> 
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'

const { page } = usePageStore()
for (const block of page) {
    console.log(block.component);
}
</script>
