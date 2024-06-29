var arr = [1, 2, 3, 4, 5];
var arr2 = [10, 20, 30, 40];
var arr3 = [100, 200, 300, 400];
console.log(arr);
console.log(arr2);
// console.log(arr[2]);
// console.log(arr[10]);

// arr[2] = 13;
// console.log(arr);

// arr[10] = 10;
// console.log(arr);

// console.log(arr[6]);

// arr.push(6);
// arr.unshift(100);

// arr.pop();
// arr.shift();

// arr.splice(2, 0, 300);

// console.log(arr);
// var arr3 = arr.concat(arr2);
// var finalArr = arr2.concat(arr, arr3);
var finalArr = [...arr, ...arr2, ...arr3]

console.log(finalArr);

console.log(finalArr.indexOf(100));
// console.log(finalArr.indexOf(100) == -1);
console.log(finalArr.includes(2000))


// to access length
// console.log(arr.length);
