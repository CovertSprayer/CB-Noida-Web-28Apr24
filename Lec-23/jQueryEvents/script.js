// $('button').click(()=>{
//     console.log('clicked!')
// })

$('button').on('click', (e)=>{
    console.log(e.target)
    console.log('hello!!')

    console.log($('input').val('hello'))
})

// document.querySelector('input').value = 'hello'