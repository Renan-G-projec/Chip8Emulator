<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import Window from './Window.vue';
</script>

<template> 
    <Window title="Load ROM" img="a" class="load-file-window">
        <div class="container">
            <input type="file" id="rom-file-input">
            <button id="load-rom-btn">Load ROM</button>
        </div>
    </Window>
</template>

<style scoped>
    button, input {
        font-family: "Pixelify Sans", sans-serif;
        border: none;
        background-color: transparent;
        color: white;

        cursor: pointer;
    }

    button:hover {
        color: grey;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;

        justify-content: center;
    }

    .load-file-window div {
        padding: 1rem;
    }
</style>