
<template>
  <div>
    <h2>父组件</h2>
    <A ref="aref" :title="name" @on-click="getName" @on-click1="getName1"></A>
  </div>
</template>
<script  setup lang="ts">
import { ref, reactive, watchEffect} from 'vue';
import A from './components/A.vue';
const name = '大伟'
const aref = ref<InstanceType<typeof A>>();
const getName = (val: string) => {
  console.log(val, '来自子组件的参数');
}
const getName1 = (val: string) => {
  console.log(val, '来自子组件的参数');
}
aref.value?.open()
</script>
<style scoped>
</style>
