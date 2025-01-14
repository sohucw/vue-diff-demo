<template>
    <div class="card">
        <div class="card-header">
            <div>标题</div>
            <div>副标题</div>
        </div>
        <div class="card-content">
            内容
            内容
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
