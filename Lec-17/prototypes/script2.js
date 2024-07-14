console.log(Array.prototype);

Object.prototype.sayHi = function(){
    console.log('Hi there!');
}

// const arr = new Array([1,2,3,4,5]);
let arr = [1,2,3,4];
// console.log(arr)

// const str = new String('hello')
// console.log(str)

Array.prototype.sayHello = function(){
    console.log('Hello there!');
}

Array.prototype.pop = function(){
    console.log('Hum toh nahi kar rhe pop!!')
}

console.log(arr)

arr.sayHello();
arr.sayHi();

arr.pop();
console.log(arr);

let nums = [1,2,3,5];

nums.myMap((num, ind, arr)=>{
    console.log(num, ind, arr)
})
