<template>
    <aside>
        <h1>FORM CONFIGS:</h1>
        <p>{{ JSON.stringify(formsConfig) }}</p>
        <h1>FORMS:</h1>
        <ol v-for="block in page" :key="block.name">
            <li>
                <h3>{{ block.name }}</h3>
                <ul>
                    <li v-for="prop in block.props">
                        {{ JSON.stringify(prop) }}
                        <!-- <h3>NAME {{ propName }}</h3>
                        <p>VALUE {{ propValue }}</p> -->
                        
                        <!-- <component
                            v-for="block in page"
                            :key="block.name"
                            :is="block.name"
                            v-bind="block.props"
                        /> -->
                    </li>
                </ul>
            </li>
        </ol>
            
            <!-- <p>{{ JSON.stringify(block) }}</p> -->
            
        
    </aside> 
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import formsConfig from '@/forms'

const { page } = usePageStore()
</script>
