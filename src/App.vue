<script setup>
    import FileInput from './components/FileInput.vue';
    import Console from './components/Console.vue';
    import Hero from './components/Hero.vue';
</script>

<template>
  <Hero/>

  <section class="console-container">
    <Console/>
  </section>

  <FileInput/>
</template>

<style scoped>
  .console-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>