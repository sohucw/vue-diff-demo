
<template>
  <div class="btns">
      <button v-has-show="'order@create'">创建</button>
      <button v-has-show="'order@edit'">编辑</button>
      <button v-has-show="'order@del'">删除</button>
  </div>
  </template>
<script setup lang="ts">
import type {Directive} from 'vue';
// mock
const permission = [
  'order@create',
  'order@del',
];
const vHasShow:Directive<HTMLElement, string> = (el, bindding) => {
  console.log(el, bindding)
  if (!permission.includes(bindding.value)) {
    el.style.display = 'none';
  }

}

</script>

<style scoped lang='less'>
.btns {
    button{
        margin: 10px;
    }
  }
</style>