
// ----------------- default binding
/*
console.log(this)

function temp(){
    console.log(this);
}

this.a = 20;

temp();
*/

// ----------------- implicit binding

let person = {
    name: "Rohit",
    age: 35,
    getAge: function(){
        console.log(this)
        // return this.age;
    }
}
person.getAge();


// ----------------- explicit binding

let p1 = {
    name: 'Abhishek',
    age: 30
}

let p2 = {
    name: 'Abhishek',
    age: 35
}

function updatePerson(name, age){
    this.name = name;
    this.age = age;

    // window.name = name;
    // window.age = age;
}

// data = ['Mohan', 10]
updatePerson.apply(p2, ['Mohan', 10]);
updatePerson.call(p2, 'Mohan', 10);

// updatePerson.apply(p2, data);
// updatePerson.call(p2, ...data);

let newUpdatePerson = updatePerson.bind(p1);
newUpdatePerson('temp', 26);

console.log(p1)







