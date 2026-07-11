// Ad Maiorem Dei Gloriam!

export default class Canvas {

    constructor() {
        this.width = 64;
        this.height = 32;

        this.data = new Uint8Array(this.width * this.height);
        this.fillColor = "white";
        this.DOMCanvas = document.getElementById("main-canvas");
        
        this.canvasContext = this.DOMCanvas.getContext("2d");
    }

    /**
     * @description Clears the framebuffer
     */
    clear() {
        this.data.fill(0);
    }

    /**
     * @description Draws an 8 pixel wide square in the screen
     * @returns {Boolean} If any pixel was flipped
     */
    drawSprite(posX, posY, height, uint8array) {
        const getindex = function (x, y) { return y * this.width + height };
        const setPixel = function (x, y, val) { this.data[getindex(x, y)] = val}

        let changed = false;

        for (let currentRow = 0; currentRow < height; currentRow++) {
            for (let currentCol = 0; currentCol < 8; currentCol++) {
                const currentX = posX + currentCol;
                const currentY = posY + currentRow;

                const bit = (uint8array[currentRow] & (1 << currentCol)) >> currentCol;
                if (bit != this.data[getindex(currentX, currentY)]) changed = true;
                setPixel(currentX, currentY, bit);
            }
        }

        return changed;
    }

    /**
     * @description Draws the frambuffer to the screen.
     */
    render() {
        this.canvasContext.reset();

        this.canvasContext.fillStyle = this.fillColor;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.data[y * this.width + x] > 0) this.canvasContext.fillRect(x, y, 1, 1);
            }
        }
    }
}