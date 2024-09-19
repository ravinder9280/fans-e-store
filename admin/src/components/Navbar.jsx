import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='px-3 flex justify-between items-center border-b ' >
        <img className='w-20 cursor-pointer' src={logo} alt="" />
        <button className='bg-slate-600 px-4 py-2 rounded-2xl text-xs text-white'>
            Logout
        </button>

    </div>
  )
}

export default Navbar