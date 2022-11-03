import { ref, computed, defineAsyncComponent, type AsyncComponentLoader, type VueElementConstructor } from 'vue'
import { defineStore } from 'pinia'
import BLOCK_NAMES from '@/lib/blocks/BLOCK_NAMES'
import type { TConfig } from '@/lib/blocks/commonTypes'
import type { IPrettyBlockProps } from '@/lib/blocks/PrettyBlock/PrettyBlock.vue'
import { prettyBlockConfig } from '@/lib/blocks/PrettyBlock/PrettyBlock.config'
// import type { IUglyBlockProps } from '@/lib/blocks/UglyBlock/UglyBlock.vue'

// Dynamic import all the blocks from lib
const folders = import.meta.glob('../lib/blocks/*/*.vue')

export const components = Object.entries(folders)
  .reduce((blocks: object, [blockName, blockImport]: [string, AsyncComponentLoader]) => ({
    ...blocks,
    [blockName.split('/')[3]]: defineAsyncComponent(blockImport)
  }), {})

interface IBlock {
  name: string,
  config: TConfig,
  props: IPrettyBlockProps, // | IUglyBlockProps,
}

const defaultPage: IBlock[] = [
  {
    name: BLOCK_NAMES.PrettyBlock,
    config: prettyBlockConfig,

    props: {
      title: prettyBlockConfig.title.value as string,
      likes: prettyBlockConfig.likes.value as number,
    },
  },
  // {
  //   name: BLOCK_NAMES.UglyBlock,
  //   props: {
  //     title: {
  //       color: 'yellow',
  //     },
  //     text: 'Lorem ipsum blablabla',
  //     author: 'Me'
  //   },
  //   propsConfig: null,
  // }
]

export const usePageStore = defineStore('page', () => {
  const page = ref(defaultPage)

  const setPropsConfig = async (name: string, config: Record<string, unknown>) => {
    const el = page.value.find(block => block.name === name)
    if (el) el.config = { ...config }
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
