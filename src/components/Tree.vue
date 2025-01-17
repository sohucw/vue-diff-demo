
<template>
    <div @click.stop="clickTap(item, $event)" v-for="item in data"  class="tree">
        <input v-model="item.checked" type="checkbox"/>
        <span>{{ item.name }}</span>
        <dawei v-if="item.children?.length" :data="item.children"></dawei>
    </div>
</template>
<script lang="ts"  setup>
interface Tree {
    name: string;
    checked: boolean;
    children?: Tree[];
}
defineProps<{
    data?: Tree[]
}>();
defineOptions({
    name: 'dawei'
})
const clickTap = (tree: Tree, e)=> {
    console.log(e);
}
</script>
<style lang="less">
.tree {
    margin-left: 50px;
}
</style>