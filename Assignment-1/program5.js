var num = 156;
var count = 0;

while( num >= 1){

    count += 1;
    num = num / 10;
}

process.stdout.write("Number of digits : " + count );