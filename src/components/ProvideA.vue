<template>
    <h1>ProvideA.vue（父组件）</h1>
    <div class="box"></div>
    <hr/>
    <ProvideB/>
</template>

<script setup lang="ts">
import {ref, reactive, inject} from 'vue';
import type { Ref } from 'vue';
import ProvideB from './ProvideB.vue';
const color = inject<Ref<string>>('color');
</script>

<style scoped>
.box {
    height: 60px;
    width: 60px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>