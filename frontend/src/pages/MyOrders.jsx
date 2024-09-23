import Title from "../components/Title"
import box from '../assets/box.crop.jpg'
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"


const MyOrders = () => {
  const {orders}=useContext(ShopContext)
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-between ">

        <Title text1={"My"} text2={"Orders"}/>
        <Link className=" text-blue-500">Help</Link>
      </div>
        <div className="flex flex-col gap-2">
          {orders.map((item,idx)=>(

            <div key={idx} className="flex  border p-2 justify-between  gap-2 sm:flex-row ">
              <div className="flex gap-2 sm:gap-8 flex-col sm:flex-row ">
              <div>

              <img className="w-14" src={box} alt="" />
              <p>${item.amount}</p>
              </div>
              <div className="flex flex-col  items-start ">
                <p className="text-sm">{item.items.length}x</p>
              {item.items.map((i,k)=>(
      <p key={k} className='text-xs text-gray-600  '><span className="text-orange-600"> {k+1}. </span>{i.name}({(i.quantity)}x)</p>
    ))}
              </div>
              </div>
              <div className="text-xs text-gray-600 flex-col flex">
                <div>

                <p className={`    text-base  `} >{item.status}</p>
                </div>
                <div>

                <p className="text-[11px]">Order No: {item.userId}</p>
                </div>
                <div>

                <p className="text-[12px]">Payment : {item.payment?"Success":"Pending"}</p>
                </div>
                <div>

                <p className="text-[12px]">Created At : {item.date.slice(0,10)}</p>
                </div>
                <div>

                <p className="text-[12px]">Time : {item.date.slice(11,19)}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default MyOrders