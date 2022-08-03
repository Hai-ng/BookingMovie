import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register(props) {
  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
          <img className='w-20 h-20 rounded-full' src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-cinema-vector-illustration-png-image_3704537.jpg" alt="" />
          </div>
          <div className="text-2xl text-black tracking-wide ml-2 font-semibold">CYBER_CINESTAR</div>
        </div>
      </div>
      <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold">SIGN UP</h2>
        <div className="">
          <form>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Name</div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Hai Nguyen" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="hainguyen@gmail.com" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Password</div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Enter your password" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Confirm Password</div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Confirm Password" />
            </div>
       
            <div className="mt-10">
              <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg">
                CREATE ACCOUNT
              </button>
            </div>
          </form>
          <div className="mt-2 text-sm font-display font-semibold text-gray-700 text-center">
            You have an account ? <NavLink to='/login' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Log in</NavLink>
          </div>
        </div>
      </div>
    </div>

  )
}
