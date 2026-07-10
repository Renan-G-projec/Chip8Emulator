<script setup>
    import Window from './components/Window.vue';
    import Keyboard from './components/Keyboard.vue';
</script>

<template>
  <Window title="Game" img="Game">
    <canvas id="main-canvas" width="64" height="32"></canvas>
  </Window>

  <Keyboard/>
</template>

<style scoped>
    #main-canvas {
      background-color: black;
      border-radius: 0.2rem;
      width: 45vw;
      height: calc(45vw / 2);

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
