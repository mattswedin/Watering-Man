class WateringMan{
    constructor() {
        this.height = 200;
        this.width = 200;
        this.x = 50;
        this.y = 400;
        this.vel = { x: 0, y: 0 }
        this.player = new Image();
        this.player.src = "src/assets/watering_man/Playerreal.png"
    };
    

    draw(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.player, this.x, this.y, this.width, this.height);
    }

    

    update() {
        this.draw()
        this.x = this.x + this.vel.x;
        this.y = this.y + this.vel.y;
    }   
}
const wateringMan = new WateringMan;
export {wateringMan};
