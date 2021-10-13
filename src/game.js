import Overlay from './overlay';
import WateringMan from './watering_man';
import Demon from './demon';
import Demon2 from './demon2';
import {health} from './demon';



export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.wateringman = new WateringMan(this.canvasWidth, this.canvasHeight);
        this.demon = []
        this.overlay = new Overlay(this.canvasWidth, this.canvasHeight)
    }

    makeDemon(){
        this.demon.push(new Demon(this.canvasWidth, this.canvasHeight, this.wateringman))
    }

    

    start(){
        requestAnimationFrame(this.start.bind(this));
        this.overlay.draw()
        this.wateringman.update();
        this.demon[0].update(this.wateringman);
        

        if (this.demon[0].life() === false) {
            this.demon.splice(0, 1)
            console.log('hi')
            this.demon.push(new Demon2(this.canvasWidth, this.canvasHeight, this.wateringman))
        }

        
        // platform1.draw(this.ctx);
        // platform2.draw(this.ctx);
        // platform3.draw(this.ctx);
        // platform4.draw(this.ctx);
    }


};





// export { platform1, platform2, platform3, platform4 };






// document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowLeft') {
//         console.log("left")
//         this.wateringman.x -= 10;
//         this.wateringman.update(this.ctx)

//     }});
//     } else if (event.key === 'ArrowRight') {
//         console.log("right")
//         this.wateringman.x += 10;
//         this.wateringman.update(this.ctx)
//     }
// });


