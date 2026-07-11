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
     * @description Draws the frambuffer to the screen.
     */
    render() {
        this.canvasContext.reset();

        this.canvasContext.fillStyle = this.fillColor;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.data[x * this.height + y] > 0) this.canvasContext.fillRect(x, y, 1, 1);
            }
        }
    }
}