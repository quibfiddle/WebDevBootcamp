function isEven(num) {
	if(num % 2 == 0) {
		return true;
	}
	else {
		return false;
	}
}

function cantEven(num) {
	return num % 2 === 0;
}
	

function factorial(fact) {
	if(fact == 0) {
		return 1;
	}

	return fact * factorial(fact -1);

}

function kebabToSnake(text) {
	return text.replace("-", "_");
}

// 6! is going to be 6 * 5 * 4 * 3 * 2 * 1)