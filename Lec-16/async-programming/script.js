
console.log(1);

delay(3);

console.log(2);

console.log(3)

function delay(n){
    let currTime = new Date().getTime();

    while(new Date().getTime() < currTime + n*1000 ){

    }
}
