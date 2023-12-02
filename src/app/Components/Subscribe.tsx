import React from 'react'
import { Poppins } from 'next/font/google';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { Inter } from 'next/font/google';
const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});
function Subscribe() {
  return (
    <div className='bg-white grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 justify-between px-5 md:px-10 py-8'>
        <div className='md:flex lg:items-center text-center md:text-left md:border-r md:pr-20'>
            <div className='md:pr-4 text-center md:text-left'>
              <FaRegEnvelopeOpen className='md:h-12 h-8 w-8 mx-auto md:w-12'/>
            </div>
            <div className={`text-[#27323F] mt-2 mb-3 text-xl ${poppins.className}`}>Subscribe to our newsletter</div>
        </div>
        <div className={`text-[#48515B] lg:flex lg:items-center text-center md:text-left md:px-10 text-sm ${poppins.className}`}>
          <p>Sign up for all the latest news and special offers</p>
        </div>
        <div className='md:col-span-2 w-full md:flex mt-6 lg:mt-4 lg:pl-20'>
          <input className='pl-2 md:mb-0 mb-5 lg:my-3  w-full py-3 border' placeholder='Your email' type='text'></input>
          <button className={`bg-[#27323F] lg:my-4 py-2 lg:py-0 lg:px-12 w-full md:w-auto px-auto  hover:bg-blue-600 md:px-7 ${poppins.className} md:ml-2 text-base text-white`}>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe