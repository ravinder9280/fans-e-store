import { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { ShopContext } from "../context/ShopContext";
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const {setShowSearch,showSearch,search,setSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)
    const location=useLocation()
    
    useEffect(()=>{
      if(location.pathname.includes('collection')){
        setVisible(true)
      }
      else{
        setVisible(false)
      }

    },[location])
  return showSearch&&visible? (
    <div className="bg-gray-100  flex border-gray-300 border-t border-b p-2  items-center gap-2 justify-center  ">
        <label className="input rounded-2xl  input-bordered flex items-center ">
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value) } className="grow w-2/4 " placeholder="Search" />
  <button className="btn btn-ghost btn-circle" >

  <  svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-5 w-5 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
      </button>
</label>
<button onClick={()=>setShowSearch(false)} className="btn btn-ghost btn-circle">

<RxCross1 />
</button>

    </div>
  ):null
}

export default SearchBar