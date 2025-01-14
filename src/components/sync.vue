<template>
    <div class="sync">
        <div class="sync-content">
            <div><img width="40" height="40" :src="data.avator"/></div>
            <div class="sync-pop">
            <div>{{data.name}}</div>
            <div>{{data.age}}</div>
        </div>
        </div>
        <hr/>
        <div>{{data.desc}}</div>
    </div>

</template>

<script setup lang="ts">
import {axios} from '../request/axios.ts';

interface Data {
    data: {
        name: string,
        age: number,
        avator:string,
        desc: string
    }
}
const {data} = await axios.get<Data>('./data.json');

</script>
<style>
.sync {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.sync-content {
    width: 100%;
    /* height: 20px; */
    background-color: #f0f0f0;
    border-radius: 4px;
    animation: skeleton-loading 1s infinite alternate;
}
</style>