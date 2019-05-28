function setTime(){
    return moment().format('h:mm:ss a');
}
const canvas = document.querySelector('.myCanvas');
let ctx = canvas.getContext("2d");
console.log(setTime());
setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(setTime(),50,50);

},1000);
const canvas2 = document.querySelector('.myCanvas2');
let ctx2 = canvas2.getContext("2d");
const tab=[12,90,54,20,90,10,30,56,98,4];
let przes=10;
function drawLinie(heightRect,przes){
    
   ctx2.fillRect((500-przes), (200-heightRect), 10, heightRect);
}
let i=0;
// drawLinie(tab[2],przes);
setInterval(function(){

    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    
    drawLinie(tab[i],przes);
    i++;
    przes+=10;


},1000);