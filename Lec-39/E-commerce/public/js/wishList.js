
document.addEventListener('click', (e) =>{
    const button = e.target;
    if(button.classList.contains('like-btn')){
        console.log(button)
        const productId = e.target.getAttribute('productId');
        addOrRemoveFromWishlist(productId, button);
    }
})

async function addOrRemoveFromWishlist(productId, button){
    try {
        const res = await axios.post(`http://localhost:5000/wishList/${productId}`, {}, {
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })

       if(res.data.success){
            if(button.classList.contains('fa-solid')){
                button.classList.remove('fa-solid');
                button.classList.add('fa-regular');
            }
            else{
                button.classList.remove('fa-regular');
                button.classList.add('fa-solid');
            }
       }

    } catch (error) {
        console.log(error)
        // window.location.replace('/login');
    }
}