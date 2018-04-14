const FPS = 30;
const RECT_WIDTH = 100;
const RECT_HEIGHT = 50;

var canvas;
var inputbox;
var ctx;

class FallingRectangle { 
	constructor (expression) {
		this.expression = expression;
		this.yPercentage = -0.1;
		this.xPercentage = Math.random();
	}
}

document.onload = init();

function init () {
/*	canvas = document.getElementById('game');
	canvas.width = window.innerWidth - 100;
	canvas.height = window.innerHeight - 100;
	
	inputbox = document.getElementById('inputbox')
	inputbox.autofocus = true;

	ctx = canvas.getContext("2d");

	document.addEventListener("keydown", handleKeyDown);

	setInterval(update, parseInt(1000 / FPS));*/
}

function handleKeyDown (e) {
	if (e.key == "Enter") {
		input = inputbox.value;
		inputbox.value = "";
	}
}

rectangles = [];
spawnRate = 100;
spawnCounter = 0;

function update () {
	/*canvas.width = window.innerWidth - 100;
	canvas.height = window.innerHeight - 100;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (spawnCounter <= 0) {
		spawnCounter = spawnRate;
		rectangles.push(new FallingRectangle("$" + generateExpression(3) + "$"));
	}
	spawnCounter--;

	ctx.beginPath();
	for (var i = 0; i < rectangles.length; i++) {
		var rect = rectangles[i];
		rect.yPercentage += 0.008;
		x = RECT_WIDTH / 2 + rect.xPercentage * (canvas.width - RECT_WIDTH);
		y = rect.yPercentage * (canvas.height - RECT_HEIGHT);

		ctx.rect(x - RECT_WIDTH / 2, y - RECT_HEIGHT / 2, RECT_WIDTH, RECT_HEIGHT);
		ctx.stroke();
		ctx.font = "20px Arial";
		ctx.textAlign = "center";
		ctx.fillText(rect.expression, x, y + 9);
	}
	ctx.closePath();*/
}