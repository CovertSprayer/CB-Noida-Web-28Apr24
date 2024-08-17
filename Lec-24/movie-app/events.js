const nav = document.querySelector('nav');

document.addEventListener('scroll', (e)=>{

    if(window.scrollY > 120){
       nav.style.background = '#171717' 
    }
    else{
        nav.style.background = '' 
    }
})