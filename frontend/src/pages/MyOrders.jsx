import Title from "../components/Title"
import box from '../assets/box.crop.jpg'
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


const MyOrders = () => {
  const {orders}=useContext(ShopContext)
  return (
    <div className="flex flex-col gap-4 mt-4">
        <Title text1={"My"} text2={"Orders"}/>
        <div className="flex flex-col gap-2">
          {orders.map((item,idx)=>(

            <div key={idx} className="flex  border p-2 justify-between flex-col gap-2 sm:flex-row ">
              <div className="flex gap-2 flex-col sm:flex-row ">
              <div>

              <img className="w-14" src={box} alt="" />
              <p>${item.amount}</p>
              </div>
              <div className="flex flex-col  items-start ">
                <p>{item.items.length}x</p>
              {item.items.map((i,k)=>(
      <p key={k} className='text-xs  '><span className="text-orange-600"> {k}. </span>{i.name}({(i.quantity)}x)</p>
    ))}
              </div>
              </div>
              <div className="text-xs flex">
                <div>

                <p className={`bg-red-500 p-2 text-white rounded-md`} >{item.status}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default MyOrders