class Paint {
    constructor(canvas, ctx, lineWidth = 10, lineColor = "#000") {
        this.canvas = canvas;
        this.ctx = ctx;
       this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = lineColor;
        this.rect = null;

    }
    drawLine() {
        
        this.canvas.onmousedown = (ev) => {
            this.rect = {};
            this.rect.x0 = ev.pageX - this.canvas.offsetLeft;
            this.rect.y0 = ev.pageY - this.canvas.offsetTop;
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
           
        };

        this.canvas.onmousemove = (ev) => {
            if (this.rect) {
                  
                this.rect.x1 = ev.pageX - this.canvas.offsetLeft;
                this.rect.y1 = ev.pageY - this.canvas.offsetTop;
                this.ctx.beginPath();
                // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                // this.ctx.strokeRect(this.rect.x0, this.rect.y0,
                //     this.rect.x1 - this.rect.x0, this.rect.y1 - this.rect.y0);
                 this.ctx.moveTo(this.rect.x0, this.rect.y0);
                this.ctx.lineTo(this.rect.x1,this.rect.y1);
                //  this.ctx.stroke();
                

               
               
            }
        };


        this.canvas.onmouseup = (ev) => {
            // this.ctx.strokeRect(this.rect.x0, this.rect.y0,
            //     this.rect.x1 - this.rect.x0, this.rect.y1 - this.rect.y0);
            this.ctx.stroke();
            this.rect = null;
        };
    }




}
export default Paint;