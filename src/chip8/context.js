import Keyboard from './keyboard.js'
import ROMLoader from './ROMloader.js'
import Chip8Engine from './engine.js'
import Canvas from './canvas.js'
import Speakers from './speakers.js'

export const speakers = new Speakers();
export const canvas = new Canvas();
export const kb = new Keyboard();
export const romLoader = new ROMLoader();
export const engine = new Chip8Engine(canvas, kb, romLoader, speakers);