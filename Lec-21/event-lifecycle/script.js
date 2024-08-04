const parent = document.getElementById('parent')
const child = document.getElementById('child')
const grandChild = document.getElementById('grand-child')

parent.addEventListener('click', (e)=>{
    console.log('Parent Element')
}, false)

child.addEventListener('click', (e)=>{
    console.log('Child Element')
}, true)

grandChild.addEventListener('click', (e)=>{
    console.log('Grand Child Element')
}, false)