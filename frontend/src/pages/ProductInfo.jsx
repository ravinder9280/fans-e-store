import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem' 
import Title from '../components/Title'
import { toast } from 'react-toastify';



const ProductInfo = () => {

    const {products,currency,token,addToCart,Navigate,loading}=useContext(ShopContext)
    const [currProduct,setCurrProduct]=useState(false)
    const {id}=useParams();
    const [images,setImages]=useState([])
    const [image,setImage]=useState('')
    const [sizes,setSizes]=useState([])
    const [size,setSize]=useState('')
    const [similarProducts,setSimilarProducts]=useState([])
    
    const fetchProduct=async()=>{
      products.map((item)=>{
        if(id==item._id){
          setCurrProduct(item);
          setImages(item.image)
          setImage(images[0])
          setSizes(item.sizes)

          setSimilarProducts(products.filter(product=>product.category==currProduct.category))
          setSimilarProducts(products=>products.filter(product=>product.subcategory==currProduct.subcategory))
          

          return null;
          

        }

      })
    }
    useEffect(()=>{
      fetchProduct();
      
    },[id,products,images,sizes])

  return (
    
        <div className='flex flex-col w-full   pt-2   gap-4 '>
          {/* product info section left */}
          <div className='flex gap-12 sm:gap-2 flex-col sm:justify-between  sm:flex-row '>
              {/* image */}
          <div className=' flex-3 sm:w-[40vw] md:w-[30vw] lg:w-[26vw]  sm:justify-end  flex flex-col-reverse gap-3   '>
            

          <div className="flex  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[100%] w-full   '>
            ">
            { images.map((item,index)=>(
              <img src={item} onClick={()=>setImage(item) } key={index} className={`w-[24%] ${item==image?"  border-orange-400":""} border cursor-pointer sm:mb-3 flex-shrink-0 `} alt="" />
            ))
              }
          </div>
          <div className='w-full  sm:w-[100%]'>

            <img src={image} className='w-full h-auto' alt="" />
            </div>
            </div>
            {/* product info section right */}
            <div className='flex flex-col sm:w-[40vw]  gap-3'>
              <p className='text-xl font-medium'>{currProduct.name}</p>
              <p className='text-2xl mt-2 text-orange-400 font-bold'>{currency} {currProduct.price}</p>
              <p className='text-gray-500' >{currProduct.description}</p>
              <div className='flex flex-col border-b py-4 mt-2 gap-3'>
                <p className='font-medium'>Select Size</p>
                <div className='flex gap-2'>
                  {sizes.map((item,idx)=>(
                    <button onClick={()=>setSize(item)} className={`py-2 px-4 bg-slate-200 border ${size==item?"border-orange-500":""}` }key={idx}>{item}</button>
                  ))}

                </div>
                <div className='flex items-center md:justify-start justify-center'>

                <button  onClick={()=> { if(!size){
                  toast.error("please Select Product Size")
                  return;
                }
                token?addToCart(currProduct._id,size):Navigate('/login')}
                
                
              } className='bg-green-500 w-full md:w-[50%]   rounded text-white mt-4 bordered  p-3 py-2' >{loading?
<span className="loading  text-center loading-spinner loading-sm"></span>:"ADD TO CART"

              }
              </button>
              </div>

              </div  >
              <div className='flex flex-col gap-1' >

              <p className='text-sm text-gray-500' >100% Original Quality</p>
              <p className='text-sm text-gray-500' >Cash on delivery is available on this product</p>
              <p className='text-sm text-gray-500' >Easy return and exchange policy within 7 days</p>
              </div>

            </div>
̥
            

          </div>
          {/* similar products */}
          <div className='flex flex-col mt-5 items-center sm:items-start gap-5' >
            <Title text1={"SIMILAR"} text2={"PRODUCTS"}/>
̥
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">

                  {similarProducts.map((item,idx)=>(
                    <ProductItem key={idx} id={item._id} name={item.name} image={item.image} price={item.price}/>
                  ))}

          </div>
                  </div>
          <div></div>

        </div>
  )
}

export default ProductInfo