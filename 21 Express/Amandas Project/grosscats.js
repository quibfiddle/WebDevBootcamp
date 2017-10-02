var x = document.getElementById('eyeGoop');
var y = document.getElementById('poopStank');
var z = document.getElementById('furQuality');

var a = document.getElementById('fatAss');
var b = document.getElementById('catsName');

var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
	var catScore = Number(x.value) + Number(y.value) + Number(z.value) + Number(a.value);


	if(catScore >= 30){
	alert(b.value + " is absolutely disgusting. Kill it.");
	} 

	else if((catScore >= 20) && (catScore < 30)){
	alert(b.value + " is pretty gross. Maybe think about feeding it to a snake.");
	}

	else if((catScore >=10) && (catScore < 20)){
	alert(b.value + " is a little icky but in an endearing, quirky way. Don't kill it quite yet.");
	}

	else{
	alert(b.value + " are you sure you arent Amanda's cat Riley?");
	}


});



