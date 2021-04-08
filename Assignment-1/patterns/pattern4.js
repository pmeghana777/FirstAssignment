rows = 5;
spaces = 4;
col = 0;
row = 1;
while(row <= rows){

    for(var s = 0; s < spaces; s++){
        process.stdout.write("  ");
    }

    var c;
    for(c = row; c <= row+ col; c++){
        process.stdout.write(c + " ");
    }

    c = c - 2;
    for(var t = c; t >= row; t--){
        process.stdout.write(t + " ");
    }
    
    col += 1;
    spaces -= 1;
    row += 1;
    
    process.stdout.write("\n");

}