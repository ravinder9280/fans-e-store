import { Routes,Route } from 'react-router-dom'
import { AddItems } from './components/AddItems'
import Navbar from './components/Navbar'
import SlideBar from './components/SlideBar'
import ListItems from './components/ListItems'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className='flex flex-col h-'>
      <Navbar/>
      <ToastContainer />
      <div className='flex '>
      <SlideBar/>

      <Routes>
        <Route path='/' element={<AddItems/>}/>
        <Route path='/list' element={<ListItems/>}/>
        
      </Routes>
      </div>


    </div>
  )
}

export default App