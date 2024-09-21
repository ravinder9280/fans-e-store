import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios'
import { toast } from 'react-toastify'
//https://xhamster.desi/videos/str8-turkish-sahin-hairy-daddy-bear-1-turkish-bear-xhGaFKV

const product = ({image,name,price,category,id}) => {
  const removeProduct=async(id)=>{
    try {
      let response=await axios.post('http://localhost:5000/api/product/remove',{productId:id})
      if(response.data.success){
        toast.success(response.data.message)
        window.location.reload()
        
      }
      else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      toast.error('Failed to remove product')
      console.log(error);
      
      
    }
  }
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
        <div onClick={()=>removeProduct(id)} className='flex items-center cursor-pointer '>
            <p className='text-xl sm:text-2xl '><AiOutlineDelete />
            </p>
        </div>


    </div>
  )
}

export default product