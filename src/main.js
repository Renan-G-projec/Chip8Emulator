import { createApp } from 'vue'
import App from './App.vue'

import Keyboard from './chip8/keyboard.js'
import ROMLoader from './chip8/ROMloader.js'
import Chip8Engine from './chip8/engine.js'
import Canvas from './chip8/canvas.js'

import { currentROM } from './assets/js/globalState.js'

const app = createApp(App)

app.mount('#app')

const canvas = new Canvas();
const kb = new Keyboard();
const romLoader = new ROMLoader();
const engine = new Chip8Engine(canvas, kb, romLoader);

const loadROMBtn = document.getElementById("load-rom-btn");
const romInput = document.getElementById("rom-file-input");

loadROMBtn.addEventListener("click", async () => {
    if (!romInput.files[0]) {
        alert("Upload a file first!");
        return;
    }
    await romLoader.loadROM(romInput.files[0]);

    currentROM.value.romLoaded = true;
    currentROM.value.romName = romInput.files[0].name;
})

const initGameBtn = document.getElementById("init-game-btn");
initGameBtn.addEventListener("click", () => {
    if (!romLoader.data) {
        alert("No ROM loaded yet. Please Load one.");
        return;
    }
    engine.initROM();
})