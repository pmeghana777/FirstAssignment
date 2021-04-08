var rows = 5;
var spaces = rows - 1;
var stars = 1;
while(rows > 0){
    for(var s = 0; s < spaces; s++){
        process.stdout.write("  ");
    }
    for(var c = 0; c < stars; c++){
        process.stdout.write(" *");
    }
    process.stdout.write("\n");
    stars += 2;
    spaces -= 1;
    rows--;
}
stars -= 4;
spaces = 1;
rows = 4;
while(rows > 0){
    for(var s = 0; s < spaces; s++){
        process.stdout.write("  ");
    }
    for(var c = 0; c < stars; c++){
        process.stdout.write(" *");
    }
    process.stdout.write("\n");
    stars -= 2;
    spaces += 1;
    rows--;
}