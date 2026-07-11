<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import { onMounted } from 'vue';
    import Window from './Window.vue';

    function loadKeys() {
        const keyboard = document.getElementById("keyboard-keys");
        for (let keyNum = 0; keyNum < 16; keyNum++) {
            const btn = document.createElement('button');
            btn.classList.add("keyboard-key");
            btn.innerText = keyNum.toString(16).toUpperCase();

            keyboard.appendChild(btn);
        }
    }
    onMounted(loadKeys)
</script>

<template>
    <div class="keyboard">
        <Window title="Hex Keyboard" img="a" class="window">
            <div id="keyboard-keys" class="keys-container"></div>
        </Window>
    </div>
</template>

<style scoped>

    .window {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .window .content {
        height: 100%;
    }

    .keys-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.1rem;

        height: 100%;
    }

    .keyboard-keys, .keyboard-key {
        margin: 0.9rem;
    }
</style>