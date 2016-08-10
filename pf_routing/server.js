//initiating information 
var express = require ("express");
var app = express();
var path = require("path");

//setting up folder structures
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './static')));

//render home page index.ejs
app.get('/', function (req, res){
	res.render("index");
});

// app.get('/', function(request, response){
// 	response.send("Hello Amanda");
// });


app.listen(8000, function(){
	console.log("Listening on port 8000")
});