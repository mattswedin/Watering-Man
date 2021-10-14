import Overlayy from './overlay';
import WateringMan from './watering_man';
import Demon from './demon';
import Demon2 from './demon2';
import Demon3 from './demon3';
import {health} from './demon';
import HealthBar from './healthBar';



export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.wateringman = new WateringMan(this.canvasWidth, this.canvasHeight,);
        this.demon = []
        this.overlay = new Overlayy(this.canvasWidth, this.canvasHeight)
        this.healthBar = new HealthBar(this.canvasWidth, this.canvasHeight, this.wateringman)
        // this.sound = sound
    }

    makeDemon(){
        this.demon.push(new Demon(this.canvasWidth, this.canvasHeight, this.wateringman))
    }

    

    start(){
        requestAnimationFrame(this.start.bind(this));
        this.wateringman.update();
        this.demon[0].update(this.wateringman);
        this.overlay.draw()
        this.healthBar.draw()

        const kevin = new Demon2(this.canvasWidth, this.canvasHeight, this.wateringman)
        const dave = new Demon3(this.canvasWidth, this.canvasHeight, this.wateringman)
        

        if (this.demon[0].life() === false) {
            this.demon.splice(0, 1)
            this.demon.push(kevin)
            // console.log(this.demon[0])
        }

        if (this.demon[0].life() === false && this.demon[0] === kevin) {
            this.demon.splice(0, 1)
            this.demon.push(dave)
        }

        if (this.demon[0].life() === false && this.demon[0] === dave){
            this.demon.splice(0, 1)
            // this.sound.stop()
            refreshPage()
            alert('YOU HAVE WON WATERING MAN. CONGRATULATIONS. WATERING MAN MAY NOW GO BACK TO GARDENING IN PEACE')
        }

        
        // platform1.draw(this.ctx);
        // platform2.draw(this.ctx);
        // platform3.draw(this.ctx);
        // platform4.draw(this.ctx);
    }

    


};

function refreshPage() {
    window.location.reload();
}











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


