import { useContext } from "react";
import { IoCaretForward } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";

const cartPanel = () => {
    const {currency,Navigate,getCartTotal,getCartCount}=useContext(ShopContext)
  return (
    <div className="flex items-center justify-center sticky bottom-4 w-full  ">

    <div onClick={()=>Navigate('/cart')} className='flex items-center cursor-pointer w-full sm:w-3/4 py-1 px-2 justify-between text-white bg-orange-600 rounded-xl  '>
        <div className='flex items-center gap-3'>
            <div className='backdrop-blur-md	 '>

        <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          </div>

          <div className='flex flex-col '>
            <p className='text-sm font-extralight'>{getCartCount()} items</p>
            <p className='font-light'>{currency} {getCartTotal()}</p>
          </div>


        </div>
        <div className='flex gap-1 items-center justify-center'>

        <p className='font-light'>View Cart</p>
        <IoCaretForward />


        </div>

    </div>
    </div>

  )
}

export default cartPanel