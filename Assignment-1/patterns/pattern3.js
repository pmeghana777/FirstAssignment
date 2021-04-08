row = 5;
spaces = 4;
col = 1;

while(row > 0){

    for(var s = 0; s < spaces; s++){
        process.stdout.write("  ");
    }
    for(var c = 1; c <= col; c++){
        process.stdout.write(c + " ");
    }
    
    for(var c = col-1; c > 0; c--){
        process.stdout.write(c + " ");
    }
    

    col += 1;
    spaces -= 1;
    row -= 1;

    process.stdout.write("\n");

}