import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Component = () => {
    const [products, setProducts] = useState([]);

    async function getAllProducts(){
        const res = await axios.get('https://dummyjson.com/products')
        console.log(res.data.products);
        setProducts(res.data.products);
    }

    useEffect(()=>{
        getAllProducts();
    }, []) // callback, dependency array


  return (
    <div>Component</div>
  )
}

export default Component