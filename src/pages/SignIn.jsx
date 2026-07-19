 import React from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
 
 function SignIn() {
   return (
     <div className='min-h-screen bg-linear-to-b from-coffee-cream to-white flex items-center justify-center mb-4 px-4'> 
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <h1 className='font-bold text-coffee-brown text-4xl'>WelCome Back☕</h1>
          <p className='text-gray-600 mb-3'>Sign in to your account</p>
        </div>
        <div className='bg-white rounded-lg border border-coffee-caramel p-8 shadow-lg'>
          <form action="" className='space-y-5'>
            <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>
                Emai address:
              </label>
              <div className='relative '>
                <label>
                  <FiMail className='absolute left-3 top-4.5 text-gray-600'></FiMail>
                  <input type="email"
                  placeholder='you@example.com'
                  className='border border-coffee-caramel w-full py-2.5 focus:outline-none focus:ring-2 focus:ring-coffee-caramel rounded pl-8' />

                </label>
              </div>

            </div>
 
            <div>
              <label className='block text-sm font-semibold text-coffee-brown mb-2'>
                Password:
              </label>
              <div className='relative '>
                <label>
                  <FiLock className='absolute left-3 top-4.5 text-gray-600'></FiLock>
                  <input type="password"
                  placeholder='••••••••'
                  className='border border-coffee-caramel w-full py-2.5 focus:outline-none focus:ring-2 focus:ring-coffee-caramel rounded pl-8' />

                </label>
              </div>
            </div>

            <div className='flex items-center justify-between text-sm'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input type="checkbox" className='accent-coffee-caramel'/> Remember me 
              </label>
              <Link className="text-coffee-orange hover:text-coffee-brown font-medium">Forgot Password</Link>
            </div>
             <button type="submit" className='w-full bg-coffee-orange py-3 text-white font-bold rounded hover:bg-coffee-brown transition'>Sign In</button>
          </form>
          <div className='mt-3 pt-3 border-b-gray-200 border-t text-center'>
            <p className='text-gray-600'>Don't have an account?

              <Link to="/signup" className='text-coffee-orange font-bold mt-2 hover:text-coffee-brown'>
              Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
     </div>
   )
 }
 
 export default SignIn