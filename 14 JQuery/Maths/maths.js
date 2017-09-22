var input1 = document.querySelector("#number1");
var input2 = document.querySelector("#number2");
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var result = document.querySelector("#result")

add.addEventListener("click", function(){
	result.textContent = Number(input1.value) + Number(input2.value);
});

subtract.addEventListener("click", function(){
	result.textContent = Number(input1.value) - Number(input2.value);
});

multiply.addEventListener("click", function(){
	result.textContent = Number(input1.value) * Number(input2.value);
});

divide.addEventListener("click", function(){
	result.textContent = Number(input1.value) / Number(input2.value);
});
