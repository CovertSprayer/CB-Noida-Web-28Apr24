// Immediately invoked function expression (IIFE)

// ()               -- expression
// () => {}         -- function
// (()=>{})         -- function expression
// (()=>{})()

// (()=>{
//     let a = 10;
//     let b = 20;

//     console.log(a+b);
// })();


const data = (()=>{
    const product = {
        title: 'Iphone',
        price: 90000,
        desc: 'Smartphone IP6 rating, Ram 8GB, ROM 256GB'
    }

    function getPrice(){
        return product.price;
    }

    function changeTitle(title){
        product.title = title;
    }

    function changePrice(price){
        product.price = price;
    }

    changePrice(10000000000000)

    return {
        getPrice
    }

})()

addEventListener();

console.log(data)