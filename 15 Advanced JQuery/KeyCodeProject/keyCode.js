$("body").keypress(function(event){
	var keyStroke = event.which;
	$("h1").text(event.which);
	if(String.fromCharCode(event.which) === " "){
		$(".jumbotron").text("SpaceBar")
	}
	else{
	$(".jumbotron").text(String.fromCharCode(event.which));
	}
});

