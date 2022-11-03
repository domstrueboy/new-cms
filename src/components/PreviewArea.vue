<template>
   <main>
      <component
        v-for="block in page"
        :key="block.name"
        :is="block.name"
        v-bind="block.props"
      />
   </main> 
</template>

<script lang="ts">
import { components, usePageStore } from '@/stores/page'

export default {
  components,

  setup() {
    const { page } = usePageStore()
    return { page }
  },
}
</script>

<style scoped>
  main {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }

  main > section {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 10px 5px 5px lightgray;
  }
</style>
