<script setup>
    import Window from './components/Window.vue';
    import Keyboard from './components/Keyboard.vue';
</script>

<template>
  <div class="game-viewport">
    <Window title="Game" img="Game">
      <canvas id="main-canvas" width="64" height="32"></canvas>
    </Window>
    
    <Keyboard class="keyboard"/>
  </div>
</template>

<style scoped>

    .game-viewport {
      display: flex;
      height: fit-content;
      align-items: stretch;
    }

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
      .game-viewport {
        flex-direction: column;
      }
      #main-canvas {
        width: 80vw;
      }
    }
</style>
