// normal loop
var nums = [1,2,3,4,5];
console.log(nums)

var person = {
    "firstName": "Anurag",
    lastName: "Sharma",
    "full name" : "Anurag Sharma",
    age: 26,
    marks: [70, 60, 90],
    isMarried: false
}

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);
// console.log(nums[4]);

// for(var i=0; i < nums.length; i++){
//     console.log(nums[i]);
// }

// for of -> array
// for(var num of nums){
//     console.log(num);
// }

// for in -> object, array
// for(var key in person){
//     if(key == 'firstName'){
//         person[key] = 'abcd'
//     }
//     console.log(key, "->", person[key]);
// }

// for(var index in nums){
//     console.log(nums[index]);
// }


// for each -> will see later after HOF


var files = [
    'photo1.png', 
    'photo2.jpg', 
    'photo3.pdf',
    'jpg.jpg',
    'png.png',
    'png.pdf'
]

var allowedFiles = ['jpg', 'png', 'jpeg'];

for(var file of files){
    var splittedFiles = file.split('.');
    if(allowedFiles.includes(splittedFiles[1])){
        console.log(file)
    }
    else{
        console.log("Error!!!")
    }
}

// for(var i=0; i<files.length; i++){
//     var file = files[i]
// }
