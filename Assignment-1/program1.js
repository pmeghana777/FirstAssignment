const prompt = require('prompt-sync')();
 
var credits = prompt('Enter Credits of Code for Cause Campus Leader ');

var badge;

if(credits >= 7500){
    badge = "Tera Leader";
}else if(credits >= 6000 && credits < 7500){
    badge = "Gega Leader";
}else if(credits >= 4500 && credits < 6000){
    badge = "Mega Leader";
}else{
    badge = "Rising Star";
}

process.stdout.write(badge + "\n");
