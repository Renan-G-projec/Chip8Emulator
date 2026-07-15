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
            <button class="load-rom-btn">Load ROM</button>
        </Window>
    </div>
</template>

<style scoped>
    .rom {
        width: 20rem;
    }
</style>