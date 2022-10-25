import { ref, computed, defineAsyncComponent, type AsyncComponentLoader, type VueElementConstructor } from 'vue'
import { defineStore } from 'pinia'
import BLOCK_NAMES from '@/lib/blocks/BLOCK_NAMES'
import type { IPrettyBlockProps } from '@/lib/blocks/PrettyBlock/PrettyBlock.vue'
import type { IUglyBlockProps } from '@/lib/blocks/UglyBlock/UglyBlock.vue'

// Dynamic import all the blocks from lib
const folders = import.meta.glob('../lib/blocks/*/*.vue')

export const components = Object.entries(folders)
  .reduce((blocks: object, [blockName, blockImport]: [string, AsyncComponentLoader]) => ({
    ...blocks,
    [blockName.split('/')[3]]: defineAsyncComponent(blockImport)
  }), {})

console.log(components);

interface IBlock {
  name: string,
  props: IPrettyBlockProps | IUglyBlockProps,
  propsConfig?: Record<string, unknown>,
}

// class Block implements IBlock {
  
// }

const defaultPage: IBlock[] = [
  {
    name: BLOCK_NAMES.PrettyBlock,
    props: {
      title: 'Pretty title',
      likes: 5,
    },
    propsConfig: undefined,
  },
  {
    name: BLOCK_NAMES.UglyBlock,
    props: {
      title: {
        color: 'yellow',
      },
      text: 'Lorem ipsum blablabla',
      author: 'Me'
    },
    propsConfig: undefined,
  }
]

export const usePageStore = defineStore('page', () => {
  const page = ref(defaultPage)

  const setPropsConfig = async (name: string, config: Record<string, unknown>) => {
    const el = page.value.find(block => block.name === name)
    if (el) el.propsConfig = { ...config }
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
