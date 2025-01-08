<template>
    <div>
        <h2>子组件</h2>
        <div>
            value： {{title}}
        </div>
        <div>
            value： {{arr}}
        </div>
        <div>
            <button @click="send">发送</button>
        </div>
        <hr/>
    </div>
</template>
<script lang="ts" setup>
// const props = defineProps<{
//     title: string
//     arr: number[]
// }>();

const props = withDefaults(defineProps<{
    title: string
    arr?: number[]
}>(), {
    title: '大伟',
    arr: () => [1, 2, 3]
});

// const props = defineProps({
//     title: {
//         type: String,
//         default: '大伟'
//     }
// })
console.log(props.arr)


// const emit = defineEmits(['on-click', 'on-click1']);
const emit = defineEmits<{
    (e: 'on-click', value: string): void,
    (e: 'on-click1', value: string): void
}>();
const send = () => {
    emit('on-click', '大伟');
    emit('on-click1', '大伟1');
}
defineExpose({
    name: '大伟',
    open: () => {
        console.log('open');
    }
});


</script>