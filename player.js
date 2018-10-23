class Player {
	constructor() {
		// Properties(State)
		this.x = width / 2;
		this.y = height / 2;
		this.r = 15;
		this.speed = 5;
		this.col = GREY;
	}
		// Methods (Behaviour)
		move() {
		// Player 1 Movement
		if (keyIsDown(LEFT_ARROW)) {
			this.x += -this.speed;
		} else if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		} else if (keyIsDown(UP_ARROW)) {
		this.y += -this.speed;
		} else if (keyIsDown(DOWN_ARROW)) {
			this.y += this.speed;
		}
	}
	show() {
		// Draw Player 1
		fill(this.col);
		noStroke();
		ellipse(this.x, this.y, 2 * this.r);
	}
	teleport() {
		this.x = Math.random() * 500;
		this.y = Math.random() * 500;
	}
}
