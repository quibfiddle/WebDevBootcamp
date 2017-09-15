	var body = document.querySelector("body");
	var isBlue = false;

	for (var i = 0) {
		if(isBlue) {
		body.stylebackground = "white";
		}
		else {
		body.style.background = "#3498db";
		}
	isBlue = false;
	}