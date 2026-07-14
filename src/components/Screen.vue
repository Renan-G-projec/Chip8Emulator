<!-- Ad Maiorem Dei Gloriam!-->

<template>
    <div class="canvas-container">
        <canvas id="main-canvas" width="64" height="32"></canvas> <br>
    </div>
</template>

<style scoped>
    #main-canvas {
        background-color: black;
        border-radius: 0.2rem;
        width: 20rem;
        height: calc(20rem / 2);

        image-rendering: pixelated;

        margin: 0.4rem 0.4rem 0.4rem 0.4rem;
        vertical-align: bottom;
    }

    @media (width < 720px) {
        #main-canvas {
            width: 80vw;
        }
    }
</style>