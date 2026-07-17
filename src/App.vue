<script setup>
    import Console from './components/Console.vue';
    import Hero from './components/Hero.vue';

    import ROMSection from './components/ROMSection.vue';
    import About from './components/About.vue';
</script>

<template>
  <Hero/>

  <section class="console-container">
    <Console/>
  </section>

  <section class="roms-container">
    <ROMSection/>
  </section>

  <section class="about-chip8">
    <About/>
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

  .about-chip8 {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
</style>