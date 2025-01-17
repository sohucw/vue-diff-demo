<template>
  <div>
  </div>
</template>

<script setup lang='ts'>
const instance = getCurrentInstance();
console.log(instance?.proxy)
instance?.proxy?.$loading.show();

setTimeout(() => {
  instance?.proxy?.$loading.hide();

}, 3000);
</script>

<style scoped lang='less'>
#box {
  border: 1px solid #ccc;
  resize: both;
  overflow: hidden;
}
</style>