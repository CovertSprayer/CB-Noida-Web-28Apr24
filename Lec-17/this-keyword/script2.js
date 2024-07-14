
function createPerson(name, age){
    this.name = name;
    this.age = age;
}

// function add(a, b){
//     this.a = a;
//     this.b = b;
//     this.c = a + b;
// }

// let ans = add(2 , 3);

// let p1 = {
//     name: 'Neha',
//     age: 22
// }

let p1 = new createPerson('Neha', 22);
console.log(p1);