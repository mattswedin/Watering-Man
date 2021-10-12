import Platforms from './platforms';
import WateringMan from './watering_man';

const platform1 = new Platforms(968, 632, 65, 460, 300);
const platform2 = new Platforms(968, 632, 440, 440, 130);
const platform3 = new Platforms(968, 632, 575, 200, 200);
const platform4 = new Platforms(968, 632, 850, 382, 50);

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.wateringman = new WateringMan(this.canvasWidth, this.canvasHeight);
    }



    start(){
        
        requestAnimationFrame(this.start.bind(this));
        // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.wateringman.update()
        platform1.draw(this.ctx)
        platform2.draw(this.ctx)
        platform3.draw(this.ctx)
        platform4.draw(this.ctx)
    }

};






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


