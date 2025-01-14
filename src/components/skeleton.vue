<template>
    <div class="skeleton">
        <div class="skeleton-item" v-for="i in 5" :key="i"></div>
    </div>
</template>

<style scoped>
.skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.skeleton-item {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    animation: skeleton-loading 1s infinite alternate;
}

@keyframes skeleton-loading {
    0% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
}
</style>
