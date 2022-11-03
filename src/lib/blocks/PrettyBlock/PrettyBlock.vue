<template>
    <section>
        <h3>{{ title }}</h3>
        <p>{{ likes }}</p>
    </section>
</template>

<script setup lang="ts">
export interface IPrettyBlockProps {
    title?: string,
    likes?: number,
}

const {
    title = 'NO TITLE',
    likes = 0,
} = defineProps<IPrettyBlockProps>()
</script>