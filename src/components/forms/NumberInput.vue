<template>
  <div>
    <h3 v-if="title">{{ title  }}</h3>
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', parseInt($event.target.value))"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  modelValue: number
}>()
</script>

<style scoped>

</style>
