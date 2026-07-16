// Ad Maiorem Dei Gloriam!

const FONTSET = [
    0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
    0x20, 0x60, 0x20, 0x20, 0x70, // 1
    0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
    0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
    0x90, 0x90, 0xF0, 0x10, 0x10, // 4
    0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
    0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
    0xF0, 0x10, 0x20, 0x40, 0x40, // 7
    0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
    0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
    0xF0, 0x90, 0xF0, 0x90, 0x90, // A
    0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
    0xF0, 0x80, 0x80, 0x80, 0xF0, // C
    0xE0, 0x90, 0x90, 0x90, 0xE0, // D
    0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
    0xF0, 0x80, 0xF0, 0x80, 0x80  // F
];

// Shall load the ROM on memory and return thge bytes
export default class ROMLoader {
    constructor() {
        this.data = null; // Chip8 have 4096 bytes.
        this.currentIndex = 512;
    }

    async loadROM(file) {
        const arrbf = await file.arrayBuffer();
        const data = new Uint8Array(arrbf);

        this.data = new Uint8Array(data.byteLength + 512);
        for (let i = 0; i < data.byteLength; i++) {
            this.data[512 + i] = data[i];
        }
        console.log(this.data);

        for (let i = 0; i < FONTSET.length; i++) {
            this.data[i] = FONTSET[i];
        }
    }

    loadROMFromBase64(string) {
        this.data = Uint8Array.fromBase64(string);
    }

    getOpcode() {
        if (!this.data) throw new Error("Tryed to acess byte but no ROM is loaded.");
        const opcode = this.data[this.currentIndex] << 8 | this.data[this.currentIndex + 1];
        this.currentIndex += 2;
        return opcode;
    }

    jump(address) {
        this.currentIndex = address;
    }

    getAsset(size, address) {
        return new Uint8Array(this.data.slice(address, address + size));
    }

    setByte(address, val) {
        this.data[address] = val;
    }
}