
export default class Overlay {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.imgSrc = "src/assets/backgrounds/over_bg.png"
    };

    draw() {

        const bg = new Image();
        bg.src = this.imgSrc
        let that = this;
        bg.onload = function () {
            // that.ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight)
            that.ctx.drawImage(bg, 100, 100, that.width, that.height);
        }
    };
};