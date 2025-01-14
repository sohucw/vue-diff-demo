<template>
  <Test></Test>
  <div>
    <button @click="change">tesst</button>
    {{ flag }}
  </div>
</template>
<script setup lang="ts">
import Test from './App';
let flag = ref(false);
const change = () =>{
  flag.value = !flag.value;
}
</script>

<style>
.test {
  font-size: 20px;
}
</style>