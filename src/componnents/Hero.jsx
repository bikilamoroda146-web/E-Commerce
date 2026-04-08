import React from 'react'
import { Link } from 'react-router-dom'
import heroImages from'./../assets/r.png'
function Hero() {
  return (
    <section className='bg-linear-to-b from-coffee-cream to-white'>
    <div className='max-w-6xl mx-auto py-16 px-8 grid md:grid-cols-2 items-center gap-8'>
      <div>
        <p className='bg-coffee-orange inline px-6 py-2 items-center rounded-full text-sm'>☕Fresh, Fast order</p>
        <h1 className='mt-4 text-4xl font-extrabold text-coffee-brown tracking-tight md:text-5xl'>Frech Coffee from {" "} <span>Oro</span>Coffee Shop</h1>
      <p>Order your faviorite coffee and snacks online. and smooth ordering experience. Simple menu quicks checkouts</p>
      <div className='mt-4 flex items-center gap-2'>
        <Link to="/Menu"
        className='bg-coffee-orange px-6 py-2 rounded-full hover:bg-coffee-brown hover:text-coffee-orange'>Exlore Menu</Link>
        <Link to="/cart"
         className='border border-coffee-orange px-6 py-2 rounded-full hover:border-coffee-brown hover: text-shadow'>View cart</Link>
      </div>
      </div>
      <div>
        <img src={heroImages} alt="" className='w-full' />
      </div>
    </div>
   </section>
  )
}

export default Hero