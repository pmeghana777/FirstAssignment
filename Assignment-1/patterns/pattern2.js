var row = 5;
var col = 1;

while(row > 0){

    for(var c = 0; c < col; c++){
        process.stdout.write(c+1 + " ");
    }
    process.stdout.write('\n');
    col += 1;
    row -= 1;
}