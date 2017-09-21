var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbSpan = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
rgbSpan.textContent = pickedColor;


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	rgbSpan.textContent = pickedColor;
	
	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.background = colors[i]
	}

	h1.style.backgroundColor = "#232323"

	});


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}

	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++) {
	 arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
