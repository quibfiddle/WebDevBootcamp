//printReverse() this function takes an array as an argument and prints out the elements in the array in reverse order
// should use a loop

var numbers = [1, 2, 3, 4];

//I decided to do this using a for loop, that becomes flase when the length of the array is less than or equal to 0

function printReverse(numbers){
	for (var i = numbers.length; i >= 0; i--) {
		console.log(numbers[i]);
	}
}

//isUniform() which takes an array as an argument and returns true if all elements in the array are identical
//should use a loop, and check values at each iteration of the loop


function isUniform(numbers){

	var firstValue = numbers[0];

	for (var i = 0; i < numbers.length; i++) {
		if (firstValue !== firstValue){
			return false;
		}
	}

	return true;
}

//sumArray() adds all array items provided to the function in the argument
//should use a loop, and should have an ongoing variable that tracks the total sum at each iteration of the loop

function sumArray(numbers){

	var total = 0

	for (var i = 0; i < numbers.length; i++) {
		var total = total + numbers[i];
		//added this to troubleshoot why its not adding the last value in the array ^^ turns out i was using i not numbers[i]
		console.log(total)
	}

	return total
}

//max() accepts an array as an argument and returns the largest number in that array

function max(numbers){
	var maximum = numbers[0]

	for (var i = 0; i < numbers.length; i++) {
		if(maximum < numbers[i]){
			maximum = numbers[i]
		}
	}

	return maximum
}