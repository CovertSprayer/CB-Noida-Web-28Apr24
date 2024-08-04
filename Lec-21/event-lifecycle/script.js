const parent = document.getElementById('parent')
const child = document.getElementById('child')
const grandChild = document.getElementById('grand-child')

parent.addEventListener('click', (e)=>{
    console.log('Parent Element')
}, false)

child.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('Child Element')
}, false)

grandChild.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('Grand Child Element')
}, false)