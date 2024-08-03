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

// even handler

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', ()=>{
    h1.style.border = '2px solid black'
    const text = h1.innerText;
    h1.innerText = text.toLowerCase();
})

h1.addEventListener('mouseleave', (e)=>{
    console.log(e)
    console.log(e.target)
    h1.style.border = ''
    const text = h1.innerText;
    h1.innerText = text.toUpperCase();
})

document.addEventListener('mousemove', ()=>{
    console.log('Dont move your mouse')
})




