<template>
    <div class="card">
        <div class="card-content">
            C组件
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang='less'>
.card {
    width: 300px;
    border: 1px solid #ccc;
    .card-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
    .card-content {
        padding: 10px;
    }
}
</style>
