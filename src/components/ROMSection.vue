<!-- Ad Maiorem Dei Gloriam-->

<script setup>

    import FileInput from './FileInput.vue';
import ROM from './ROM.vue';

    const roms = [
        {
            title: "Invaders",
            icon: "icon",
            description: "A cool Game!",
            credits: "HTML p with a link",
            content: "Base 64 string..."
        },
        {
            title: "Invaders 2",
            icon: "icon",
            description: "A cool Game!",
            credits: "HTML p with a link",
            content: "Base 64 string..."
        }

    ];
</script>

<template>
    <div class="roms-section">
        <div class="rom">
            <FileInput/>
        </div>
        <div class="rom" v-for="rom in roms">
            <ROM :name="rom.title" :icon="rom.icon">
                {{ rom.description }} 
                <br>
                {{ rom.credits }}
            </ROM>
        </div>
    </div>
</template>

<style>
    .roms-section {
        display: grid;
        justify-items: center;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, 20rem);

        width: 80%;
    }
</style>