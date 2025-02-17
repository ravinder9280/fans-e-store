import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from "../context/ShopContext";
import Skeleton from 'react-loading-skeleton';


const ProductItem = ({id,image,name,price}) => {
  const {currency,loading,setLoading}=useContext(ShopContext)

  
  return (
    <Link  className={ `text-gray-700 ${loading?"bg-gray-200 w-80vw":""} cursor-pointer `} to={`/product/${id}`}>
        
      <div className="overflow-hidden">

          
          
          <img src={image[0]} className='hover:scale-125 object-cover h-[40vh]    transition ease-in-out' alt="" />
        
      </div>
      <p className='pt-3 pb-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap w-[40vw] sm:w-full max-w-screen-xs'>{name}</p>
      <p className='text-sm text-orange-400 font-medium'>{currency} {price}</p>
   
    
    
        
    
    </Link>
  )
}

export default ProductItem