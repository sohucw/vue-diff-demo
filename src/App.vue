<template>
  <div>
    <h2>我是app.vue父组件</h2>
    <div>isShow: {{ isShow }}</div>
    <div>textVal: {{ text }}</div>
    <div><button @click="isShow=!isShow">开关</button></div>
    <hr/>
    <vModel v-model:textVal="text" v-model="isShow"></vModel>
  </div>
</template>
<script setup lang="ts">
import vModel from './components/v-model.vue';
const isShow = ref(true)
const text = ref('大伟')
</script>

<style>
.test {
  font-size: 20px;
}
</style>