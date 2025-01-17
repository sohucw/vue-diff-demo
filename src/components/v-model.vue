<template>
    <div v-show="modelValue" class="dialog">
        {{ modelValue }}
        <div class="dialog-header">
            <div>标题</div>
            <div @click="close">关闭</div>
        </div>
        <div class="dialog-content">内容
            <input @input="change" :value="textVal"/>
        </div>
    </div>
</template>

<script setup lang="ts">
// vue2 value   vue3 : modelValue
const props = defineProps< {
    modelValue: boolean,
    textVal: string,
    textValModifiers?: {
        isGay: boolean
    }

}>()
const emit = defineEmits(['update:modelValue', 'update:textVal'])
const close = () => {
    emit('update:modelValue', false)

}
const change = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:textVal', props.textValModifiers?.isGay? target.value + 'gay': target.value);
}

</script>

<style lang="less">
.dialog {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    // position: fixed;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    &-header {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    &-content {
        padding: 10px;
    }
}
</style>
