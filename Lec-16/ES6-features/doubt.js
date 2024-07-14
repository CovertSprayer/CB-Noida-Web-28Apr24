function temp(){
    a = 10; // global scope
    var b = 20; // functional scope
}

temp();

console.log(a);
console.log(b);