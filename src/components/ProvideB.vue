<template>
    <h1>ProvideB.vue（孙子组件）</h1>
    <div class="box"></div>
    <div>
        <button @click="change">修改provide的值 </button>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive, inject} from 'vue';
import type { Ref } from 'vue';
const color = inject<Ref<string>>('color', ref('green'));
const change = () => {
    color.value = 'blue';
}

</script>

<style scoped>
.box {
    height: 60px;
    width: 60px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>