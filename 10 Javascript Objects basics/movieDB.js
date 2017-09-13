//Movie DB will have an array, full of objects, and the objects will have a title, a boolean value
//if i have seen it, and a numerical rating

var movieDB = [
	{
		name: "ConAir",
		seenit: true,
		rating: 5
	},
	{
		name: "National Treasure",
		seenit: true,
		rating: 5
	},
	{
		name: "FaceOff",
		seenit: false,
		rating: 0
	}
]

//A loop that will print out the movie list

for (var i = 0; i < movieDB.length; i++) {
	//Evaluates if i have seen it
	if(movieDB[i]["seenit"] == true){
	
	console.log("I have seen " + movieDB[i]["name"] + " and have given it a rating of " + movieDB[i]["rating"] + " stars");

	}

	else{
	console.log("I have not seen " + movieDB[i]["name"] + " and have given it a rating of " + movieDB[i]["rating"] + " stars");
	}
}


//How colt did it:

movieDB.forEach(function(movie){
	//instead of having a bunch of +'s in the console.log he just creates a var result, that gets edited based on the information in the loop'
	var result = "You have ";

	if(movie.seenit){
		// in his code he takes a shortcut, you dont need to spell out if condition is equal to true, it already means that with just putting in if(true) or if(false)

		result += "watched ";
	}
	else{
		result += "not seen ";
	}

	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
})


//Colts Code can be refactored to look like this:

function buildString(movie){
	var result = "You have ";
	if(movie.seenit){
		result += "watched ";
	}
	else{
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movieDB.forEach(function(movie){
	console.log(buildString(movie));
})