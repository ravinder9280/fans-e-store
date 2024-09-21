import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'


const Login = () => {
    const {url,token,setToken,Navigate,getCartData}=useContext(ShopContext)
    const[login,setLogin]=useState(true)
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        name:''
    })
    const onChangeHandler=(e)=>{
      let value=e.target.value;
      let name=e.target.name;
        setFormData((data)=>({...data,[name]:value}));
        console.log(formData);
        

    }
    useEffect(()=>{
      console.log(token);
      
    },[token])
    const onSubmitHandler=async(e)=>{
        e.preventDefault();
      if(login){

        let response= await axios.post(`${url}/api/user/login`, formData);
        if(response.data.success){
          toast.success(response.data.message)
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          Navigate('/')
          

        }
        else{
          toast.error(response.data.message)
        }
        
        
      }
      else{
        let response= await axios.post(`${url}/api/user/register`, formData);
        if(response.data.success){
          toast.success(response.data.message)
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          Navigate('/')
          


        }
        else{
          toast.error(response.data.message)
        }


      }
        
    }
    

  return (
    <div className='flex flex-col items-center justify-between gap-4 border py-6'>
        <div>
            <p className='text-2xl font-semibold '>{login?"Login":"Register"}</p>
        </div>
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center  gap-5  '>
            {
                login?"":

                
                <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" name='name' value={formData.name} onChange={onChangeHandler} className="grow" placeholder="Name" />
</label>
    }
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input name='email' value={formData.email} onChange={onChangeHandler} type="text" className="grow" placeholder="Email" />
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input  name='password' value={formData.password} onChange={onChangeHandler} className="grow" placeholder='Password' />
</label>
<button type='submit' className={ `p-3 hover:bg-lime-300 rounded-md w-full ${login?"bg-lime-400 hover:bg-lime-300":"bg-orange-500 hover:bg-orange-400 text-white"} `}>{login?"Login":"Create Account"}</button>
<div>
    
</div>
      </form>
      <div className='cursor-pointer' onClick={()=>setLogin(!login)} >
        {
            login?
            
            <p className='text-center  text-sm sm:text-lg text-gray-600'>Don't have an account? <span  className='text-blue-600'>Register</span></p>:
        <p className='text-center sm:text-lg text-sm text-gray-600'>Already have an account? <span  className='text-blue-600'>Login</span></p>
        }
      </div>
    </div>
  )
}

export default Login