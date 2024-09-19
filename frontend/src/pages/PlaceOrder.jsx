import React, { useContext, useEffect, useState } from 'react'
import CartTotal from '../components/cartTotal'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const PlaceOrder = () => {
    const {currency,delivery_fee,getCartTotal,products,cartItems,url}=useContext(ShopContext)
    const [data,setData]=useState({
        name:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        phone:'',
        country:''
    })
    const onClickHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData((data)=>({...data,[name]:value}))
    }
    useEffect(()=>{
        console.log(data);
        

    },[data])
    const placeOrder=async(e)=>{ 
        e.preventDefault()
        let orderItems=[]
        for(const items in cartItems){
          let itemInfo=products.find((product)=>product._id===items)
          for(const item in cartItems[items]){
              try {
                  if(cartItems[items][item]>0){
                      orderItems.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item],
                        price: itemInfo.price,
                        name: itemInfo.name,
                        image: itemInfo.image,
                        total_price: itemInfo.price*cartItems[items][item]
                      })
                  }
                  
                  } catch (error) {
                      console.log(error);
                      
                  
              }
          }
          
      }
      let orderData={
        address:data,
        items: orderItems,
        amount: getCartTotal(),
        
      }
      let response =await axios.post(url+"/api/order/placeOrder",orderData,{headers:{token:localStorage.getItem('token')}})
      if(response.data.success){
        const {session_url}=response.data;
        window.location.replace(session_url);
       
      }
      else{
        alert(response.data.message)
      }
      
      
    
    }
    
  return (
    <form onSubmit={placeOrder} className='flex flex-col sm:flex-row justify-between p-3 gap-2 sm:mt-4 '>
        {/* left side */}
        <div className='flex flex-col gap-3 p-2'>
            <p className='text-2xl font-medium mb-4'>Delivery Information</p>
            <div className='flex flex-col gap-3'>
                <input  required className='border p-2 rounded-md' onChange={onClickHandler}  value={data.name} name='name'  type="text"placeholder='Full Name'  />
                <input  required className='border p-2 rounded-md' onChange={onClickHandler}  value={data.email} name='email'  type="text"placeholder='Email Address'  />
                <input required className='border p-2 rounded-md'  onChange={onClickHandler} value={data.street}  name='street' type="text"placeholder='Street'  />
                <div className='flex  gap-2'>
                <input  required className='border p-2 rounded-md w-1/2' onChange={onClickHandler}  value={data.city} name='city'  type="text"placeholder='City'  />
                <input  required className='border p-2 rounded-md w-1/2' onChange={onClickHandler}  value={data.state} name='state'  type="text"placeholder='State'  />


                </div>
                <div className='flex  gap-2'>
                <input  required className='border p-2 rounded-md w-1/2' onChange={onClickHandler}  value={data.zipcode}  name='zipcode' type="text"placeholder='Zip code'  />
                <input  required className='border p-2 rounded-md w-1/2' onChange={onClickHandler}  value={data.country} name='country'  type="text"placeholder='Country'  />


                </div>

                <input  required className='border p-2 rounded-md' onChange={onClickHandler}  value={data.phone}   name='phone'  type="text"placeholder='Phone'  />



            </div>

        </div>
        {/* right side */}
        <div className='felx flex-col gap-2 sm:w-1/2  p-2'>

        <p className='text-2xl font-medium mb-2'>Cart Totals</p>
        <div className='flex justify-between border-b-2 py-2'>
            <p>Subtotal</p>
            <p>{currency} {getCartTotal()}</p>

            
        </div>
        <div className='flex justify-between border-b-2 py-2'>
            <p>Delivery Fee</p>
            <p>{currency} {delivery_fee}</p>

            
        </div>
        <div className='flex justify-between  py-2 font-bold'>
            <p>Total</p>
            <p>{currency} {getCartTotal()+delivery_fee}</p>

            
        </div>
        <button type='submit' className='py-3 px-4 text-sm    rounded-md mt-4 text-white bg-orange-500'>PROCEED TO PAYMENT</button>

        </div>
        
    </form>
  )
}

export default PlaceOrder