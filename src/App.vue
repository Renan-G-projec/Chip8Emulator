<script setup>
    import Window from './components/Window.vue';
    import Keyboard from './components/Keyboard.vue';

    import FileInput from './components/FileInput.vue';
    import Screen from './components/Screen.vue';
    import Console from './components/Console.vue';
</script>

<template>
  <div class="game-viewport">
    <Console/>
    
    <Keyboard class="keyboard"/>
  </div>

  <FileInput/>
</template>

<style scoped>

    .game-viewport {
      display: flex;
      justify-content: space-around;
      height: fit-content;
      align-items: stretch;
    }

    .keyboard {
      width: 30vw;
      justify-self: stretch;
    }

    @media (width < 720px) {
      .game-viewport {
        flex-direction: column;
      }
    }
</style>
