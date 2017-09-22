var inputOne = document.querySelector("#number1");
var inputTwo = document.querySelector("#number2");
var operation = document.querySelector("#operation");
var submit = document.querySelector("#submit");
var result = document.querySelector("#result");

submit.addEventListener("click", function(){
	console.log(operation.value);
	if(operation.value === "add"){
		output = Number(inputOne.value) + Number(inputTwo.value);
		result.textContent = output;
	}
	else if(operation.value === "subtract"){
		output = Number(inputOne.value) - Number(inputTwo.value);
		result.textContent = output;
	}
	else if(operation.value === "multiply"){
		output = Number(inputOne.value) * Number(inputTwo.value);
		result.textContent = output;		
	}
	else if(operation.value === "divide"){
		output = Number(inputOne.value) / Number(inputTwo.value);
		result.textContent = output;		
	};

	});

