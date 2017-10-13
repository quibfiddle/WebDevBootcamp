var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg"},
        {name: "Granite Hill", image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
        {name: "Third Starter Item", image: "https://www.yellowstonenationalparklodges.com/content/uploads/2017/04/madison-campground-1024x768.jpg"},
        ];
        
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    // redirect back to campgrounds get route
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});