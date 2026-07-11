// Ad Maiorem Dei Gloriam!

function makeOpcode(uint16) {
    return [(uint16 & 0xF000) >> 12, (uint16 & 0x0F00) >> 8, (uint16 & 0x00F0) >> 4, (uint16 & 0x000F)]
}

export default class Chip8Engine {
    constructor(canvasRef, kbRef, romStream) {
        this.canvas = canvasRef;
        this.kb = kbRef;
        this.romStream = romStream;

        console.log(romStream)

        this.currentInstruction = 0x0000;

        this.registers = new Uint8Array(16);

        this.delayTimer = 255;
        this.soundTimer = 255;

        this.stack = new Uint8Array(48);
    };

    step() {
        try {
            console.log(this.currentInstruction);
            this.currentInstruction = this.romStream.getOpcode();
                
            this.executeInstruction(makeOpcode(this.currentInstruction));

            this.delayTimer--;
            this.soundTimer--;

            this.canvas.render();
        } catch (e) {
            alert(e);
            return;
        }
    }

    executeInstruction(opcode) {
        switch (opcode[0]) {
            case 0x0:
                this.canvas.clear();
                break;
        }
    }

    initROM() {
        this.step();
        setInterval((() => {this.step()}), 1000/60);
    }
}