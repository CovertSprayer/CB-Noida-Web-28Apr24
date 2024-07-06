var sum = function(a,b){
    return a+b;
}

// console.log(sum(2,4));
// console.log(sum);
// console.log(add(2,4));


// temp -> HOF (High Order Function)
function temp(fun, num1, num2){
    var output = fun(num1, num2);
    console.log(output);

    // return fun;
}

temp(sum, 4, 5); // sum -> callback