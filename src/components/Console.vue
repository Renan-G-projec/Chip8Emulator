<!-- Ad Maiorem Dei Gloriam! -->
<script setup>
    import Keyboard from './Keyboard.vue';
    import Screen from './Screen.vue';
    import Window from './Window.vue';
</script>

<template>
    <Window title="Game" img="Game" class="game-window">
        <section class="console">
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
        overflow: auto;
    }

    .buttons-container {
        display: flex;
        justify-content: flex-end;
        margin: 0rem 0.4rem
    }

    .buttons-container button {
        background-color: transparent;
        color: white;

        border: none;
        
        font-weight: 400;
        font-style: bold;
        font-size: 1.2rem;
        font-family: "Pixelify Sans", sans-serif;

        cursor: pointer;
    }

    .buttons-container button:hover {
        color: gray;
    }
</style>