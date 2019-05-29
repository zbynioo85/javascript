class AnalogClock{
    constructor(canvas){
this.canvas=canvas;
this.ctx = canvas.getContext("2d");
this.radius=(this.canvas.height/2)*0.90;
    }
drawClock() {
  this.ctx.arc(0, 0, this.radius, 0 , 2 * Math.PI);
  this.ctx.fillStyle = "white";
  this.ctx.fill();
  this.ctx.beginPath();
  this.ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
  this.ctx.fillStyle = '#333';
  this.ctx.fill();
    this.drawNumbers();
    this.drawTime()
}
drawNumbers() {
  let ang;
  let num;
  this.ctx.font = this.radius * 0.15 + "px arial";
  this.ctx.textBaseline = "middle";
  this.ctx.textAlign = "center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    this.ctx.rotate(ang);
    this.ctx.translate(0, -this.radius * 0.85);
    this.ctx.rotate(-ang);
    this.ctx.fillText(num.toString(), 0, 0);
    this.ctx.rotate(ang);
    this.ctx.translate(0, this.radius * 0.85);
    this.ctx.rotate(-ang);
  }
}
 drawTime(){
  var hour = moment().format('hh');
  var minute = moment().format('mm');
  var second = moment().format('ss');
  //hour
  hour = hour%12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  this.drawHand(hour, this.radius*0.5, this.radius*0.07);
  //minute
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  this.drawHand(minute, this.radius*0.8, this.radius*0.07);
  // second
  second = (second*Math.PI/30);
  this.drawHand(second, this.radius*0.9, this.radius*0.02);
}
drawHand(pos, length, width) {
  this.ctx.beginPath();
  this.ctx.lineWidth = width;
  this.ctx.lineCap = "round";
  this.ctx.moveTo(0,0);
  this.ctx.rotate(pos);
  this.ctx.lineTo(0, -length);
  this.ctx.stroke();
  this.ctx.rotate(-pos);
}
}
export default AnalogClock;