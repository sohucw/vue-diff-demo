
<template>
  <div>
    Ref: {{ obj }}
  </div>
  <hr/>
  <div>
    shallowRef: {{ obj2 }}
  </div>
  <hr/>
  <div>
    customRef: {{ myRef }}
  </div>

  <hr/>
  <div ref="dom"> 我是dom</div>

  <button @click="change">修改</button>
</template>
<script  setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef} from 'vue';
import type {Ref} from 'vue';
const dom = ref();


function MyRef<T>(value: T) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('触发了！');
          value = newValue;
          timer = null;
          trigger();
        }, 500);
      }
    }
  });

}

const myRef = MyRef<string>('customRef 大伟');
// ref 深层次比较：  shallowRef qian层比较
type P = {
  name: string;
}
const obj: Ref<P> =  ref({name: '大伟'});
const obj2 =  shallowRef({name: '大伟2'});
const change = () => {
  // obj.value.name = '大伟1111';
  // obj2.value.name = '大伟2222';
  // triggerRef(obj2);
  myRef.value = 'customRef 大伟11111';
  console.log(obj);
}

</script>
<style scoped>
</style>
