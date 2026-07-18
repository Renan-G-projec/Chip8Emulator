<!-- Ad Maiorem Dei Gloriam! -->

<script setup>
    import { onMounted, ref } from 'vue';
    const heroText = "Chip 8 Emulator";
    const heroString = ref("");
    const delay = 40;

    function incrementChar() {
        if (heroString.value.length < heroText.length) {
            heroString.value += heroText.charAt(heroString.value.length);
        }
    }

    onMounted(() => {
        const interval = setInterval(() => {
            incrementChar();
            if (heroString.length >= heroText.length) clearInterval(interval);
        }, delay)
    })
</script>

<template>
    <div class="hero">
        <h1>{{  heroString }}</h1>
        <p><span class="yellow">Warning:</span> Some ROMs can have <span class="yellow">FLASHING LIGHTS</span></p>
    </div>
</template>

<style scoped>

    .hero {
        text-align: center;
    }
    
    .hero h1 {
        font-family: "Pixelify Sans", sans-serif;
        font-size: 4rem;
        color: white;
    }

    .yellow {
        color: yellow;
        font-size: 1.3rem;
    }

    p {
        color: white;
        margin-bottom: 4rem;
    }
</style>