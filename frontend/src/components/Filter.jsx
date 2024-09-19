import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Filter = () => {
    const [rotate,SetRotate]=useState(false)
  return (
    <div className='' >
        <div className='flex flex-row gap-3 items-center  ' >
            <p className='text-lg' >Filter</p>

        <img onClick={()=>SetRotate(!rotate)} src={assets.dropdown_icon} className={`h-4 ${rotate?"rotate-90":""} sm:hidden ` } alt="" />
        </div>
        <div className={`${rotate?"":"hidden"} sm:block`}>

        <div className="flex flex-col border gap-2 py-4 mt-4  px-12 border-gray-400  ">
            <p>CATEGORY</p>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input type="checkbox" name="" className=''  id="" />
            <p>Men</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input type="checkbox" name=""  id="" />
            <p>Women</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input type="checkbox" name=""  id="" />
            <p>Kids</p>
            </div>
            

        </div>
        <div className={`flex flex-col border  gap-2 py-4 mt-4  px-12 border-gray-400  `}>
            <p>WEARS</p>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input type="checkbox" name=""  id="" />
            <p>All</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input type="checkbox" name="" className=''  id="" />
            <p>Bottom Wear</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input type="checkbox" name=""  id="" />
            <p>Top Wear</p>
            </div>
            
            

        </div>
        </div>



    </div>
  )
}

export default Filter