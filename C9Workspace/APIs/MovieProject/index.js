var express = require("express");
var app = express();

app.set("view engine", "ejs");

var request = require('request');

app.get("/", function(req, res){
    res.render("search")
});

app.get("/results", function(req, res){
    
    var search = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + search;
    
request(url, function(error, response, body){
    if(error){
        console.log("PROBLEM");
    }
    else {
        var parsedData = JSON.parse(body);
        res.render("results", {data: parsedData});
        // res.send(parsedData["Search"][0]);
    }
});
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});