import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

const product = ({image,name,price,category}) => {
  return (
    <div className='flex justify-between items-center border py-2 pl-2  pr-8 ' >
        <div className='flex gap-4 sm:gap-8'>
        <img className='w-20' src={image} alt="" />
        <div className='flex flex-col  gap-1' >

            <p className=' font-light' >{name}</p>
            <p className='text-gray-500 font-thin' >{category}</p>
            <p className='text-gray-800' >$ {price}</p>
        </div>
        

        </div>
        <div className='flex items-center '>
            <p className='text-xl sm:text-2xl '><AiOutlineDelete />
            </p>
        </div>


    </div>
  )
}

export default product