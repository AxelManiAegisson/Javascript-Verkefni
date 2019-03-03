//set up snakinn
function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = size * 1;
	this.ySpeed = 0;
	this.total = 0;
	this.tail = [];
	//teiknar snakinn
	this.draw = function() {
		ctx.fillStyle = "#FFFFFF";
		//ef tail arrayið er með einhvað í sér þá teiknar það annan kassa fyrir aftan höfuðið
		for (let i=0; i<this.tail.length; i++) {
			ctx.fillRect(this.tail[i].x, this.tail[i].y, size, size);
		}

		ctx.fillRect(this.x, this.y, size, size);
	}
	this.update = function () {
		//uppfærir tail þannig að það sé fyrir aftan snákinn
		for (let i=0; i<this.tail.length -1; i++) {
			this.tail[i] = this.tail[i+1];
		}
		//setur kassa fyrir aftan snákinn
		this.tail[this.total -1] = {x: this.x, y: this.y};
		//hreyfir snakinn
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		//ef hann fer út fyrir canvasið þá birtist hann hinum meginn við canvasinn 
		if (this.x > canvas.width) {
			this.x = 0;
		}
		if (this.y > canvas.height) {
			this.y = 0;
		}
		if (this.x < 0) {
			this.x = canvas.width;
		}
		if (this.y < 0) {
			this.y = canvas.height;
		}		
	}
	//tekur inn inputtið frá lyklaborðinu og breytir um átt eftir hvaða takka spilarinn ýtir á 
	this.changeDir = function(dir) {
		switch(dir) {
			case 'Up':
				this.xSpeed = 0;
				this.ySpeed = -size * 1;
				break;
			case 'Down':
				this.xSpeed = 0;
				this.ySpeed = size * 1;
				break;
			case 'Left':
				this.xSpeed = -size * 1;
				this.ySpeed = 0;
				break;
			case 'Right':
				this.xSpeed = size * 1;
				this.ySpeed = 0;
				break;
		}
	}
	//collsion við ávöxt
	this.eat = function(fruit) {
		//ef snákurinn og ávöxturinn eru á sama stað þá bætist við stiginn 
		if (this.x === fruit.x && this.y === fruit.y) {
			this.total++;
			return true;
		}
		return false;
	}
	//collision við snákinn
	this.collission = function() {
		//ef snákurinn er á sama stað og tail þá resettast snákurinn og stiginn
		for (var i=0; i<this.tail.length; i++) {
			if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
			this.total = 0;
			this.tail = [];
			}
		}
	}
}