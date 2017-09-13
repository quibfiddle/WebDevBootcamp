//create secretNumber
var secretNumber = 4;

//ask user
var guess = Number(prompt("Guess a number"));

//check guess if right

if(guess === secretNumber){
	alert("You got it right!");
}

//otherwise check if higher
else if(guess > secretNumber){
	alert("Too High, Guess again.");
}


//otherwise check if lower

else{
	alert("too Low, Guess again.");
}