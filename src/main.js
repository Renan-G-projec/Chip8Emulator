import { createApp } from 'vue'
import App from './App.vue'

import { currentROM } from './assets/js/globalState.js'

const app = createApp(App)
app.mount('#app')

import { canvas, kb, romLoader, engine} from './chip8/context.js'

const loadROMBtn = document.getElementById("load-rom-btn");
const romInput = document.getElementById("rom-file-input");
const initGameBtn = document.getElementById("init-game-btn");
const romLabel = document.getElementById("rom-file-input-label");

romInput.addEventListener("change", (ev) => {
    romLabel.innerText = ev.target.files[0].name;
});

loadROMBtn.addEventListener("click", async () => {
    if (!romInput.files[0]) {
        alert("Upload a file first!");
        return;
    }
    await romLoader.loadROM(romInput.files[0]);
    console.log(`Loaded this rom: ${romLoader.data.toBase64()}`);

    currentROM.value.romLoaded = true;
    currentROM.value.romName = romInput.files[0].name;
})

initGameBtn.addEventListener("click", () => {
    if (!romLoader.data) {
        alert("No ROM loaded yet. Please Load one.");
        return;
    }
    engine.initROM();
})