function Fruit() {
	this.x;
	this.y;

	this.location = function() {
		this.x = (Math.floor(Math.random() * rows -1) +1) * scale;
		this.y = (Math.floor(Math.random() * cols -1) +1) * scale;

	}
}