const button = document.querySelector('button');
console.log(button)

// button.onclick = function(){
//     console.log('clicked 2');
//     // fun1();
//     // fun2();
// }

// function fun1(){
//     console.log('hello from fun1')
// }

// function fun2(){
//     console.log('hello from fun2')
// }

// button.onclick = function(){
//     console.log('hello from another fun')
// }

// ======================= 

button.addEventListener('click', function(){
    console.log('clicked 1')
})

button.addEventListener('click', function(){
    console.log('clicked 2')
})