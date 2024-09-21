import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios'




export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const [showSearch,setShowSearch]=useState(false);
    const [search,setSearch]=useState('');
    const currency="₹"
    const delivery_fee=18;
    const [token,setToken]=useState("");
    const [cartItems,setCartItems]=useState({})
    const Navigate=useNavigate()
    const url='https://fans-e-store.onrender.com'
    const addToCart=async(itemId,size)=>{
        
        
        if(!size){
            toast.error("Please Select Product Size")
            return
        }
        let response=await axios.post(`${url}/api/cart/add`,{size,itemId},{headers:{token}})
        console.log(response);
        await getCartData()
        
        
        // toast.success("Product Added To Cart Successfully")
        
        

    }
    // const addCart=(item)=>{
    //     if(!cartItems[item]){
    //         setCartItems((prev)=>({...prev,[item]:1}))
    //     }
    //     else{
    //         setCartItems((prev)=>({...prev,[item]:prev[item]+1}));
    //     }
    // }
    const getCartData=async ()=>{
        let response=await axios.post(`${url}/api/cart/get`,{},{headers:{token:localStorage.getItem('token')} })
        console.log(response);
        setCartItems(response.data.cartData)
    }
    useEffect(()=>{
getCartData()
    },[token])
    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
                    
                    } catch (error) {
                        console.log(error);
                        
                    
                }
            }
            
        }
        return totalCount;
    }
    const updateCartCount=async(itemId,size,quantity)=>{
        let response=await axios.post(`${url}/api/cart/update`,{itemId,size,quantity},{headers:{token:localStorage.getItem('token')} })
        await getCartData()
        console.log(response);
        
        

    }
    useEffect(()=>{
        function loadData(){
            
            
            
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                
                
            }
        }
        loadData();
    },[])
    useEffect(()=>{
        console.log(cartItems);
        
    },[cartItems])
    const getCartTotal=()=>{
        let total=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items)
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        total+=cartItems[items][item]*itemInfo.price;
                    }
                    
                    } catch (error) {
                        console.log(error);
                        
                    
                }
            }
            
        }
        return total;
    }
   

    const value={
        products,currency,delivery_fee,setShowSearch,showSearch,search,setSearch,
        cartItems,addToCart,getCartCount,updateCartCount,url,token,setToken,Navigate,getCartTotal
    }
    return(
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}
export {ShopContextProvider};
