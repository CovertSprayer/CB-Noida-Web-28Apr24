/*
var a = 20;
var b = a;

b = 300;
console.log(a);
console.log(b);


var arr1 = [1,2,3,4];
var arr2 = arr1;

arr2[0] = 100;

console.log(arr1);
console.log(arr2);

var obj1 = {
    a: 1,
    b: 2
}

var obj2 = obj1;
obj2.a = 100;

console.log(obj1)
console.log(obj2)


var nums1 = [10,20,30,40];
var nums2 = [...nums1];

nums2[0] = 1000;
console.log(nums1)
console.log(nums2)
*/


var person = {
    "firstName": "Anurag",
    lastName: "Sharma",
    "full name" : "Anurag Sharma",
    age: 26,
    marks: [70, 60, 90],
    isMarried: false
}

//read
console.log(person.firstName);
console.log(person.marks);
console.log(person["full name"]);
console.log(person.age)
console.log(person["age"]);

person.age = 30; // update
person.isAdult = true; // create

delete person.marks // delete

console.log(person)




