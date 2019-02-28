const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const cols = canvas.width / scale;

var snake;

(function setup () {
	snake = new Snake();
	fruit = new Fruit();

	fruit.location();
	console.log(fruit)

	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		snake.draw();
	}, 250);
}());

window.addEventListener('keydown', ((evt) => {
	const direction = evt.key.replace('Arrow', '');
	snake.changeDirection(direction);
}));
