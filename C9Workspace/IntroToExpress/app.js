var express = require("express");

var app = express();

// "/" => "Hi there!"

app.get("/", function(req, res){
    res.send("hi there!");
});

// "/bye" => "Goodbye!"

app.get("/bye", function(req,res){
    res.send("Goodbye!!");
});

// "/dog" => "MEOW!"

app.get("/dog", function(req,res){
    res.send("MEOW!");
});

app.get("/*", function(req,res){
    res.send("YA DONE F'd UP");
});

// tell express to listen for requests

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});