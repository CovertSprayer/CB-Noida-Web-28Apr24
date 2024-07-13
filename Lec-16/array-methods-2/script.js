let products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 19.99, category: 'Electronics' },
    { id: 3, name: 'Keyboard', price: 49.99, category: 'Electronics' },
    { id: 4, name: 'Socks', price: 9.99, category: 'Clothing' },
    { id: 5, name: 'T-shirt', price: 14.99, category: 'Clothing' },
    { id: 6, name: 'Dumbbell', price: 29.99, category: 'Fitness' }
];
console.log(products)

const newProducts = products.map((product, ind, arr)=>{
    return { name: product.name, price: product.price};
})
// console.log(newProducts);


const filteredProducts = products.filter((product)=>{

    // if(product.category === 'Electronics'){
    //     console.log(product.name);
    // }

    if(product.price < 50){
        return true;
    }
    else {
        return false;
    }
})

// const filteredProducts = products.filter(product => product.price < 20)
// console.log(filteredProducts)

const totalPrice = products.reduce((acc, product)=>{
    return acc + product.price;
}, 0);
// console.log(totalPrice);

const keyboard = products.find((product)=>{
    return product.name.toLowerCase() === 'keyboard'
})

console.log(keyboard);

const sortedProducts = products.sort((a,b)=>{
    // return a.price-b.price;
    return b.price-a.price;
})

console.log(sortedProducts);

products.forEach((product, ind, arr)=>{
    console.log(product);
})

// loose equality vs strong equality

// console.log('123' === 123)
// console.log('123' === '123')
// console.log('123' == 123)