var express = require("express");
var app = express();

app.get('/', function(request, response){
	response.send("Hello Amanda");
});
// app.get('/', function(req, res){

// });

app.listen(8000, function(){
	console.log("Listening on port 8000")
});