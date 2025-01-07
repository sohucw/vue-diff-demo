
<template>
  <div>
    <div>
      1: <input id="ipt" v-model="msg1" type="text" />
      <br/>
      2: <input v-model="msg2" type="text" />
    </div>
    <button @click="stop">停止</button>
  </div>
  <hr/>
</template>
<script  setup lang="ts">
import { ref, reactive, watchEffect} from 'vue';

let msg1 = ref('大伟1');
let msg2 = ref('大伟2');
const stop = watchEffect((oninvalidate) => {
  // const input = document.querySelector('#ipt');
  console.log('msg1:', msg1.value);
  // console.log('msg2:', msg2.value);
  // console.log('input:', input);
  oninvalidate(() => {
    console.log('before');
  })
}, {
  flush: 'post',
  onTrack(event) {
    debugger;
    console.log('onTrack:', event);
  },
});

</script>
<style scoped>
</style>
