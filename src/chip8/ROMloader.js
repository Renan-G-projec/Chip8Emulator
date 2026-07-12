// Ad Maiorem Dei Gloriam!

// Shall load the ROM on memory and return thge bytes
export default class ROMLoader {
    constructor() {
        this.data = null; // Chip8 have 4096 bytes.
        this.currentIndex = 512; // Starting point is aadress 512 (as we are handling with 16bits, it is half adressed.)
    }

    async loadROM(file) {
        this.currentIndex = 0;
        return new Promise((resolve) => {
            const reader = new FileReader();
    
            reader.readAsArrayBuffer(file);
    
            reader.onload = () => {
                const { result } = reader;
                this.data = new Uint8Array(result, 1);
                console.log(this.data);
                resolve();
            }
        })
    }

    getOpcode() {
        if (!this.data || this.data.length < 512) throw new Error("Tryed to acess byte but no ROM is loaded.");
        const opcode = this.data[this.currentIndex] << 8 | this.data[this.currentIndex + 1];
        this.currentIndex += 2;
        return opcode;
    }

    jump(address) {
        this.currentIndex = address;
    }

    getAsset(size, address) {
        return new Uint8Array(this.data, address, size);
    }

    setByte(address, val) {
        this.data[address] = val;
    }
}