export class TimeText {
  constructor(x, y, text, color) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  animate(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.font = "150px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, this.x, this.y);
    ctx.closePath();
  }
}
