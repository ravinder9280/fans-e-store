import React, { useContext, useEffect } from 'react'
import Title from '../components/Title'
import { assets} from '../assets/assets'
import { useState } from 'react'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import SearchBar from '../components/SearchBar'

const Collection = () => {
    const [rotate,SetRotate]=useState(false)
    const {products,search,setSearch,showSearch,loading,setLoading}=useContext(ShopContext)
    
    const [filterProducts,SetFilterProducts]=useState([])
    const [category,setCategory]=useState([])
    const [subCategory,setSubCategory]=useState([])
    const [sortType,setSortType]=useState("")

   
    
    let applyFilter=()=>{
        let productsCopy=products.slice();
        if(showSearch&&search){
            productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length>0){
            productsCopy=productsCopy.filter(item=>category.includes(item.category))
        }
        if(subCategory.length>0){
            productsCopy=productsCopy.filter(item=>subCategory.includes(item.subcategory))
        }
        
        SetFilterProducts(productsCopy)

}
    const sortProducts=()=>{
        let fpCopy=filterProducts.slice();
        switch(sortType){
            case 'low-high':
                SetFilterProducts(fpCopy.sort((a,b)=>a.price - b.price))
                break;
            case 'high-low':
                SetFilterProducts(fpCopy.sort((a,b)=>b.price - a.price))
                    break;
            default:
                applyFilter();
                break;
        }
    }
    

    
        
    useEffect(() => {
        
          window.scrollTo({ top: 0, behavior: 'smooth' });
        
      }, []);

    
   //4:02=36
 useEffect(()=>{
    console.log(category);
    console.log(subCategory);
    
    

        applyFilter()

    

// subCategoryFilter()
},[category,subCategory,search,showSearch,products])
useEffect(()=>{
    console.log(sortType);
    sortProducts()
    

},[sortType])





 
 
    
const clickHandler=(e)=>{
    if(category.includes(e.target.value)){
        setCategory(items=>items.filter(item=>item!=e.target.value))
    }
    else{

        setCategory(categ=>[...categ,e.target.value])
    }
    
}
const subCategoryClickHandler=(e)=>{
    if(subCategory.includes(e.target.value)){
        setSubCategory(items=>items.filter(item=>item!=e.target.value));
    }
    else{

        setSubCategory(categ=>[...categ,e.target.value]);
    }
    
}

  return (
    <div className='flex flex-col gap-4 ' >
        <SearchBar/>
        <div className='flex flex-row ' >
            <div className='' >

        <div onClick={()=>SetRotate(!rotate)}  className='flex flex-row gap-3 items-center cursor-pointer  ' >
            <p className='text-lg' >Filter</p>

        <img src={assets.dropdown_icon} className={`h-4 ${rotate?"rotate-90":""} sm:hidden  ` } alt="" />
        </div>
        <div className={`${rotate?"":"hidden"}  sm:flex  gap-4 `}>

        <div className="flex flex-col border gap-2 py-4 mt-4  px-12 border-gray-300  ">
            <p>CATEGORY</p>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input onClick={clickHandler} className='cursor-pointer'   type="checkbox" name="Men"  value={"Men"} 
              id="" />
            <p>Men</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input onClick={clickHandler} type="checkbox" value={"Women"} className='cursor-pointer' name=""  id="" />
            <p>Women</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input className='cursor-pointer' onClick={clickHandler} value={"Kids"} type="checkbox" name=""  id="" />
            <p>Kids</p>
            </div>
            

        </div>
        <div className={`flex flex-col border  gap-2 py-4 mt-4  px-12 border-gray-300  `}>
            <p>WEARS</p>
            <div className='flex  flex-row gap-2 text-gray-600 ' >

            <input onClick={subCategoryClickHandler} className='cursor-pointer' type="checkbox" value='Winterwear' name=""  id="" />
            <p >Winter Wear</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input  onClick={subCategoryClickHandler} className='cursor-pointer' type="checkbox" name="" value="Bottemwear"  id="" />
            <p >Bottom Wear</p>
            </div>
            <div className='flex flex-row gap-2 text-gray-600 ' >

            <input onClick={subCategoryClickHandler} className='cursor-pointer' type="checkbox" name="" value="Topwear" id="" />
            <p >Top Wear</p>
            </div>
            
            

        </div>
        </div>
        

        </div>




    
    </div>
    <div className='flex justify-between items-center'>

    <Title text1={"All"} text2={"Collection"}/>
    <div className='flex gap-2 cursor-pointer   ' >
            

        <select onChange={(e)=>setSortType(e.target.value)} className='border bg-slate-50 text-gray-600 text-xs sm:text-sm cursor-pointer' name="" id="">
            <option  className='cursor-pointer' value="relavant">Sort By : Relavent</option>
            <option className='cursor-pointer' value="low-high">Sort By : Low To High</option>
            <option className='cursor-pointer' value="high-low">Sort By : High To Low</option>
        </select>
    </div>
        
        </div>
        {loading?
            <div className="grid grid-cols-2 mt-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6" >
                

                </div>
    :

            <div className="grid grid-cols-2 mt-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6" >
                
        {filterProducts.map((item,idx)=>(
            <ProductItem key={idx} id={item._id } image={item.image} name={item.name} price={item.price}  />
            
        ))}
    </div>
    }
       

    </div>
  )
}

export default Collection