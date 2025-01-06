
<template>
  <div>
    <div>
      1: <input v-model="msg.foo.bar.name" type="text" />
      <br/>
      2: <input v-model="msg.foo.bar.age" type="text" />
    </div>
  </div>
  <hr/>
</template>
<script  setup lang="ts">
import { ref, reactive, watch} from 'vue';

let msg = reactive({
  foo: {
    bar: {
      name: '大伟',
      age: 18

    }
  }
});
watch(()=> msg.foo.bar.name, (newVal, oldVal) => {
  console.log( newVal, oldVal);
}, {
 //  deep: true
 // immediate: true, // 立即执行一次
 once: true, // 只执行一次
 // flush: 'sync' // 同步执行   pre 组件更新之前执行 post  组件更新之后执行
}) 

</script>
<style scoped>
</style>
