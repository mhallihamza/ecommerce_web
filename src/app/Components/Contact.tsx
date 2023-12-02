import React from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
  });

function Contact() {
  return (
    <div className={`${inter.className} lg:grid flex flex-col-reverse lg:flex-none md:flex-row md:flex-wrap-reverse lg:grid-cols-4`}>
    <div className="border-t w-auto md:w-1/2 lg:w-auto pt-4 pb-6 border-gray-300 flex items-center">
        <div>
            <h2 className='text-[#48515B] text-sm pb-1'><u>Expert advice</u></h2>
            <p className={`text-[#27323F] text-2xl`}>123-456-7890</p>
        </div>
    </div>
    <div className="border-t w-auto md:w-1/2 lg:w-auto pt-4 pb-6  border-gray-300 flex items-center">
        <div>
            <h2 className='text-[#48515B] text-sm pb-1'><u>Customer service</u></h2>
            <p className={`text-[#27323F] text-2xl`}>1-222-345-6789</p>
        </div>
    </div>
    <div className="border-t w-auto md:w-1/2 lg:w-auto pt-4 pb-6 border-gray-300 flex items-center">
        <div>
            <h2 className='text-[#48515B] text-sm pb-1'><u>Have any questions?</u></h2>
            <p className={`text-[#27323F] text-2xl`}>Contact us</p>
        </div>
    </div>
    <div className='relative w-auto md:w-1/2 lg:w-auto flex items-end'>
        <img className='absolute  bottom-0' src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-support-team.png'></img>
    </div>
</div>
  )
}

export default Contact