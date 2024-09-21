import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Collection from './pages/Collection'
import ProductInfo from './pages/ProductInfo'
import { ToastContainer, } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart'
import Login from './components/Login'
import CartPanel from './components/cartPanel'
import { useContext } from 'react'
import { ShopContext } from './context/ShopContext'
import PlaceOrder from './pages/PlaceOrder'
  


const App = () => {
  const location=useLocation()
  const {getCartTotal}=useContext(ShopContext)
  console.log(location.pathname);
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw]'>
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:id' element={<ProductInfo/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        
      </Routes>
      
      
      <Footer/>
      {!location.pathname.includes('cart')&&!location.pathname.includes('order')&&getCartTotal()>0?

      <CartPanel/>:null
      }
      
        

    </div>
  )
}

export default App