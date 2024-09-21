import { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink, } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { IoChevronBack } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';









const NavBar = () => {
  const [visible,setVisible]=useState(false);
  const {showSearch,Navigate,setShowSearch,token,setToken,getCartCount,getCartTotal}=useContext(ShopContext)
  
  
  return (
    <>
    <div className=" navbar bg-base-100 sticky top-0 border-y">
        <div className="navbar-start">
          <NavLink to='/'>

    <img className='btn btn-ghost ' src={logo} alt="" />
          </NavLink>
    
  </div>
  <div className=" navbar-center ">
    <ul className='hidden  sm:flex gap-5 text-sm text-gray-700' >
        <NavLink to='/'  className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
        
        </NavLink>
        <NavLink to='/collection'  className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
        
        </NavLink>
        <NavLink to='/about'  className='flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
        
        </NavLink>
        <NavLink to='/contact'  className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-orange-400 hidden' />
        
        </NavLink>
        

    </ul>
   
  </div>
  
  <div className="navbar-end  relative">
    <button onClick={()=>{setShowSearch(true)
        Navigate('/collection')

    }} className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <div  className="dropdown">
      { token?
      <>
      <div tabIndex={0} role="button" className="btn btn-ghost text-2xl btn-circle">
      < IoPersonCircleOutline />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow">
        <li><a><IoPersonOutline/>Profile</a></li>
        <li><a> <BsBasket/>My Orders</a></li>
        <li onClick={()=>{localStorage.removeItem('token')
           setToken('')
            Navigate('/login')}} ><a><TbLogout />Logout</a></li>
      </ul>
      
      </>:

       <Link to={'/login'}>
          
      <div tabIndex={0} role="button" className="btn btn-ghost text-2xl btn-circle">
      < IoPersonCircleOutline />
      </div>
       </Link>
      
  
       
      }

        
        
    </div>
    <button className="btn btn-ghost btn-circle">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className=" bg-orange-500 z-0 text-white badge  badge-sm indicator-item">{getCartCount()}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className=" card  card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{getCartCount()} Items</span>
          <span className="text-info">Subtotal: {getCartTotal()}</span>
          <div className="card-actions">
           <button onClick={()=>Navigate('/cart')} className="btn bg-orange-500 text-white btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    </button>
    <button onClick={()=>setVisible(true)} className="btn btn-ghost  btn-circle sm:hidden">
    <SlMenu />


    </button>
  </div>
  
</div>
<div className={`poke fixed top-0 left-0 right-0 bottom-0 z-10 bg-white    ${visible?'w-full':'w-0 hidden'} `}>
    <div className="flex flex-col  text-gray-600">
    <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
      <p className='h-4 ' >
<IoChevronBack />
      </p>
<p>Back</p>
    </div>
    <NavLink onClick={()=>setVisible(false)} className='py-2 hover:bg-slate-200 pl-6 border' to='/'>HOME</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 hover:bg-slate-200 pl-6 border' to='/collection'>COLLECTION</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 hover:bg-slate-200 pl-6 border' to='/about'>ABOUT</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 hover:bg-slate-200 pl-6 border' to='/contact'>CONTACT</NavLink>

    </div>

  </div>
  </>
  )
}

export default NavBar