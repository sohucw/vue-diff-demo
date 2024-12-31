
<template>
  <div>
    <div>
      shallowReactive: {{ obj }}
      <br/>
      reactive: {{ obj2 }}
    </div>
    <button @click="add">添加</button>
  </div>
  <hr/>
</template>
<script  setup lang="ts">
import { ref, reactive, readonly, shallowReactive} from 'vue';
// ref .value 
let obj2 = shallowReactive( {name: '前端'})
let obj = shallowReactive({foo: {
  bar: {
    name: '前端'}
} })
const add = () => {
  obj2.name = '后端'
  obj.foo.bar.name = '后端'
  console.log(obj);
}
</script>
<style scoped>
</style>
