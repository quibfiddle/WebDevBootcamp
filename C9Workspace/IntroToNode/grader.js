function average(scores){
	var total = 0
	for (var i = 0; i < scores.length; i++) {
		var total = total + scores[i]; 
	};
	var average = (total/scores.length);
	var roundedAverage = Math.round(average);
	console.log(roundedAverage);
};

var scores = [90,98,89,100,100,86,94];
average(scores);

var scores2 = [40,65,77,82,80,54,73,63,95,49];
average(scores2);

//colt created a program that leverages the forEach method on the scores array

function coltsAverage(scores){
    var total = 0
    scores.forEach(function(score){
        scores.forEach(function(score){
            total += score;
        });
    });
 
    var avg = total/scores.length
    
    return Math.round(avg);
    
}