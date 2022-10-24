<template>
    <section>
        <h1 :style="{ color: title.color }">{{ title.text }}</h1>
        <p>{{ text }}</p>
        <h3>{{ author }}</h3>
    </section>
</template>

<script setup lang="ts">
export interface IUglyBlockProps {
    title: {
        text?: string,
        color?: string,
    },
    text: string,
    author?: string,
}

const {
    title,
    text,
    author = 'John Doe',
} = defineProps<IUglyBlockProps>()

title.text = title.text ?? 'Ugly title'
title.color = title.color ?? 'red'
</script>