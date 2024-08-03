const para = document.querySelector('p');
console.log(para);

const list = document.querySelector('.list');
console.log(list)

const item = document.createElement('li');
item.innerText = 'first item';

// list.append('first item');
// list.append(item);

// list.appendChild(item);
// list.appendChild('first item');

const li = document.querySelector('ul li:first-child');
console.log(li);
list.removeChild(li);


