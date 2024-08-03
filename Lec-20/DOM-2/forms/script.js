const usernameInp = document.querySelectorAll('input')[0];
const passwordInp = document.querySelectorAll('input')[1];
const loginBtn = document.querySelector('button');

console.log(usernameInp.value)


usernameInp.addEventListener('keydown', (e)=>{
    // console.log(e.which)
    // username = e.target.value;
})

/*
passwordInp.addEventListener('keydown', (e)=>{
    password = e.target.value;
})
*/

// vanillajs
loginBtn.addEventListener('click', ()=>{
    const username = usernameInp.value;
    const password = passwordInp.value;

    const userData = {
        username,
        password
    }
    
    console.log(userData);
})

