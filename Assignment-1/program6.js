var num = 1235;
var revNum;

num += "";
revNum =  parseInt(num.split("").reverse().join(""), 10);

process.stdout.write("Reversed number : " + revNum);