//check off specific todos by clicking
	$("li").click(function(){
		
		$(this).toggleClass("completed");

	});

	//click on x to delete tod

	$("span").click(function(){
		alert("clicked span");
	})