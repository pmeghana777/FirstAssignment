const prompt = require("prompt-sync")();


var amount = prompt("Enter amount ");
var rate = prompt("Enter rate ");
var time = prompt("Enter time ");

var simpleInterest = (amount * rate * time)/ 100;

process.stdout.write("Simple Interest " + simpleInterest + "\n");