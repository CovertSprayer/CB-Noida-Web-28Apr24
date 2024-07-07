
// function outerFun(){
//     var v = 1;

//     function innerFun(){
//         v++;
//         console.log(v);
//     }

//     return innerFun;
// }

// var fun1 = outerFun();
// var fun2 = outerFun();
// fun1();
// fun1();
// fun2();
// fun2();
// fun1();


function outerFun(){
    var v = 1;
    function innerFun(){
        v++;
        var b = 1;
        function innerMostFun(){
            v++;
            b++;
            console.log(v, b);
        }
        return innerMostFun;
    }
    return innerFun;
}

var fun = outerFun();
var fun1 = fun();
var fun2 = fun();

fun1();
fun1();
fun2();
fun2();
fun1();
