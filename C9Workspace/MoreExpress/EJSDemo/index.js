var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("test.ejs");
    });
    
app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

//defining a post array

app.get("/posts", function(req,res){
    var posts = [
            {title: "Post 1", author: "Suzy"},
            {title: "Post 2", author: "Suzy"},
            {title: "Post 3", author: "Suzy"},
        ];
        
    res.render("posts.ejs", {posts: posts});
});

    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
    });