
function print(s){
    console.log(s);
}

function getMeNewString(s){
    var newString = s.slice(0, 4);
    return newString;
}

var str = 'some string';

console.log(str);
print('some another string')
console.log(getMeNewString(str));