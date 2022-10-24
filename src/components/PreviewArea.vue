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
import { defineAsyncComponent, type AsyncComponentLoader } from 'vue'
import { usePageStore } from '@/stores/page'

// Dynamic import all the blocks from lib
const folders = import.meta.glob('../lib/blocks/*/*.vue')
const components = Object.entries(folders)
  .reduce((blocks: object, [blockName, blockImport]: [string, AsyncComponentLoader]) => ({
    ...blocks,
    [blockName.split('/')[3]]: defineAsyncComponent(blockImport)
  }), {})

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
    }
</style>
