// import { plats } from './platforms';
// import {wateringMan} from './watering_man'

import Game from "./game.js";

document.addEventListener("DOMContentLoaded", function () {
const canvas = document.getElementById('canvas');
const game = new Game(canvas);
game.makeDemon()
game.start()
})


// document.addEventListener("DOMContentLoaded", function () {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext('2d');
//     canvas.width = 968;
//     canvas.height = 632;
//     const bg = new Image()
//     // bg.src = 'src/assets/backgrounds/sweet.png';
//     // bg.onload = function () {
//     // ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)};
//     wateringMan.draw(ctx)
//     plats.draw(ctx)

    
// });


// document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowLeft') {
//         console.log("left")
//         wateringMan.x -= 10;
//         wateringMan.update()


//     } else if (event.key === 'ArrowRight') {
//         console.log("right")
//         wateringMan.x += 10;
//         wateringMan.update()
//     }
// });
