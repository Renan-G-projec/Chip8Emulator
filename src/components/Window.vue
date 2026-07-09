<script setup>
    defineProps(["title", "img"]);
</script>

<template>
    <div class="window">
        <div class="header">
            <h3>{{ title }}</h3> 
            <img :src="img" :alt="title">
        </div>
        
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .window {
        background-color: blue;

        border-radius: 0.2rem;
        margin: 0;
        overflow: auto;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;

        color: white;
    }

    .header * {
        margin: 0 0.7rem;
    }

    .content {
        position: relative;
        border-radius: 0.2rem;
        margin: 0.3rem;
        background-color: white;
    }

    .content * {
        margin: 0.4rem;
    }

</style>