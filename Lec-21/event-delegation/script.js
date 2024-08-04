const parent = document.querySelector('#parent');
const children = document.querySelectorAll('.child');

// for(let child of children){
//     child.addEventListener('click', (e)=>{
//         console.log(e.target.innerText);
//     })
// }

parent.addEventListener('click', (e)=>{
    if(e.target.classList.contains('child')){
        console.log(e.target.innerText);
    }
})