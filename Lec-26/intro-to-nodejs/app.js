let a = 20;
let b = 10;

console.log(a+b);

function add(a, b){
    console.log('Value: ', a + b);
}

add(a,b);

const nums = [1,2,3,4,5];

const newNums = nums.map(val => val*2);
console.log(newNums);
