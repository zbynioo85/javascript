class DigitClock {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    setTime() {
        return moment().format('hh:mm:ss');
    }
    Timeinterval(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillText(this.setTime(), this.canvas.width/2,this.canvas.height/2 );
    }
}
export default DigitClock;