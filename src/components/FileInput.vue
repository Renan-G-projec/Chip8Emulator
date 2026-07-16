<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import Window from './Window.vue';
</script>

<template> 
    <div class="file-input">
        <Window title="Load ROM" img="a" class="load-file-window">
            <div class="file-container">
                <input type="file" id="rom-file-input">
                <label for="rom-file-input" class="custom-upload">Upload a file</label>
            </div>
            <div class="btn-container">
                <button id="load-rom-btn">Load ROM</button>
            </div>
        </Window>
    </div>
</template>

<style scoped>
    .file-input {
        width: var(--rom-card-width);
    }

    input {
        display: none;
    }

    .file-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .custom-upload {
        display: inline-block;
        padding: 10px 0px;
        color: white;
        cursor: pointer;
    }

    .custom-upload:hover {
        color: var(--geral-button-color-hover);
    }
</style>