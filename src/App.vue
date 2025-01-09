<template>
  <div>
    <Dialog>
      <template #header>
        <div>具名插槽 header</div>
      </template>
      <template #default="{data, index}">
        <div>{{data.name}}---- {{ data.age }}---- {{ index }}</div>
      </template>
      <template #footer>
        <div>具名插槽 footer</div>
      </template>
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import Dialog from './components/Dialog/index.vue';
const name = ref('header');
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
