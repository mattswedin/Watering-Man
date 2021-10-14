
export default class HealthBar {
    constructor(canvasWidth, canvasHeight, wateringman) {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = 45
        this.y = 45
        this.wateringman = wateringman
        this.imgSrc = "src/assets/drop/life.png"
    };

    draw() {

        const life = new Image();
        life.src = this.imgSrc
        let that = this;
        life.onload = function () {
            // that.ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight)
            // console.log(that.wateringman.health)
            if (that.wateringman.health.length === 3){
            that.ctx.drawImage(life, 165, 75, that.x, that.y);
            that.ctx.drawImage(life, 210, 75, that.x, that.y);
            that.ctx.drawImage(life, 255, 75, that.x, that.y);
            } else if (that.wateringman.health.length === 2){
                that.ctx.drawImage(life, 165, 75, that.x, that.y);
                that.ctx.drawImage(life, 210, 75, that.x, that.y);
            } else if (that.wateringman.health.length === 1){
                that.ctx.drawImage(life, 165, 75, that.x, that.y);
            }

        }
    };
};