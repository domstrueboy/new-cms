import { ref, computed, defineAsyncComponent, type AsyncComponentLoader, type VueElementConstructor } from 'vue'
import { defineStore } from 'pinia'
import type { IBlock, TBlockPropsKey, TBlockPropsValue } from '@/types'

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

  const setBlockProp = async (id: string, propName: TBlockPropsKey, value: TBlockPropsValue) => {
    if (!id || !propName || !value) return;
    const block: IBlock | undefined = page.value.find(block => block.id === id);
    if (!block) return;
    block.props[propName] = value;
  }

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return {
    page,
    setBlockProp,
    // doubleCount,
  }
})
