export default class Platforms {
    constructor(canvasWidth, canvasHeight, x, y, length) {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = x
        this.y = y
        this.length = length
        this.height = 1;
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.length, this.height)

        // // ctx.fillStyle = 'green';
        // ctx.fillRect(440, 440, 130, 1)

        // // ctx.fillStyle = 'green';
        // ctx.fillRect(575, 200, 200, 1)


    }
}