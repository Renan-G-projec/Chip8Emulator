<script setup>
    import FileInput from './components/FileInput.vue';
    import Console from './components/Console.vue';
    import Hero from './components/Hero.vue';

    import ROM from './components/ROM.vue';
import ROMSection from './components/ROMSection.vue';
</script>

<template>
  <Hero/>

  <section class="console-container">
    <Console/>
  </section>

  <section class="roms-container">
    <ROMSection/>
  </section>
</template>

<style scoped>
  .console-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .roms-container {
    display: flex;
    justify-content: center;
  }
</style>