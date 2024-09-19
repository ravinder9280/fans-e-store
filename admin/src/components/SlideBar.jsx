import { IoIosAddCircleOutline } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";


import { NavLink } from 'react-router-dom';


const SlideBar = () => {
  return (
    <div className='border-r pl-4 pt-3 w-[20vw] sm:w-[25vh] md:w-[30vh]  h-auto'>
        <div className='flex flex-col gap-4'>
            <NavLink to='/' className='flex items-center justify-center p-2 border border-r-0 gap-2'>
        <div className='text-2xl'>

        <IoIosAddCircleOutline />
        </div>
        <p className='text-wrap text-xs hidden md:text-base sm:block '>Add Items</p>
            </NavLink>
            <NavLink to='/list' className='flex items-center justify-center p-2 border border-r-0 gap-2'>
        <div className='text-2xl'>

        <IoWalletOutline />
        </div>
        <p className='text-wrap text-xs hidden md:text-base sm:block'>List Items</p>
            </NavLink>
            <NavLink to='/orders' className='flex items-center justify-center p-2 border border-r-0 gap-2'>
        <div className='text-2xl'>

        <CiDeliveryTruck />
        </div>
        <p className='text-wrap text-xs hidden md:text-base sm:block'>Orders</p>
            </NavLink>
           

        </div>
        
    </div>
  )
}

export default SlideBar