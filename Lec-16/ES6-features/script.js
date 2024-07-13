
//  destructuring

const product = {
    id: 3,
    name: 'Keyboard',
    price: 49.99,
    category: 'Electronics',
}

// const productName = product.name;
// const productPrice = product.price;
const { price: productPrice, name: productName } = product;

// const name = product.name;
// const price = product.price;
// const { price, name } = product;

console.log(productPrice);
console.log(productName);

const obj = {
    a: 1,
    b: 2,
    c: {
        c1: 'a',
        c2: 'b'
    }
}

const {a, b, c: {c1, c2}} = obj;
console.log(a, b, c1, c2)


