<script setup>
    import Window from './components/Window.vue';
</script>

<template>
  <Window title="Game" img="Game">
    <canvas id="main-canvas"></canvas>
  </Window>
</template>

<style scoped>
    #main-canvas {
      background-color: black;
      margin-bottom: 0rem;
      border-radius: 0.2rem;
      width: 45vw;
    }

    @media (width < 720px) {
      #main-canvas {
        width: 80vw;
      }
    }
</style>
