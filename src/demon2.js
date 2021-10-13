let health = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

import { isShooting } from './drop';

export default class Demon2 {
    constructor(canvasWidth, canvasHeight, wateringman) {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.height = 500;
        this.width = 600;
        this.x = 900;
        this.y = -300;
        this.vel = { x: 0, y: 0 }
        this.imgSrc = "src/assets/demons/tulipDemon_r.png"
        this.wateringman = wateringman;


    };

    draw() {
        const demon = new Image();
        demon.src = this.imgSrc
        let that = this;
        demon.onload = function () {
            // that.ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight)
            that.ctx.drawImage(demon, that.x, that.y, that.width, that.height);
        }

    };

    move() {

        this.x += this.vel.x;
        this.y += this.vel.y;
        this.vel.x *= 0.1;
        this.vel.y *= 0.1;

        if ((this.wateringman.x) > this.x + 230 && !isShot) {
            this.imgSrc = "src/assets/demons/tulipDemon_r.png"
            this.vel.x += 1.2;
        }
        if ((this.wateringman.x) < this.x + 230 && !isShot) {
            this.imgSrc = "src/assets/demons/tulipDemon_l.png"
            this.vel.x -= 1.2;
        }
        if ((this.wateringman.y - 300) > this.y && !isShot) {
            this.vel.y += 1.2;
        }
        if ((this.wateringman.y - 300) < this.y && !isShot) {
            this.vel.y -= 1.2;
        };


        //WRAP
        if (this.x < -130) {
            this.x = 1200;
        } else if (this.x > 950) {
            this.x = -130;
        }

    };

    hit() {
        // console.log(this.wateringman.drop.x)
        // console.log(this.x)

        // if (this.wateringman.drop.x < this.x && this.wateringman.drop.x > this.x + 400 && this.wateringman.drop.y > this.y && this.wateringman.drop.y < this.y + 400){
        if (this.wateringman.drop.x >= this.x && this.wateringman.drop.x <= this.x + 400 && this.wateringman.drop.y >= this.y && this.wateringman.drop.y <= this.y + 500 && isShooting && !isShot) {
            this.shot()
        }
    }

    shot() {
        isShot = true;

        if (this.wateringman.facingRight) {
            this.imgSrc = 'src/assets/demons/tulipDemon_hit_l.png'
            this.x += 30
            console.log(health)
            health.splice(0, 1)

        } else if (this.wateringman.facingRight === false) {
            this.x -= 30
            this.imgSrc = 'src/assets/demons/tulipDemon_hit_r.png'
            console.log(health)
            health.splice(0, 1)
        }
        setTimeout(function () {
            isShot = false
        }, 300);
    };

    life() {
        if (health.length < 1) {
            return false;
        }
    }





    update() {

        if (health.length > 0) {
            this.draw()
            this.move()
            this.hit()
            this.life()
        }
    };

};

let isShot = false



