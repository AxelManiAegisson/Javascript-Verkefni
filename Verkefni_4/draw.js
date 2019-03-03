//set up leikinn
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
//stærð hluta í leiknum
const size = 25;
//leikjaborðið
const rows = canvas.height / size;
const cols = canvas.width / size;

(function setup () {
	//einfalda functioninn
	snake = new Snake();
	fruit = new Fruit();
	//set ávöxt á random stað
	fruit.location();
	//game loopann
	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		fruit.draw();
		snake.draw();
		//ef snákurinn rekst á ávöxt fer ávöxturinn á nýjann stað og snákurinn lengist
		if (snake.eat(fruit)) {
			fruit.location();
		}
		//ef snákurinn klessir á sig þá resettast hann
		snake.collission();
		document.querySelector('.stig')
			.innerText = snake.total;
	}, 100);
}());
//tekur inn input frá lyklaborði
window.addEventListener('keydown', ((evt) => {
	const dir = evt.key.replace('Arrow', '');
	snake.changeDir(dir);
}));