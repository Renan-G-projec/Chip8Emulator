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

        this.stack = [];
        this.gameState = "RUNNING";
        
    };

    step() {
        console.log(`Program Counter: ${this.romStream.currentIndex}`)
        try {
            if (this.gameState == "RUNNING") this.currentInstruction = this.romStream.getOpcode();
            this.executeInstruction(makeOpcode(this.currentInstruction));

            if (this.delayTimer > 0) this.delayTimer--;
            if (this.soundTimer > 0) this.soundTimer--;
        } catch (e) {
            alert(e);
            return;
        }
    }
    
    executeInstruction(opcode) {
        if (this.romStream.currentIndex == 589) {
            console.log("PAUSE");
            console.log(opcode)
        }
        switch (opcode[0]) {
            case 0x0:
                switch (opcode[3]) {
                    case 0x0:
                        this.canvas.clear();
                        this.canvas.render();
                        break;
                    case 0xE:
                        this.romStream.jump(this.stack.pop());
                        break;
                }
                break;
            case 0x1: // Jump to Address
                const jmpAddress = opcode[1] << 8 | opcode[2] << 4 | opcode[3];
                this.romStream.jump(jmpAddress);
                break;
            case 0x2: // Calls subroutine
                this.stack.push(this.romStream.currentIndex);
                const address02 = opcode[1] << 8 | opcode[2] << 4 | opcode[3];
                this.romStream.jump(address02);
                break;
            case 0x3: // Skip if VX = NN;
                const registerVal03 = this.registers[opcode[1]];
                const val03 = opcode[2] << 4 | opcode[3];
                console.log("CASE 0x3")
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
            case 0x7: // Adds NN to Vx
                const val07 = opcode[2] << 4 | opcode[3];
                this.registers[opcode[1]] += val07;
                break;
            case 0x8: // Math and Bit ops
                switch (opcode[3]) {
                    case 0x0: // Assign Vx to Vy
                        this.registers[opcode[1]] = this.registers[opcode[2]];
                        break;
                    case 0x1: // Bitwise OR
                        this.registers[opcode[1]] |= this.registers[opcode[2]];
                        break;
                    case 0x2: // Bitwise AND
                        this.registers[opcode[1]] &= this.registers[opcode[2]];
                        break;
                    case 0x3: // Bitwise XOR
                        this.registers[opcode[1]] ^= this.registers[opcode[2]];
                        break;
                    case 0x4: // Add with overflow flag
                        const sum084 = this.registers[opcode[1]] + this.registers[opcode[2]];
                        this.registers[15] = Number(sum084 > 255);
                        this.registers[opcode[1]] = sum084;
                        break;
                    case 0x5: // Subtracts with underflow flag
                        const hasUnderflow085 = this.registers[opcode[1]] < this.registers[opcode[2]];
                        this.registers[15] = Number(hasUnderflow085);
                        this.registers[opcode[1]] -= this.registers[opcode[2]];
                        break;
                    case 0x6:
                        this.registers[opcode[1]] >>= 1;
                        break;
                    case 0x7:
                        this.registers[15] = this.registers[opcode[2]] >= this.registers[opcode[1]];
                        this.registers[opcode[1]] = this.registers[opcode[2]] - this.registers[opcode[1]];
                        break
                    case 0xE:
                        this.registers[opcode[1]] <<= 1;
                        break;
                }
                break;
            case 0x9: 
                if (this.registers[opcode[1]] != this.registers[opcode[2]]) this.romStream.getOpcode();
                break;
            case 0xA: 
                this.addressRegister = opcode[1] << 8 | opcode[2] << 4 | opcode[3];
                break;
            case 0xB:
                this.addressRegister = (opcode[1] << 8 | opcode[2] << 4 | opcode[3]) + this.registers[0];
                break;
            case 0xC:
                this.registers[opcode[1]] = Math.round(Math.random() * 255) & (opcode[2] << 4 | opcode[3]);
                break;
            case 0xD:
                const addressRegister = this.addressRegister;
                const size = opcode[3];
                const sprite = this.romStream.getAsset(size, addressRegister);

                const changed = this.canvas.drawSprite(this.registers[opcode[1]], this.registers[opcode[2]], size, sprite);
                this.registers[15] = changed; // Js transforms boolean in 0-1 vals

                break
            case 0xE:
                switch (opcode[2]) {
                    case 0x9: 
                        if (this.kb.isKeyPressed(0x0F & this.registers[opcode[1]])) this.romStream.getOpcode();
                        break;
                    case 0xA: 
                        if (!this.kb.isKeyPressed(0x0F & this.registers[opcode[1]])) this.romStream.getOpcode();
                        break;
                }
                break;
            case 0xF:
                switch (opcode[2]) {
                    case 0x0:
                        if (opcode[3] == 0xA) {

                            this.gameState = "AWAITING";
                            let theresKey = false;
                            
                            for (let i = 0; i < 16; i++) {
                                if (this.kb.keyState[i]) {
                                    theresKey = true;
                                    this.registers[opcode[1]] = i;
                                    break;
                                }
                            }
                            if (theresKey) this.gameState = "RUNNING";
                        } else {
                            this.registers[opcode[1]] = this.delayTimer;
                        }
                        break;
                    case 0x1:
                        switch (opcode[3]) {
                            case 0x5:
                                this.delayTimer = this.registers[opcode[1]];
                                break;
                            case 0x8:
                                this.soundTimer = this.registers[opcode[1]];
                                break;
                            case 0xE:
                                this.addressRegister += this.registers[opcode[1]];
                                break;
                        }
                        break
                    case 0x2:
                        this.addressRegister = this.registers[opcode[1]] * 5;
                        break;
                    case 0x3: 
                        const decimalRep = this.registers[opcode[1]].toString().padStart(3, '0');
                        const bytesRep = [ Number(decimalRep[0]), Number(decimalRep[1]), Number(decimalRep[2]) ];

                        this.romStream.setByte(this.addressRegister, bytesRep[0]);
                        this.romStream.setByte(this.addressRegister + 1, bytesRep[1]);
                        this.romStream.setByte(this.addressRegister + 2, bytesRep[2]);
                        break;
                    case 0x5:
                        const numFill = opcode[1];
                        for (let i = 0; i <= numFill; i++) {
                            this.romStream.setByte(this.addressRegister + i, this.registers[i]);
                        }
                        break;
                    case 0x6:
                        const numDump = opcode[1];
                        const dumpedData = this.romStream.getAsset(numDump + 1, this.addressRegister);

                        for (let i = 0; i <= numDump; i++) {
                            this.registers[i] = dumpedData[i];
                        }

                        break;
                        
                }
                break
        }
    }

    initROM() {
        this.step();
        setInterval((() => {this.step()}), 1000/60);
    }
}