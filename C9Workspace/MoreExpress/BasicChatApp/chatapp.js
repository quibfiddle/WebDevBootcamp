var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))

var chat = ["Type something!"];


//returns the chat page, and builds a list from the chat object
app.get("/chat", function(req,res){
    res.render("chattapp", {chat: chat});
});

app.post("/send", function(req,res){
    console.log(req.body.newMessage);
    var newMessage = req.body.newMessage;
    chat.push(newMessage);
    res.redirect("/chat");
});

// app.post("/addfriend", function(req,res){
//     console.log(req.body.newFriend);
//     var newFriend = req.body.newFriend;
//     friends.push(newFriend);
//     console.log(newFriend);
//     //sort of refreshes the page once it completes the post.
//     res.redirect("/friends");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running yo'")
});