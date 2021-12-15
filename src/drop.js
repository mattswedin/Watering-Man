import { keys } from "./watering_man"

export default class Drop {
    constructor(canvasWidth, canvasHeight, wateringman) {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.height = 50;
        this.width = 50;
        this.wateringman = wateringman;
        // this.lx = this.wateringman.x - 20;
        // this.ly = this.wateringman.y + 15.5;
        // this.rx = this.wateringman.x + 165;
        // this.ry = this.wateringman.y + 15.5;
        // this.rvel = { x: 0, y: 0 }
        this.vel = { x: 0, y: 0 }
        this.x = this.wateringman.x + 165
        this.y = this.wateringman.y + 15.5

        this.imgSrc = "src/assets/drop/drop_r.png"
    };

    draw() {
        
        const drop = new Image();
        drop.src = this.imgSrc
        let that = this;
        drop.onload = function () {
            // that.ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight)
           that.ctx.drawImage(drop, that.x, that.y, that.width, that.height);
            }
    };

    

    move() {
        
        this.x += this.vel.x;
        this.y += this.vel.y;

    
        if (this.wateringman.facingRight && isShooting === false) {
            this.imgSrc = "src/assets/drop/drop_r.png"
            this.x = this.wateringman.x + 165
            this.y = this.wateringman.y + 15.5
            this.vel.x = 0
            isShooting = true
        }

        if (this.wateringman.facingRight === false && isShooting === false) {
            this.imgSrc = "src/assets/drop/drop_l.png"
            this.x = this.wateringman.x - 20
            this.y = this.wateringman.y + 15.5
            this.vel.x = 0
            isShooting = true
        };

        if (this.wateringman.facingRight && isShooting) {
            this.vel.x += 1.5;
        }

        if (this.wateringman.facingRight === false && isShooting) {
            this.vel.x -= 1.5;
        }

    }

    update() {
        this.draw()
        this.move()
    }

    shoot() {
        

        if (isShooting === false){
            this.update()
        }

        if (isShooting) {
            this.update()
           let that = this
            setTimeout(function () {
                isShooting = false;
                that.vel.x = 0
                keys["Space"] = false;
            }, 275);
        }
    }
};

let isShooting = false

export { isShooting };



