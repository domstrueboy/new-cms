<template>
   <main>
        PREVIEW

        {{ JSON.stringify(page) }}
   </main> 
</template>

<script>
import { usePageStore } from '@/stores/page'

export default {
  setup() {
    const page = usePageStore()
  },
}
</script>

<style scoped>
    main {
        background-color: whitesmoke;
    }
</style>
