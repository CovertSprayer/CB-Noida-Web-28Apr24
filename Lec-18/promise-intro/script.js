
// const num = 2.56;
// console.log(Math.ceil(num))
// console.log(Math.floor(num))
// console.log(Math.round(2.5))
// console.log(Math.floor(Math.random()*10))

const p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const num = Math.floor(Math.random()*10);
        if(num > 5) {
            resolve();
        }
        else{
            reject();
        }
    }, 2000);
})

p.then(()=>{
    console.log('Promise fullfilled')
})
.catch(()=>{
    console.log('Promise rejected')
})