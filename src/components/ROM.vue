<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import Window from "./Window.vue";
    import { engine, romLoader } from "@/chip8/context.js";
    import { currentROM } from "@/assets/js/globalState.js";

    const properties = defineProps({
        name: String,
        icon: String,
        content: String
    })

    async function loadRom() {
        romLoader.loadROMFromBase64(properties.content);
        currentROM.value.romLoaded = true;
        currentROM.value.romName = properties.name;

        engine.reset();
    }
</script>

<template>
    <div class="rom">
        <Window :title="name" :img="icon">
            <p><slot></slot></p>
            <div class="btn-container"><button class="load-rom-btn" @click="loadRom()">Load ROM</button></div>
        </Window>
    </div>
</template>

<style scoped>
    .rom {
        width: var(--rom-card-width);
    }
</style>