// import { JavascriptModulesPlugin } from "./webpack";
// import { platform1, platform2, platform3, platform4 } from './game.js'
import Drop from "./drop.js"
let keys = {}
let floor = 400
let canHurt = false;

export default class WateringMan{
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.height = 200;
        this.width = 200;
        this.x = 50;
        this.y = 400;
        this.vel = { x: 0, y: 0 }
        this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
        this.draw = this.draw.bind(this);
        this.jumping = false;
        this.facingRight = true;
        this.drop = new Drop(canvasWidth, canvasHeight, this)
        this.health = [1, 1, 1]
    };
    

    draw() {
        const wm = new Image();
        wm.src = this.imgSrc
        let that = this;
        wm.onload = function(){
            that.ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight)
            that.ctx.drawImage(wm, that.x, that.y, that.width, that.height);}
    };

    move(){

            let right = false;
            let left = false;
            let up = false;

            if (keys["ArrowRight"]) {
                this.facingRight = true
                right = true;
                this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
            } else if (keys["ArrowRight"] === false) {
                right = false
            }

            if (keys["ArrowLeft"]) {
                this.facingRight = false
                left = true;
                this.imgSrc = "src/assets/watering_man/wm_idle_l.png"
            } else if (keys["ArrowLeft"] === false){
                left = false
            }

            if (keys["ArrowUp"]) {
                up = true;
            } else if (keys["ArrowUp"] === false) {
                up = false
            }



        if (up && this.jumping === false) {
            this.vel.y -= 19;
            this.jumping = true;
        }

        if (left) {
            this.vel.x -= 1.5;
        }

        if (right) {
            this.vel.x += 1.5;
        }

        this.vel.y += 1;
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.vel.x *= 0.79;

        // let platform1 = false;
        // let platform2 = false;
        // let platform3 = false;
        // let platform4 = false;
    
             // const platform1 = new Platforms(65, 460, 300);
            // const platform2 = new Platforms(440, 440, 130);
            // const platform3 = new Platforms(575, 200, 200);
            // const platform4 = new Platforms(850, 382, 50);
            // (canvasWidth, canvasHeight, x, y, length)

    //     if (this.y + 200 > 460 && this.x > 65 && this.x < 365){
    //         platform1 = true;
    //         console.log(platform1)
    //     } else {
    //         platform1 = false;
    //     }
        
    //     if (this.y > 440 + 200 && this.x > 440 && this.x < 130 + 440){
    //         platform2 = true;
    //     } else {
    //         platform2 = false;
    //     }
        
    //     if (this.y > 200 + 200 && this.x > 575 && this.x < 200 + 575) {
    //         platform3 = true;
    //     } else {
    //         platform3 = false;
    //     }
        
    //     if (this.y > 382 + 200 && this.x > 850 && this.x < 50 + 850){
            
    //         platform4 = true;
    //     } else {
    //         platform4 = false;
    //     }

    //     if (platform1){
    //         this.jumping = false;
    //         this.y = 460 + 200;
    //         this.vel.y = 0;
    //     } else if (platform2){
    //         this.jumping = false;
    //         this.y = 440 + 200;
    //         this.vel.y = 0;
    //     } else if (platform3) {
    //         this.jumping = false;
    //         this.y = 200 + 200;
    //         this.vel.y = 0;
    //     } else if (platform4) {
    //         this.jumping = false;
    //         this.y = 382 + 200;
    //         this.vel.y = 0;
    //     }

        

        // if (this.y > floor && !platform1 && !platform2 && !platform3 && !platform4) {
        //     this.jumping = false;
        //     this.y = floor;
        //     this.vel.y = 0;
        // };

        //FLOOR LAND

         if (this.y > floor) {
            this.jumping = false;
            this.y = floor;
            this.vel.y = 0;
        };

        //WRAP
        if (this.x < -130) {
            this.x = 950;
         } else if (this.x > 950) {
           this.x = -130;
        }

    };

    shoot(){

        if (keys["Space"]) {
            this.drop.shoot()
            // let that = this;
            // setTimeout(function () {
            //    that.shooting = false
            // }, 500);
        }


    }

    ouch(){
        canHurt = true
        this.imgSrc = "../src/assets/watering_man/wm_hit_r.png"
        this.health.splice(0, 1)
        setTimeout(function () {
            canHurt = false;
        }, 2000);
        
    }

    gameover(){
        if (this.health.length === 0){
            alert("GAME OVER");
            return true;
        }
    }


    // jump(){
    //     let that = this
    //     let timeID = setInterval(function(){
    //         that.y = that.y - that.vel.y
    //         if (that.y < 240){
    //             clearInterval(timeID)
    //             let timeDID = setInterval(function(){
    //                 that.y = that.y + that.vel.y
    //                 if (that.y > platform1.y && that.x > platform1.x && that.x < (platform1.x + platform1.length)) {
    //                     that.y = platform1.y;
    //                     clearInterval(timeDID)
    //                 } else if (that.y > floor){
    //                     console.log(platform1.y)
    //                     that.y = floor;
    //                     clearInterval(timeDID)
                        
    //                 }
    //             }, 20)
    //         }

    //     }, 20)
    // } 
    

    // platformed(){
    //     if (this.y >= platform1.y){
    //         this.y = platform1.y;
    //     } else if (this.y >= platform2.y){
    //         this.y = platform2.y;
    //     } else if (this.y >= platform3.y){
    //         this.y = platform3.y;
    //     } else if (this.y >= platform4.y){
    //         this.y = platform4.y;
    // }



  


        // if (keys["ArrowRight"]){
        //     this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
        // this.x = this.x + this.vel.x

        // } else if (keys["ArrowLeft"]) {
        //     this.imgSrc = "src/assets/watering_man/wm_idle_l.png"
        //     this.x = this.x - this.vel.x

        // } else if (keys["ArrowUp"]){
        //     this.jump()}
            

        // } else if (keys["ArrowUp"] && keys["ArrowRight"]){
        //     this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
        //     this.x = this.x + this.vel.x
        //     this.y = this.y - this.vel.y
        
        // this.y = this.y + this.vel.y;
    

    

    update() {
        this.draw()
        this.move()
        this.shoot()
        this.gameover()
        
    }   
}



document.addEventListener("keydown", function (e) {
    keys[e.code] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.code] = false;
});

export {canHurt};
