<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import Window from "./Window.vue";

    defineProps({
        name: String,
        icon: String
    })
</script>

<template>
    <div class="rom">
        <Window :title="name" :img="icon">
            <p><slot></slot></p>
            <div class="btn-container"><button class="load-rom-btn">Load ROM</button></div>
        </Window>
    </div>
</template>

<style scoped>
    .rom {
        width: var(--rom-card-width);
    }
</style>