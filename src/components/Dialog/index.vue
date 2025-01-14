<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item, index) in data">
                <slot :index="index" :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

type names = {
    name: string,
    age: number
}
const data = reactive<names[]>([
    {name: '大伟1',age:1},
    {name: '大伟2',age:12},
    {name: '大伟3',age:13},
    {name: '大伟4',age:14},
])
</script>

<style lang="less">
.header {
    height: 200px;
    background-color: red;
    color: #fff;
}
.main {
    height: 300px;
    background-color: green;
    color: #fff;
}
.footer {
    height: 200px;
    background-color: blue;
    color: #fff;
}
</style>