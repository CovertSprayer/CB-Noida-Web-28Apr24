
var data = [
    {l:5, b:4}, 
    {l:3, b:6}, 
    {l:5, b:7}, 
    {l:4, b:4}, 
    {l:6, b:2}, 
]

// calculatedAreas = [20, 16, ...]
// calculatedPerimeters = [2*20, 2*16, ...]

function area (l,b){
    return l*b;
}
var perimeter = (l,b) => 2*(l+b);

// for(let rect of data){
//     // console.log(rect.l, rect.b);
//     calculatedAreas.push(area(rect.l, rect.b));
//     calculatedPerimeters.push(perimeter(rect.l, rect.b));
// }

function calculate(logic){
    var output = [];
    for(let rect of data){
        output.push(logic(rect.l, rect.b));
    }
    return output;
}

var calculatedAreas = calculate(area);
var calculatedPerimeters = calculate(perimeter);

// var calculatedAreas = calculate((a, b) => a + b);
// var calculatedPerimeters = calculate((a, b) => 2 * (a + b));

console.log(calculatedAreas)
console.log(calculatedPerimeters)

