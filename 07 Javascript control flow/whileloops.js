//print all numbers between -10 and 19

var num = -10;

while(num <= 19){
	console.log(num);
	num++;
}

//print all even numbers between 10 and 40

var evenNumbers = 10

while(evenNumbers <= 40){
	if((evenNumbers % 2) == 0){
		console.log(evenNumbers)
	}

	evenNumbers++;
}

//print all ood numbers between 300 and 333

var oddNum = 300

while(oddNum <= 333){
	if((oddNum % 2) == 1){
		console.log(oddNum)
	}

	oddNum++;
}

//print all numbers divisible by 5 and 3 between 5 and 50

var divNum = 5

while(divNum <= 50){
	if((divNum % 3) == 0){
		if((divNum % 5) == 0){
			console.log(divNum)
		}
	}
	divNum++;
}

while(divNum )