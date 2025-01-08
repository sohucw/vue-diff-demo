<template>
    <div style="display: flex;" >
      <div @click="handerSwitch(item, index)" :class="[active ===index ? 'active' : '']" class="tabs" v-for="(item, index) in data">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <component :is="comId"></component>
</template>
<script setup lang="ts">
import { reactive, ref, markRaw, shallowRef } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';
import C from './components/C.vue';
const comId = shallowRef('A');
const active = ref(0);
const data = reactive([
  {
    name: 'A组件',
    com:'A'
  },
  {
    name: 'B组件',
    com:'B'
  },
  {
    name: 'C组件',
    com:'C'  // __skip__
  }

])
const handerSwitch = (item, index) => {
  comId.value = item.com;
  console.log(comId);
  active.value = index;

}
</script>
<script lang="ts">
  export default {
    components: {
      A,B,C
    }
  }
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
