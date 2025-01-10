<template>
    <h1>App.vue （祖先级别）</h1>
    <label>
      <input v-model="val" value="red" name="color" type="radio"/>
      红色
    </label>
    <label>
      <input v-model="val" value="yellow" name="color" type="radio"/>
      黄色
    </label>
    <label>
      <input v-model="val" value="black" name="color" type="radio"/>
      黑色
    </label>
    <div class="box"></div>
    <hr/>
    <ProvideA/>
</template>
<script setup lang="ts">
import {ref, provide, readonly} from 'vue';
import ProvideA from './components/ProvideA.vue';
const val = ref('red');
provide('color', readonly(val));
</script>
<style scoped>

.box {
    height: 60px;
    width: 60px;
    border: 1px solid #ccc;
    background-color: v-bind(val);
}
</style>
