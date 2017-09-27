// accepts an array, and finds the average value rounded to the nearst 100

function average(scores){
	var total = 0
	for (var i = 0; i < scores.length; i++) {
		var total = total + scores[i]; 
	};
	var average = (total/scores.length);
	var roundedAverage = Math.round(average);
	return roundedAverage;
};