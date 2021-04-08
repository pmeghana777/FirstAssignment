function gcd(a, b){
    if(b == 0){
      return a;
    }
    return gcd(b, a % b);
}

const prompt = require("prompt-sync")();

var num1 = prompt("Enter first number ");
var num2 = prompt("Enter second number ");

process.stdout.write("GCD of "+ num1 + " and " + num2 + " : " + gcd(num1,num2) + "\n")



