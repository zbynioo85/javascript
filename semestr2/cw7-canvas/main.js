import DigitClock from './components/digitalClock.js'
import AnalogClock from './components/analogClock.js'
import Paint from './components/PaintInCanvas.js'
const canvas = document.querySelector('.myCanvas');
const clock = new DigitClock(canvas);
setInterval(function () {
    clock.Timeinterval()
}, 1000);
// zegar analogowy





const canvas2 = document.querySelector('.myCanvas2');
let ctx2 = canvas2.getContext("2d");
let przes = 20;

function drawLinie(heightRect) {
    ctx2.fillRect((490), (200 - heightRect), 10, heightRect);
}

function move() {
    ctx2.translate(-10, 0);
}
let i = 0;
setInterval(function () {
    
    if(i%2===0){
        ctx2.fillStyle="#666";
    }
    else{
        ctx2.fillStyle="#636";
    }
     i++;
     let rand = Math.floor(Math.random() * canvas2.height)
   
    drawLinie(rand, przes);
    move()
}, 1000);
const canvas3 = document.querySelector('.myCanvas3');
const Aclock = new AnalogClock(canvas3);
canvas3.getContext("2d").translate(canvas3.height / 2, canvas3.height / 2);
setInterval(function () {
    canvas3.getContext("2d").beginPath();
    Aclock.drawClock()
    // Notification.requestPermission().then(function (result) {
    //    let notification= new Notification("zegar działa");
    //    setTimeout(notification.close.bind(notification), 1000);
    // })
}, 1000);
// paint
const canvas4 = document.querySelector('.myCanvas4');
const canvas5 = document.querySelector('.myCanvas5');
const ctx4 = canvas4.getContext("2d");
const ctx5 = canvas5.getContext("2d");
const CanPaint=new Paint(canvas4,ctx4,canvas5, ctx5);
CanPaint.drawLine();