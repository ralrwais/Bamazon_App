var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});


$("#makeReservation").load("reservation.html", function(){ 
		alert("Page Loading");
});

$("#tableData").load("table.html", function(){ 
		alert("Page Loading");
});

$('#submit-btn').click(function(){
 ///takes in values from form and either rejects reservation or appends table
 		var makeReservation = {		

 		name : $('#name').val().trim(),
		phone : $('#phone').val().trim(),
		email : $('#email').val().trim(),
		uniqueID : $('#uniqueID').val().trim() }


});


$.post(PORT + "api/table", makeReservation
function(info) {
		if (info === true){
			alert('Congrats! You have a table!');
		} else if (info === false){
			alert('You are on the waitlist!');
		}

});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
