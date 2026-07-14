<!-- Ad Maiorem Dei Gloriam! -->

<script setup>

</script>

<template>
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
</template>

<style scoped>

    .keyboard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);

        width: 100%;
        padding: 0.2rem;

        gap: 1rem;
    }
    
    .keyboard-key {
        margin: 0.2rem;
        background-color: var(--keyboard-key-bg-color);
        color: var(--keyboard-key-color);
        border: none;
        border-radius: 0.2rem;

        width: 100%;
        height: 100%;

        cursor: pointer;

        transition: background-color 0.2 ease-in-out;
    }

    .keyboard-key:hover {
        background-color: var(--keyboard-key-bg-color-hover);
    }
</style>