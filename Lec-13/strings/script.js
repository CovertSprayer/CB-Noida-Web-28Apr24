var str = 'this is some string, "Hi there!!" ';
console.log("str -> ", str);

console.log(str.substring(5,6));
console.log(str.slice(0, 5+1));
console.log(str.slice(-6, -3));
console.log(str.trim()); // trimStart(), trimEnd()
console.log(str.replace("is", "IS"));
console.log(str.replaceAll("is", "IS"));
console.log(str.split(','));

var arr = ['this', 'is', 'some'];
console.log(arr.join(" "));