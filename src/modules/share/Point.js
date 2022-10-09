export class Point {
	constructor(index, x, y, speed = 1) {
		this.x = x;
		this.y = y;
		this.fixedY = y;
		this.speed = 0.007 * speed;
		this.cur = index;
		this.max = Math.random() * 25 + 25;
	}
	update() {
		this.cur += this.speed;
		this.y = this.fixedY + Math.sin(this.cur) * this.max;
	}
}
