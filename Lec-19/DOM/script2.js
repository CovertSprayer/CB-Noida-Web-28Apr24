const heading = document.querySelector('h1');
const favFruit = document.querySelector('.fav-fruit')
// console.log(heading.innerText) //getter
// heading.innerText = 'some random thing' //setter


// console.log(heading.innerHTML);

// heading.innerText = 'Some random thing' 
// heading.innerHTML = '<em>Some random thing</em>' 
// heading.innerText = '<em>Some random thing</em>'


console.log(heading.getAttribute('class'));
console.log(favFruit.getAttribute('class'))
favFruit.setAttribute('class', 'testing');
console.log(favFruit.hasAttribute('name'));

// console.log(document.querySelector('img').getAttribute('src'))
// console.log(document.querySelector('img').setAttribute('src', 'https://images.unsplash.com/photo-1721564130772-c9ee561ab87b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'));


// classList
const specialFruit = document.querySelector('#special-fruit');
specialFruit.classList.add('five', 'six');
// specialFruit.classList.add('six');

specialFruit.classList.remove('two');
console.log("has class ->", specialFruit.classList.contains('ten'));


console.log(specialFruit.parentElement);
// console.log(specialFruit.parentElement.children);

// console.log(specialFruit.parentElement.nextElementSibling);
console.log(specialFruit.parentElement.previousElementSibling);

const newHeading = document.createElement('h1');
console.log(newHeading)
newHeading.innerText = 'This is some heading';
newHeading.classList.add('nine');
newHeading.setAttribute('id', 'new-heading');

document.querySelector('body').appendChild(newHeading);

document.querySelector('img').before(newHeading);




