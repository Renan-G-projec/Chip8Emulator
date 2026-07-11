import { createApp } from 'vue'
import App from './App.vue'

import Keyboard from './chip8/keyboard.js'

const app = createApp(App)

app.mount('#app')

const kb = new Keyboard();
