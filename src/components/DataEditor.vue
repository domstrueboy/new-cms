<template>
    <aside>
        <p v-for="block in page" :key="block.name">
            <ul>
                <li v-for="(prop, name) in block.config">
                    <h3>{{ name }}</h3>
                    <p>{{ prop }}</p>
                </li>
            </ul>
        </p>
    </aside> 
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'

const { page } = usePageStore()
</script>
