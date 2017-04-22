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
	items();
});

function items() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) { throw err; }
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].item_id + "\nItem: " + results[i].product_name + "\nPrice: $" + results[i].price + "\nNumber in stock: "+ results[i].stock_quantity);
            console.log(" ");
        }
        buy();
    })
}

function buy() {
    inquirer.prompt([
        {
            type: "input",
            name: "item",
            message: "Please enter the item ID:",
        },
        {
            type: "input",
            name: "amount",
            message: "Please enter the quantity you would like:",
        }
    ]).then(function(answer) {
        connection.query("SELECT * FROM products WHERE ItemID = ?", [answer.item], function(err, result) {
            
            if (answer.amount > answer.stock_quantity) {
                console.log("Out of Stock");
                end();
            } else {
                connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE ItemID = ?", [answer.amount, answer.item], function(err, result) {

               
                        end();
                    });
            }
        })
    })
}

function end() {
    connection.end(function(err) {
        if (err) throw err;
    })
}




