// const arr = [1, 2, 3, 4, 5];

// Array.prototype.mymap = Array.prototype.map
// Array.prototype.mymap = function(callback){
//     for(let i=0; i<arr.length; i++){
//         callback(arr[i], i, arr);
//     }
// }

// arr.mymap((num, ind, a)=>{
//     console.log(num, ind, a);
// })


function MyArray(data){
    this.data = data;
}

MyArray.prototype.mymap = function(callback){
    for(let i=0; i<this.data.length; i++){
        callback(this.data[i], i, this.data);
    }
}

let arr2 = new MyArray([1,2,3,4]);
arr2.mymap((num, ind, a)=>{
    console.log(num, ind, a)
})