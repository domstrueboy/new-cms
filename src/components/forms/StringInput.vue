<template>
  <div>
    <h3 v-if="title">{{ title  }}</h3>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  modelValue: string
}>()
</script>

<style scoped>

</style>
