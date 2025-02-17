import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

import CartTotal from '../components/cartTotal';
import { RxCross1 } from "react-icons/rx";


const Cart = () => {
  const { cartItems, products, currency,loadingItemId,setLoadingItemId, updateCartCount,Navigate,addToCart ,loading} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const addCartData = () => {
    const productData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        productData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item],
        });
      }
    }
    setCartData(productData);
    
  };

  useEffect(() => {
    addCartData();
    
  }, [cartItems]);
 

  return (
    <div className='pt-4 border-t gap-2 flex flex-col  '>
      <div className='text-2xl py-2 bg-white flex justify-between sticky top-0 mb-3'>
        <Title text1={'YOUR '} text2={'CART'} />
        
        <RxCross1 className='p-1 rounded-full text-3xl hover:bg-gray-100 cursor-pointer' onClick={()=>
        window.history.back()

        } />
        

        
      </div>
      {cartData.filter(item => item.quantity > 0).map((item, idx) => {
        const productData = products.find((product) => product._id === item._id);
        return (
          <div key={idx} className='py-3 border-t border-b text-gray-700 flex items-center justify-between'>
            <div className='flex items-start gap-6'>
              <img src={productData.image[0]} className='w-16 sm:w-20' alt='' />
              <div>
                <p className='text-xs sm:text-lg font-medium'>
                {productData.name}

                </p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency}{productData.price}</p>
                <p className='px-2 sm:px-3 border bg-slate-50' >{item.size} </p>
              </div>
              
              </div>
        
            </div>
            
              

              <div className='flex items-center min-w-16 text-sm rounded-md  text-white justify-between p-2  bg-orange-500'>
             
              
              
              {loading&&loadingItemId==item._id?
              <div className=' ml-4  rounded-md text-white flex items-center justify-center  bg-orange-500'>

              <span className="loading text-sm text-center loading-spinner loading-sm"></span>
            </div>:
                <>

              <p  onClick={()=>{updateCartCount(item._id,item.size,item.quantity-1)
                setLoadingItemId(item._id)
              }} className='font-bold cursor-pointer ' >-</p>
              <p className='font-bold' >{item.quantity}</p>

              <p onClick={()=>{addToCart(item._id,item.size)
                setLoadingItemId(item._id)
              }} className='font-bold cursor-pointer' >+</p>
                </>
                 
              
              }
              
              </div>
                
           

            
            
          </div>
        );
      })}

      <div className=' flex flex-col    w-full sm '>
        <CartTotal/>
      </div>
      <div className='flex justify-end mt-4'>

      <button onClick={()=>Navigate('/order/place')} className='bg-green-500 hover:bg-green-600 rounded-md text-white py-2 px-4'>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;