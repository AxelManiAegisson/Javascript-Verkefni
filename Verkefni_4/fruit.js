function Fruit() {
	this.x;
	this.y;
	//staðsetning á ávöxtinum er random
	this.location = function() {
		//velur random x og y staðsetningu
		this.x = (Math.floor(Math.random() * rows -1) +1) * size;
		this.y = (Math.floor(Math.random() * cols -1) +1) * size;
	}
	//teiknar ávöxt
	this.draw = function() {
		ctx.fillStyle = "#00FF00"
		ctx.fillRect(this.x, this.y, size, size)
	}
}