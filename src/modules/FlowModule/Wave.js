import { Point } from "../share/Point";

export class Wave {
  constructor(width, height, totalPoints, y) {
    this.width = width;
    this.height = height;
    this.totalPoints = totalPoints;
    this.points = [];
    this.val = 0;
    this.velocity = 0.05;
    for (let i = 0; i < totalPoints; i++) {
      const point = new Point(i, (i / (totalPoints - 1)) * this.width, y);
      this.points[i] = point;
    }
    this.y = y;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  animate(ctx) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(0, 0, 0, 0.2)`;
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 0; i < this.totalPoints; i++) {
      this.points[i].fixedY = this.y;
      if (i < this.totalPoints - 1 && i !== 0) {
        this.points[i].update();
      } else {
        this.points[i].y = this.y;
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      prevX = this.points[i].x;
      prevY = this.points[i].y;
      // ctx.arc(prevX, prevY, 10, 0, Math.PI * 2);
    }
    ctx.lineTo(
      this.points[this.totalPoints - 1].x,
      this.points[this.totalPoints - 1].y
    );
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.fill();
    ctx.closePath();
  }
}
