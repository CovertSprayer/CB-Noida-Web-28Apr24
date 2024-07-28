/*
const headings = window.document.getElementsByTagName('h1');
console.log(headings);
console.log(headings[0]);
console.log(headings[1]);
headings[0].style.border = '2px solid blue';
headings[0].style.backgroundColor = 'green';

console.dir(headings[0].style.border);

// ---------------------
const favFruits = document.getElementsByClassName("fav-fruit")
console.log(favFruits)

// favFruits[0].style.fontSize = '2rem'

for(let fruit of favFruits){
    fruit.style.fontSize = '2rem'
}

const specialPara = document.getElementById('special');
console.log(specialPara)

specialPara.style.color = 'red'
*/


const heading = document.querySelector('h1');
// const heading = document.querySelectorAll('h1');

console.log(heading);
heading.style.color = 'green'

const favFruits = document.querySelector('ul .fav-fruit');
console.log(favFruits);

const specialPara = document.querySelector('#special');
console.log(specialPara)


