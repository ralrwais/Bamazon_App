var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: "localhost",
	port:3306,

	user:"root",
	password:"",
	database:"Bamazon"
});

connection.connect(function(err){
	if(err){ throw err; }
	
});

inquirer.prompt([{
		name: 'choice',
		message: 'Choose an item to shop!',
		type: 'list',
		choices: [ 'Charger', 'TextBook', 'Snuggy', 'Plant', 'Lotion', 'PhoneCase', 'Headphones', 'Lipstick', 'Swimsuit', 'Calculator', 'Not interested']

}]).then(function (chose) {
		if(chose.choice === 'Not interested') {
			console.log("Thats fine, check again later.");
		} else {
			buy();
		}
});

function buy(Charger, TextBook, Snuggy, Plant, Lotion, PhoneCase, Headphones, Lipstick, Swimsuit, Calculator){
		this.Charger = Charger;
		this.TextBook = TextBook;
		this.Snuggy = Snuggy;
		this.Plant = Plant;
		this.Lotion = Lotion;
		this.PhoneCase = PhoneCase;
		this.Headphones = Headphones;
		this.Lipstick = Lipstick;
		this.Swimsuit = Swimsuit;
		this.Calculator = Calculator;


}

function a(things) {
	this.name = things.name;
}

a.all = function(callback) {
		connection.query('SELECT * FROM products', function(err, results){
			if(err){ throw err; }
			callback(results);
		});
};






