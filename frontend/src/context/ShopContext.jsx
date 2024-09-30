import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
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
    const [loading,setLoading]=useState(false)
    const[orders,setOrders]=useState([])
    const url='https://fansestorebackend.vercel.app'
    // const url='http://localhost:5000'
    
    const [products,setProducts]=useState([])
    
    const addToCart=async(itemId,size)=>{
        setLoading(true)
        try {
            
            if(!size){
                toast.error("Please Select Product Size")
                return
            }
            let response=await axios.post(`${url}/api/cart/add`,{size,itemId},{headers:{token}})
            console.log(response);
            await getCartData()
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
        
        
        
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
        setLoading(true)
        try {
            let response=await axios.post(`${url}/api/cart/update`,{itemId,size,quantity},{headers:{token:localStorage.getItem('token')} })
            await getCartData()
            console.log(response);
            
            
            
        } catch (error) {
            toast.error(error.message)
            
        }
        setLoading(false)

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
        window.scrollTo({ top: 0, behavior: 'smooth' })
  
      },[useLocation()])
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
    const getOrders=async()=>{
        try {
            let response=await axios.post(url+"/api/order/get",{},{headers:{token:localStorage.getItem('token')}})
            setOrders(response.data.order)

            
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
            
        }
    }
    
    const getProducts=async()=>{
        try {
            let response=await axios.get(url+"/api/product/list")
            if(response.data.success){

                setProducts(response.data.allProducts)
            }
            console.log(response);
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
            
        }
    }
    useEffect(()=>{
        getProducts()
        getOrders()
        
    },[])
    console.log(orders);
   

    const value={
        products,currency,delivery_fee,setShowSearch,showSearch,search,setSearch,
        cartItems,addToCart,getCartCount,updateCartCount,url,token,setToken,Navigate,getCartTotal,
        loading,setLoading,orders
    }
    return(
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}
export {ShopContextProvider};
