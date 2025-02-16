import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>

    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div className="">
            <img src={assets.logo} className='mb-5 w-14' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Unleash your inner fan! Fansestore is your source for officially licensed merchandise that lets you express your fandom with style and confidence.            </p>
        </div>
        <div className="">
            <p className=" text-xl font-medium mb-5">COMPANY</p>
            <ul className=' flex flex-col text-gray-600 gap-1' >
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className=" text-xl font-medium mb-5">CONTACT</p>
            <ul className='flex flex-col  text-gray-600 gap-1' >
                <li>+91 7678561409</li>
                <li>ravinder92809@gmail.com</li>
                
            </ul>
        </div>
    </div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center' >
            MADE WITH ❤️ BY RAVINDER
            </p>
    </div>

    </div>
  )
}

export default Footer