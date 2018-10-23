class Bouncing {
    constructor(x, y, col) {
        this.x = x;
        this.y = y;
        this.r = random(7, 38);
        this.col = col;
        this.xSpeed = random (-6, 6);
        this.ySpeed = random (-6, 6)
    }
    show() {
        // Draw Player 2
        fill(player2.col);
        noStroke(0);
    	ellipse(this.x, this.y, 2 * this.r);
        }
    bounce() {
        this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x + this.r > width || this.x - this.r < 0) {
			this.xSpeed = -this.xSpeed;
			}

		if (this.y + this.r > height || this.y - this.r < 0) {
			this.ySpeed = -this.ySpeed;
			}
        }
}