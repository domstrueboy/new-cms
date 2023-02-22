import { ref, computed, defineAsyncComponent, type AsyncComponentLoader, type VueElementConstructor } from 'vue'
import { defineStore } from 'pinia'

import samplePage from '@/server/samplePage'

// import all the blocks dinamically from /lib
const folders = import.meta.glob('../lib/blocks/*/*.vue')

export const components = Object.entries(folders)
  .reduce((blocks: object, [blockName, blockImport]: [string, AsyncComponentLoader]) => ({
    ...blocks,
    [blockName.split('/')[3]]: defineAsyncComponent(blockImport)
  }), {})

export const usePageStore = defineStore('page', () => {
  const page = ref(samplePage)

  const setPropsConfig = async (name: string, config: Record<string, unknown>) => {
    const el = page.value.find(block => block.name === name)
    // if (el) el.config = { ...config }
  }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return {
    page,
    setPropsConfig,
    // doubleCount,
    // increment
  }
})
