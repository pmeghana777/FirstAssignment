
var limit = 10;

var skip = 0;
var num = 2;

while(limit > 0){

    var jumps = skip;
    while(jumps > 0){
        num += 2;
        jumps -= 1;
    }

    process.stdout.write(num + "\n");
    skip += 2;
    limit -= 1;
    
}