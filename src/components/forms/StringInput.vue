<template>
  <h3 v-if="title">{{ title  }}</h3>
  <input type="text" :value="value">
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  value: string
}>()
</script>

<style scoped>

</style>
