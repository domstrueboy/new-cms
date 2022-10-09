<script setup lang="ts">
import DataEditor from "../components/DataEditor.vue";
import PreviewArea from "../components/PreviewArea.vue";
</script>

<template>
  <div class="edit-view">
    <DataEditor />
    <PreviewArea />
  </div>
</template>

<style scoped>
  .edit-view {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>
