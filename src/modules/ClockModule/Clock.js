class Clock {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius / 2;
		this.angle = 0;
		this.color = color;
	}
	/**
	 *
	 * @param {CanvasRenderingContext2D} ctx
	 */
	animate(ctx) {
		ctx.beginPath();
		ctx.lineWidth = this.radius * 2;
		ctx.strokeStyle = this.color;
		ctx.arc(
			this.x,
			this.y,
			this.radius,
			-Math.PI * 0.5 + this.angle,
			Math.PI * 1.5
		);
		// -Math.PI*0.5 ~ Math.PI * 1.5
		// ( 0 ~ Math.PI * 2 ) - Math.PI * 0.5;
		ctx.stroke();
		ctx.closePath();
	}

	setAngle(angle) {
		if (angle >= Math.PI * 2) {
			this.angle = Math.PI * 2;
		} else {
			this.angle = angle;
		}
	}
}

export default Clock;
