function Person(name, age){ 
    this.name = name;
    this.age = age;
}

Person.prototype.getAge = function(){
    return this.age;
}

let p1 = new Person('Mohit', 26);
let p2 = new Person('Abhijeet', 36);

console.log(p1)
console.log(p2)
console.log(p1.getAge())
console.log(p2.getAge())

console.log(p1.__proto__)
console.log(p1.__proto__ === Person.prototype)