// spread
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr = [...arr1, ...arr2, 9, 10];

console.log(arr);

const product = {
    id: 3,
    name: 'Keyboard',
    price: 49.99,
    category: 'Electronics',
}

const newProduct = {
    ...product,
    desc: "RGB light",
    price: 120.99
}

console.log(newProduct);


function temp(a, b, c, ...d){ // rest
    console.log(a, b, c);
    console.log(d);
}

const data = [10, 20, 30, 40, 50, 60, 70]
temp(...data) // spread
// temp(10, 20, 30, 40, 50, 60, 70)