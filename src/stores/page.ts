import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import BLOCK_NAMES from '@/lib/blocks/BLOCK_NAMES'
import type { IPrettyBlockProps } from '@/lib/blocks/PrettyBlock/PrettyBlock.vue'
import type { IUglyBlockProps } from '@/lib/blocks/UglyBlock/UglyBlock.vue'

interface IBlock {
  name: string,
  props: IPrettyBlockProps | IUglyBlockProps,
}

const defaultPage: IBlock[] = [
  {
    name: BLOCK_NAMES.PrettyBlock,
    props: {
      title: 'Pretty title',
      likes: 5,
    }
  },
  {
    name: BLOCK_NAMES.UglyBlock,
    props: {
      title: {
        color: 'yellow',
      },
      text: 'Lorem ipsum blablabla',
      author: 'Me'
    }
  }
]

export const usePageStore = defineStore('page', () => {
  const page = ref(defaultPage)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return {
    page,
    // doubleCount,
    // increment
  }
})
