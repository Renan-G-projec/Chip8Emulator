<!-- Ad Maiorem Dei Gloriam! -->
<script setup>
    import Keyboard from './Keyboard.vue';
    import Screen from './Screen.vue';
    import Window from './Window.vue';

    import { currentROM } from '@/assets/js/globalState.js';
</script>

<template>
    <Window title="Game" class="game-window">
        <section class="console">
            <div class="rom-name-container">
                <p class="loaded-rom-label">Loaded ROM: <span :class="currentROM.romLoaded ? 'green' : 'red'">{{ currentROM.romName }}</span></p>
            </div>
            <Screen/>
            <div class="buttons-container">
                <button id="init-game-btn">Init Game</button>
            </div>
            <Keyboard/>
        </section>
    </Window>
</template>

<style scoped>
    .console {
        display: flex;
        flex-direction: column;
        overflow: visible;

        align-items: center;

        flex-shrink: 0;
        width: 100%;
        height: max-content;

        width: var(--console-width);
        padding: 1rem;

        box-sizing: border-box;
    }

    .rom-name-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .loaded-rom-label {
        font-family: "Pixelify Sans", sans-serif;

        text-align: center;
        text-wrap: wrap;

        margin: 0;
    }

    .red {
        color: red;
    }

    .green {
        color: greenyellow
    }

    .buttons-container {
        display: flex;
        justify-content: flex-end;
        margin: 0rem 0.4rem;
    }

</style>