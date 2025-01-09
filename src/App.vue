<template>
    <div class="parent">

    <el-button  @click="flag = !flag">切换组件</el-button>
    <keep-alive :max="5">
        <A v-if="flag"></A>
        <B v-else></B>
      </keep-alive>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';
const flag = ref(true);
</script>
<style scoped>
</style>
