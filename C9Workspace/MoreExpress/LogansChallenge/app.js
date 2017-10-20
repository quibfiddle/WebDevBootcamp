var express = require("express");

var app = express();



app.get("/", function(req,res){
    res.render("numbers.ejs");
    });
    
app.get("/numbers.js", function(req,res){
    res.render("numbers.js.ejs");
    });
    
app.get("/numbers.css", function(req,res){
    res.render("numbers.css.ejs");
    });
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
    });