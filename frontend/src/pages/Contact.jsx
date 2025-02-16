import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";





const Contact = () => {
  return (
    <div className='flex flex-col gap-12 mt-8 mb-8'>
        <div className='flex gap-1 flex-col items-center'>
            <p className='text-2xl md:text-3xl font-semibold'>Contact Our Friendly Team</p>
                <p className='text-sm md:text-base'>Let us know how we can Help</p>
        </div>

        <div className='flex justify-between items-center  gap-4 flex-col md:flex-row  '>
            <div className=' flex  flex-col gap-8 p-6 md:p-4 border w-[60vw] md:w-auto rounded' >
                <div className="text-2xl">

            <MdOutlineEmojiEmotions />
                </div>
  
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 '>
                        <p className='font-medium md:text-2xl'>Chat To Sales</p>
                        <p className='text-sm md:text-base text-gray-600'>Speaks to our friendly team.</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-[450]">fansestore.netlify.app</p>

                </div>

            </div>
            <div className=' flex  flex-col gap-8 p-6 md:p-4 border w-[60vw] md:w-auto rounded' >
                <div className="text-2xl">
                <IoChatbubbleEllipsesOutline />


                </div>
  
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 '>
                        <p className='font-medium md:text-2xl'>Chat To Support</p>
                        <p className='text-sm md:text-base text-gray-600'>We're here to help.</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-[450]">fansestore.netlify.app</p>

                </div>

            </div>
            <div className=' flex  flex-col gap-8 p-6 md:p-4 border w-[60vw] md:w-auto rounded' >
                <div className="text-2xl">

                <IoLocationOutline />
                </div>
  
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 '>
                        <p className='font-medium md:text-2xl'>Visit us</p>
                        <p className='text-sm md:text-base text-gray-600'>Visit our office HQ..</p>
                    </div>
                    <p className="text-sm sm:text-base font-[450]">fansestore.netlify.app</p>

                </div>

            </div>
            <div className=' flex  flex-col gap-8 p-6 md:p-4 border w-[60vw] md:w-auto rounded' >
                <div className="text-2xl">

                <IoCallOutline />
                </div>
  
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 '>
                        <p className='font-medium md:text-2xl'>Call us</p>
                        <p className='text-sm md:text-base text-gray-600'>24/7 support.</p>
                    </div>
                    <p className="text-sm sm:text-base font-[450]">fansestore.netlify.app</p>

                </div>

            </div>
           
             </div>


    </div>
  )
}

export default Contact