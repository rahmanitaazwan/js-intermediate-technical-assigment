function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
            // 1 => 5 - 5 + (4 - 5) + 2
            // 2 => 5 - 4 + (3 - 4) + 2
            // 3 => 5 - 3 + (2 - 3) + 2
            // 3 => 5 - 3 + 
        }
    }   
    console.log(space);
    trianglePattern(x - 1, y);
}

trianglePattern(5, 5);
