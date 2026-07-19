<!-- Ad Maiorem Dei Gloriam!-->

<script setup>
    import { canvas } from '@/chip8/context';
    import { onMounted } from 'vue';

    onMounted(() => {
        canvas.getContext();
    })
</script>

<template>
    <div class="canvas-container">
        <canvas id="main-canvas" width="64" height="32"></canvas> <br>
    </div>
</template>

<style scoped>
    .canvas-container {
        width: 100%;
    }
    #main-canvas {
        background-color: black;
        border-radius: 0.2rem;
        width: 100%;
        aspect-ratio: 2 / 1;

        image-rendering: pixelated;

        margin: 0;
        vertical-align: bottom;

        flex-shrink: 0;
    }

    @media (width < 720px) {
        #main-canvas {
            max-width: 80vw;
        }
    }
</style>