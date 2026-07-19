<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import { kb } from '@/chip8/context';
    import { onMounted } from 'vue';

    onMounted(() => {
        kb.addDOMListeners();
        kb.addKeyboardDOMListeners();
    })
</script>

<template>
    <div class="keyboard-container">
        <div id="keyboard-div" class="keyboard">
            <button class="keyboard-key">0</button>
            <button class="keyboard-key">1</button>
            <button class="keyboard-key">2</button>
            <button class="keyboard-key">3</button>
            <button class="keyboard-key">4</button>
            <button class="keyboard-key">5</button>
            <button class="keyboard-key">6</button>
            <button class="keyboard-key">7</button>
            <button class="keyboard-key">8</button>
            <button class="keyboard-key">9</button>
            <button class="keyboard-key">A</button>
            <button class="keyboard-key">B</button>
            <button class="keyboard-key">C</button>
            <button class="keyboard-key">D</button>
            <button class="keyboard-key">E</button>
            <button class="keyboard-key">F</button>
        </div>
    </div>
</template>

<style scoped>

    .keyboard-container {
        width: 100%;
        width: calc(100% - 0.8rem);

        min-width: auto;
        min-height: auto;

        flex-shrink: 0;
    }

    .keyboard {
        display: grid;

        width: auto;

        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;

        gap: 0.4rem;
        justify-items: center;
        
        box-sizing: border-box;
    }
    
    .keyboard-key {
        background-color: var(--keyboard-key-bg-color);
        color: var(--keyboard-key-color);
        border: none;
        border-radius: 0.2rem;

        margin: 0;

        width: 100%;
        aspect-ratio: 1 / 1;

        vertical-align: middle;
        text-align: center;

        cursor: pointer;

        transition: background-color 0.1s ease-in-out;
    }

    .keyboard-key:hover {
        background-color: var(--keyboard-key-bg-color-hover);
    }
</style>