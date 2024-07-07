const square = [
    // 1,
    // true,
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

// const square2 = square; -> ref
// [...square]
const square2 = [...square.map(sq => [...sq])]; // -> copy
// square2[0] = [1,0,0];

for(let sq of square2){
    if(typeof sq == 'object')
        sq.push(0)

    // if(typeof sq == 'boolean')
    //     sq = false;
}

// square2[1] = false;

console.log(square)
console.log(square2)

