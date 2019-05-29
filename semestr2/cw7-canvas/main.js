import DigitClock from './components/digitalClock.js'
import AnalogClock from './components/analogClock.js'
const canvas = document.querySelector('.myCanvas');
const clock = new DigitClock(canvas);
setInterval(function () {
    clock.Timeinterval()
}, 1000);
// zegar analogowy





const canvas2 = document.querySelector('.myCanvas2');
let ctx2 = canvas2.getContext("2d");
let przes = 20;

function drawLinie(heightRect, przes) {

    ctx2.fillRect((490), (200 - heightRect), 10, heightRect);
    //    ctx2.translate(10, 0);

}

function move() {
    ctx2.translate(-10, 0);
}
let i = 0;
// drawLinie(tab[2],przes);
setInterval(function () {
    let rand = Math.floor(Math.random() * 500)




    i++;
    przes += 10;

    drawLinie(rand, przes);
    move()

    // move();
    //  ctx2.translate(-30,0)
    // if(przes>=500){
    //     ctx2.translate(20, 0);
    //     drawLinie(rand,przes);



}, 1000);
const canvas3 = document.querySelector('.myCanvas3');
const Aclock = new AnalogClock(canvas3);
canvas3.getContext("2d").translate(canvas3.height / 2, canvas3.height / 2);
setInterval(function () {
    canvas3.getContext("2d").beginPath();
    Aclock.drawClock()
    Notification.requestPermission().then(function (result) {
       let notification= new Notification("zegar działa");
       setTimeout(notification.close.bind(notification), 1000);
    })
}, 1000);