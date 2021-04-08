var res = []
res.push([1]);
res.push([1,1]);

var rows = 2;
var cols = 1;

while( rows < 6){

    var arr = [];
    arr.push(1);

    for(var c = 0; c < cols; c++){
        arr.push(res[rows-1][c] + res[rows-1][c+1]);
    }

    arr.push(1);
    res.push(arr);

    rows++;
    cols++;
}

for(var i = 0; i < 6; i++){
    for(var j = 0; j < i+1; j++){
        process.stdout.write(res[i][j]+" ");
    }
    process.stdout.write("\n");
}

