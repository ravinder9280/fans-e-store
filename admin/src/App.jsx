import { Routes,Route } from 'react-router-dom'
import { AddItems } from './components/AddItems'
import Navbar from './components/Navbar'
import SlideBar from './components/SlideBar'
import ListItems from './components/ListItems'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const url="https://fans-e-store.onrender.com"
  // const url="http://localhost:5000"
  return (
    <div className='flex flex-col   container'>
      <Navbar/>
      <ToastContainer />
      <div className='flex '>
      <SlideBar/>

      <Routes>
        <Route path='/' element={<AddItems url={url} />}/>
        <Route path='/list' element={<ListItems url={url} />}/>
        
      </Routes>
      </div>


    </div>
  )
}

export default App