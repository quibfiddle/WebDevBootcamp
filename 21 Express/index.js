//this code can be found on my cloud9 account.

var express = require("express");

var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
    
    console.log("Logan just found the website");
    
});
    
app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal;
    
    if(animal == "pig"){
       res.send("oink") ;
    }
    
    else if(animal == "cow"){
        res.send("moo");
    }
    
    else if(animal == "dog"){
        res.send("bark");
    }
    
     console.log("He some how found the animal part");
    
});
    
    
    

app.get("/repeat/:thing/:num", function(req,res){
    var thing = req.params.thing;
    var num = req.params.num;
    var total = ""; 
    
    for (var i = 0; i < Number(num); i++) {
    	var total = total + thing + " ";
    }
    
    res.send(total)
    
    console.log(total);   
     
    });
    
app.get("/*", function(req,res){
    res.send("THIS PAGE WASN't FOUND SON");
    
    console.log("logan has NO IDEA WHERE HE IS GOING");
    
	});
	
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
    });