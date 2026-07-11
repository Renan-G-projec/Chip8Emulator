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
            case 0x0: // Clear Display
                this.canvas.clear();
                break;
            case 0x1: // Jump to Address
                const jmpAddress = opcode[1] << 8 | opcode[2] << 4 | opcode[3];
                this.romStream.jump(jmpAddress);
                break;
            case 0x3: // Skip if VX = NN;
                const registerVal03 = this.registers[opcode[1]];
                const val03 = opcode[2] << 4 | opcode[3];
                if (val03 === registerVal03) this.romStream.getOpcode();
                break;
            case 0x4: // Skip if VX != NN;
                const registerVal04 = this.registers[opcode[1]];
                const val04 = opcode[2] << 4 | opcode[3];
                if (val04 !== registerVal04) this.romStream.getOpcode();
                break;
            case 0x5: // Skip if Vx == Vy;
                const registerValX05 = this.registers[opcode[1]];
                const registerValY05 = this.registers[opcode[2]];
                if (registerValX05 === registerValY05) this.romStream.getOpcode();
                break;
            case 0x6: // Sets Vx to NN
                const val06 = opcode[2] << 4 | opcode[3];
                this.registers[opcode[1]] = val06;
                break;
            
        }
    }

    initROM() {
        this.step();
        setInterval((() => {this.step()}), 1000/60);
    }
}