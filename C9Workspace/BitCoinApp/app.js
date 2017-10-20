var express = require("express");
var app = express();

//code i may not end up using as there is already code for working with the bittrex api
var bodyParser = require("body-parser");
var request = require('request');

//turns out there is a npm package that works with the api already
var bittrex = require('node-bittrex-api');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var apiKey = "08d65e95adc3446085d4d9ff45a32d77 ";
var apiSecret = "79978ea451a46b6911c5ef4955d222a";


bittrex.options({
  'apikey' : apiKey,
  'apisecret' : apiSecret,
});



bittrex.getmarketsummaries( function( data, err ) {
  if (err) {
    return console.error(err);
  }
  for( var i in data.result ) {
    bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
      console.log( ticker );
    });
  }
});

// request('https://bittrex.com/api/v1.1/public/getmarkets', function(error, response, body){
//     if(error){
//         console.log("PROBLEM");
//     }
//     else {
//         var parsedData = JSON.parse(body);
//         console.log(parsedData);
//     }
// });



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});