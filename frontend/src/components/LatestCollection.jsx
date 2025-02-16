import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { products } from '../assets/assets';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext)
    const [topProducts,SetTopProducts]=useState([]);
    
    useEffect(()=>{
      SetTopProducts(products.slice(0,10))
      
      
    },[products])
    
  return (
    <div className='my-10 ' >
      <div className="  text-center py-8 text-3xl">

      <Title text1={"LATEST"} text2={"COLLECTIONS"} />
      <p className='w-3/4 m-auto  text-xs sm:text-sm md:text-base text-gray-600' >
Discover the latest trends! Our new collection features vibrant colors, bold prints, and sustainable fabrics. Shop now and elevate your style      </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">

      {topProducts.map((item,idx)=>(
        <ProductItem key={idx} id={item._id} name={item.name} price={item.price} image={item.image} />
      ))}
      </div>

    </div>
  )
}

export default LatestCollection