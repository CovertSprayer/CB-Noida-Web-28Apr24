const baseURL = 'https://jsonplaceholder.typicode.com';
const btn = document.querySelector('button');

const xhr = new XMLHttpRequest();

xhr.onload = function(res){
    console.log(res);
    console.log(JSON.parse(res.currentTarget.response))
}

xhr.onerror = function(err){
    console.log(err);
}

btn.addEventListener('click', ()=>{
    xhr.open('GET', `${baseURL}/users`);
    xhr.send();
})