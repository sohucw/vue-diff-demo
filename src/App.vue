<template>
    <Suspense>
      <template #default>
        <sync></sync>
      </template>
      <template #fallback>
          <skeleton></skeleton>
      </template>
    </Suspense>
</template>
<script setup lang="ts">
import { defineAsyncComponent, reactive, ref } from 'vue';
import skeleton from './components/skeleton.vue';
// import sync from './components/sync.vue';
const sync = defineAsyncComponent(() => import('./components/sync.vue'));
</script>
<style scoped>
.tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
}
.active {
  background-color: skyblue;
}
</style>
