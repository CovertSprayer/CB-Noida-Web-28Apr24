

// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// }, 3000)

// console.log(3);

// =======================

// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 2000);

// console.log(3)

// setTimeout(() => {
//     console.log(4)
// }, 1000);

// console.log(5);

// ==============================

// setTimeout(() => {
//     console.log(4)
// }, 0);

// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 0);

// console.log(3)

// console.log(5);


const intervalId = setInterval(()=>{
    console.log('hello')
}, 1000)

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
