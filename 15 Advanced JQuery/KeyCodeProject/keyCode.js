$("body").keypress(function(event){
	var keyStroke = event.which;
	$("h1").text(event.which);
	if(String.fromCharCode(event.which) === " "){
		$(".jumbotron").text("SpaceBar")
	}
	else if(event.which === 13){
		$(".jumbotron").text("Enter");
	}
	else{
	$(".jumbotron").text(String.fromCharCode(event.which));
	}
});

