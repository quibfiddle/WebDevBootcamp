//check off specific todos by clicking on a given li. The listener is set to the "Uls" because some lis are dynamically created after the page loads, and jquery can not add listeners to elements that are not yet on the page.
	$("ul").on("click", "li", function(){
		
		$(this).toggleClass("completed");

	});

	//click on x to delete tod

	$("ul").on("click", "span", function(event){
		
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});

		// this code stops the event from carying anything else out at higher levels. prevents event bubling, where in this case the click even would trigger the LI click event todo
		event.stopPropagation();
	});

//listener for text input

	$("input[type='text']").keypress(function(event){
		//listens for enter keypress
		if (event.which === 13){
			//sets todoText to the This content of the input listener
			var todoText = $(this).val();
			//resets the input
			$(this).val("");
			//creates the new entry
			$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
		};
	})

	$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle();
	});