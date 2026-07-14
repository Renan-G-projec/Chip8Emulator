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
        let changed = false;

        for (let row = 0; row < height; row++) {
            for (let col = 0; col < 8; col++) {
                const currentCanvasX = posX + col;
                const currentCanvasY = posY + row;

                // Clamps the drawing to the canvas
                if (currentCanvasX < 0 || currentCanvasX >= this.width) continue; 
                if (currentCanvasY < 0 || currentCanvasY >= this.height) continue; 

                const currentCanvasIndex = currentCanvasY * this.width + currentCanvasX;
                const canvasBitInfo = this.data[currentCanvasIndex];
                const spriteBitInfo = (uint8array[row] & (0b10000000 >> col)) >> (7 - col);

                if (canvasBitInfo && spriteBitInfo) changed = true;
                this.data[currentCanvasIndex] = canvasBitInfo ^ spriteBitInfo;
            }
        }

        this.render();
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