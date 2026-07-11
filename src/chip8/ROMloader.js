// Ad Maiorem Dei Gloriam!

// Shall load the ROM on memory and return thge bytes
export default class ROMLoader {
    constructor() {
        this.data = null; // Chip8 have 4096 bytes.
        this.currentIndex = 256; // Starting point is aadress 512 (as we are handling with 16bits, it is half adressed.)
    }

    async loadROM(file) {
        this.currentIndex = 512;
        return new Promise((resolve) => {
            const reader = new FileReader();
    
            reader.readAsArrayBuffer(file);
    
            reader.onload = () => {
                const { result } = reader;
                this.data = new Uint16Array(result, 2);
                console.log(this.data);
                resolve();
            }
        })
    }

    getOpcode() {
        if (!this.data || this.data.length < 256) throw new Error("Tryed to acess byte but no ROM is loaded.");
        const opcode = this.data[this.currentIndex];
        this.currentIndex++;
        return opcode;
    }
}