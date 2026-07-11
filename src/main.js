import { createApp } from 'vue'
import App from './App.vue'

import Keyboard from './chip8/keyboard.js'
import ROMLoader from './chip8/ROMloader.js'

const app = createApp(App)

app.mount('#app')

const kb = new Keyboard();
const roomLoader = new ROMLoader();

const loadROMBtn = document.getElementById("load-rom-btn");
const romInput = document.getElementById("rom-file-input");

loadROMBtn.addEventListener("click", async () => {
    if (!romInput.files[0]) {
        alert("Upload a file first!");
        return;
    }
    await roomLoader.loadROM(romInput.files[0]);
})