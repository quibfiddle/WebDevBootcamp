//first Exercise

var button = document.querySelector("button");
var body = document.querySelector("body");

body.style.background = "white";

button.addEventListener("click", function(){

//my initial attempt was if = white then change to purple. For what ever reason it was not working so i swapped it with the current syntax and it works. Ill have to ponder on that some time

	if(body.style.background != "purple"){
		body.style.background = "purple";
		console.log("changing to pruple");
	}
	else{
		body.style.background = "white";
		console.log("changing to white");
	}
})


//Colts Solution is below, he uses a boolean toggle to determine the current status of the color, I THINK MY WAY IS BETTER LOLZ

// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("ckick", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 		isPurple = false;
// 	}
// 	else{
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// })