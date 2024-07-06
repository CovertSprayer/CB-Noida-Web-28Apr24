
// var a = 10;

// function fun(){
//     console.log(x);
//     var x = 20;
// }

// fun();
// console.log(a);


function outerFun(){
    innerFun();
    var x = 20;
    function innerFun(){
        var y = 30;
        console.log(y);
        console.log(x);
    }
    console.log(x);
}

outerFun();
