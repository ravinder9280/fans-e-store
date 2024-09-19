import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const cartTotal = () => {
    const {currency,getCartTotal,delivery_fee}=useContext(ShopContext)
  return (
    <div className=' flex flex-col gap-1 p-2 border rounded-md '>
        <p className='font-semibold'>Bill details </p>
        <div className='flex justify-between '>
            <p className='font-light text-sm'>items total</p>
            <p>{currency} {getCartTotal()}</p>

        </div>
        <div className='flex justify-between '>
            <p className='font-light text-sm'>delivery charge</p>
            <p>{currency} {delivery_fee}</p>

        </div>
        <div className='flex justify-between '>
            <p className='font-medium'>Grand total</p>
            <p className='font-medium'>{currency} {getCartTotal()+delivery_fee}</p>

        </div>
    </div>
  )
}

export default cartTotal