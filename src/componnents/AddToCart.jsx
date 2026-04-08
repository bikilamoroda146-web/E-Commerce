import React from 'react'
import { useCart } from '../context/CartContext.jsx';
function AddToCart({product}) {
const {addToCart} = useCart();
     
    function handleClick(){
        addToCart(product);
    }

  return (
   <button onClick={handleClick}
    className='bg-coffee-orange px-2 py-1 text-white rounded-2xl text-sm hover:bg-coffee-brown'>
    Add to cart
   </button>
  )
}

export default AddToCart