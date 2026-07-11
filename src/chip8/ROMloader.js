// Ad Maiorem Dei Gloriam!

// Shall load the ROM on memory and return thge bytes
export default class ROMLoader {
    constructor() {
        this.data = null; // Chip8 have 4096 bytes.
        this.currentIndex = 0;
    }

    async loadROM(file) {
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
}