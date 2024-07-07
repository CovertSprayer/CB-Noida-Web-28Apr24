// student = {
//     id: 1,
//     name: "Abhinav",
//     age: 20,
//     courseInrolled: ['DSA', 'Web-Dev'],
//     gender: 'M'
// }

// function add (a, b, c){
//     console.log(c);
//     return a+b;
// }

// add(1,2);

const data = [
    {
        id: 1,
        name: "Abhinav",
        age: 20,
        courseInrolled: ['DSA', 'Web-Dev'],
        gender: 'M'
    },
    {
        id: 2,
        name: "Rahul",
        age: 24,
        courseInrolled: ['Web-Dev'],
        gender: 'M'
    },
    {
        id: 3,
        name: "Priyanshi",
        age: 24,
        courseInrolled: ['DSA', 'Web-Dev','C++'],
        gender: 'F'
    },
    {
        id: 4,
        name: "Akash",
        age: 28,
        courseInrolled: ['BlockChain'],
        gender: 'M'
    },
    {
        id: 5,
        name: "Shatrughan",
        age: 29,
        courseInrolled: ['Web-Dev'],
        gender: 'M'
    },
    {
        id: 6,
        name: "Rinki",
        age: 26,
        courseInrolled: ['C++'],
        gender: 'F'
    },
]

// [1,2,3,4]

const newArr = data.map((student)=>{
    let newStudent = {...student};
    
    if(newStudent.gender == 'M'){
        newStudent.gender = 'Male'
    }else{
        newStudent.gender = 'Female'
    }
    newStudent.courseInrolled.push('Java')

    return newStudent;
})

console.log(data);
console.log(newArr);


