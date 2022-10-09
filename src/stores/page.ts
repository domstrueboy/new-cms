import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import BLOCK_NAMES from '@/lib/blocks/BLOCK_NAMES'

const defaultPage = [
  {
    name: BLOCK_NAMES.PrettyBlock,
    props: {

    }
  },
  {
    name: BLOCK_NAMES.UglyBlock,
    props: {
      
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
