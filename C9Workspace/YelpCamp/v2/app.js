var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect to the database

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));

//schema Setup for database editing

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//testing adding items to the database

// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg"
        
//     }, function(err, campground){
//         //this function handles errors with communication to the database
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log("newly created campground: ");
//             console.log(campground);
//         }
//     });


app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds})
        }
    })
});

app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs");
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/:id", function(req,res){
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } 
       else {
           res.render("show", {campground: foundCampground});
       }
    });
    req.params.id;
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});