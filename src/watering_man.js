import { JavascriptModulesPlugin } from "webpack";

let keys = {}

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
        this.vel = { x: 4, y: 15 }
        this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
        this.draw = this.draw.bind(this);
    };
    

    draw() {
        const wm = new Image();
        wm.src = this.imgSrc
        let that = this;
        wm.onload = function(){
            that.ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight)
            that.ctx.drawImage(wm, that.x, that.y, that.width, that.height);}
    };

    jump(){
        let that = this
        let timeID = setInterval(function(){
            that.y = that.y - that.vel.y
            if (that.y < 250){
                clearInterval(timeID)
                let timeDID = setInterval(function(){
                    that.y = that.y + that.vel.y
                    if (that.y > 400) {
                        that.y = 400;
                        clearInterval(timeDID)
                        console.log(that.y)
                        
                        
                    }   
                }, 20)

            }
        }, 20) 
    }



    move(){
        if (keys["ArrowRight"]){
            this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
        this.x = this.x + this.vel.x

        } else if (keys["ArrowLeft"]) {
            this.imgSrc = "src/assets/watering_man/wm_idle_l.png"
            this.x = this.x - this.vel.x

        } else if (keys["ArrowUp"]){
            if (this.y === 400){
            this.jump()}
            

        // } else if (keys["ArrowUp"] && keys["ArrowRight"]){
        //     this.imgSrc = "src/assets/watering_man/wm_idle_r.png"
        //     this.x = this.x + this.vel.x
        //     this.y = this.y - this.vel.y
        }
        // this.y = this.y + this.vel.y;
    }

    

    update() {
        this.draw()
        this.move()
        
        
        
    }   
}

document.addEventListener("keydown", function (e) {
    keys[e.code] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.code] = false;
});
