import axios from "axios"
import Product from "./product"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
const ListItems = ({url}) => {

  const [products,setProducts]=useState([])
  const fetchProducts=async()=>{
    try {
      const response=await axios.get(url+'/api/product/list');
      setProducts(response.data.allProducts)
      console.log(response);
      
      
    } catch (error) {
      toast.error(error.message)
      
    }
    
    
  }
  useEffect(()=>{
  fetchProducts()

  },[])
  return (
    <div className='py-8 flex flex-col w-full px-4 gap-4'>
      <p className='text-gray-900' >All Product List</p>
      <div className="flex flex-col  gap-2">
        {
          products.map((item,idx)=>(
            <Product key={idx} image={item.image[0]} id={item._id} name={item.name} price={item.price} category={item.category} />
          ))

        }

      </div>
    </div>
  )
}

export default ListItems