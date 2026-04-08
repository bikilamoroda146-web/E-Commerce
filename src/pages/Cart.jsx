import React from 'react'
import { useCart } from '../context/CartContext'
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

function Cart() {
    const {cartItems} = useCart();

  return (
    <div className='max-6xl mx-auto px-4 py-14 '>
        <h1 className='text-4xl font-bold text-coffee-orange py-6 px-4'>Shopping Cart</h1>
           <div className='space-y-4 mb-8'>
            {
                cartItems.map(item =>(
                    <div key={item.id} className='flex items-center gap-4 border border-coffee-orange rounded-2xl bg-white p-4'>
                         <img src={item.image} alt={item.name}
                         className='w-24 h-24 object-cover rounded-lg' />
                         <div className='flex-1'>
                            <h3 className='font-bold text-lg text-coffee-brown'>{item.name}</h3>
                            <p className='text-sm text-gray-500'>{item.description}</p>
                            <p className='text-coffee-orange font-bold mt-2 text-lg'>{item.price.toFixed(2)}</p>
                         </div>
                         <div className='flex items-center bg-gray-200 gap-2 p-1 rounded-lg'>
                            
                            <button className='p-2 hover:bg-gray-400 rounded-lg transition'>
                              <FiMinus />
                            </button>
                            <span>2</span>
                            <button className='p-2 hover:bg-gray-400 rounded-lg transition'>
                              <FiPlus />
                            </button>
                            <button className='p-2 text-red-600 hover:bg-red-500 hover:text-white rounded-lg'>
                                <FiTrash2 />
                            </button>
                         </div>
                    </div>
                ))
            }
           </div>

           <div className='bg-coffee-cream border border-coffee-orange rounded-lg p-6 '>
            <div className='space-y-3 mb-4'>
                <div className='flex justify-between'>
                    <span className='text-gray-500'>Subtotal</span>
                    <span className='font-bold'>$ 33:00</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-500'>Shipping</span>
                    <span className='font-bold'>Free</span>
                </div>
                <div className='flex justify-between border-t border-coffee-orange pt-3'>
                    <span className='text-lg font-bold'>Total</span>
                    <span className='text-2xlfont-bold text-coffee-orange'>$ 33:00</span>
                </div>
            </div>
           </div>
    </div>
  )
}

export default Cart