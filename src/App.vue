<template>
  <main>
    <el-input class="ipt"></el-input>
  </main>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="less">
.ipt {
  width: 300px;
  margin: 150px;
  :deep(.el-input__inner) {
    background-color: red;
  }
}
</style>