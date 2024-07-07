
function outer(){
    inner();

    // console.log(v);

    function inner(){
        var v = 10;

    }

    {
        var p1 = 10;
        const p2 = 20;
    }

    console.log(p1)
    console.log(p2)

}

// outer();

// var value = 10;
// var value = 20;

// console.log(value)

// let value = 10;
// let value = 20;
// console.log(value);

// const value = 10;
// const value = 20;
// console.log(value);

// -------- re-initialize
// var value = 10;
// value = 20;
// console.log(value)


// let value = 10;
// value = 20;
// console.log(value);

// const value = 10;
// value = 20;
// console.log(value);

// const arr = [1,2,3];

// arr[0] = 100;
// arr = [100, 200, 300]

// console.log(arr);


// -------- hoisting
// console.log(a)
// let a = 10;
// const b = 10;

var a = 20;
let b = 10;

console.log(a);

