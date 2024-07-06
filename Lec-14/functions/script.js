//functions can be treated as datatypes in js, like string, number, boolean etc

//function defination
// a, b -> are parameters
function add(number1, number2){
    var final = number1 + number2;
    console.log(final);

    return final
}

// add(4, 5) // 4, 5 -> arguments
console.log(add(4,5));