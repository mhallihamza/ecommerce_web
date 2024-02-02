import React from 'react'
import { Josefin_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';
const josefin_Sans = Josefin_Sans({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});
const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
  });
function Footer() {
  return (
    <footer>
      <div className='grid grid-cols-1 gap-14 md:grid-cols-4  bg-white pt-20 pb-16 px-10 border-t'>
      <div>
      <div className='text-gray-400 items-center justify-center flex gap-1'>
          <div className="h-6 w-6 rounded-full border-8 border-gray-500"></div>
          <h1 className={`text-2xl ${josefin_Sans.className}`}>tronmart</h1>
        </div>
      </div>
      <div className='text-center'>
        <h5 className={`text-xl text-[#27323F] ${poppins.className}`}>Shop</h5>
        <ul className='text-[#0573F0] mt-10 text-base'>
          <li>Hot deals</li>
          <li>Categories</li>
          <li>Brands</li>
          <li>Rebates</li>
          <li>Weekly deals</li>
        </ul>
      </div>
      <div className='text-center'>
      <h5 className={`text-xl text-[#27323F] ${poppins.className}`}>Need help</h5>
        <ul className='text-[#0573F0] mt-10 text-base'>
          <li>Contact</li>
          <li>Order tracking</li>
          <li>FAQs</li>
          <li>Return policy</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className='text-center'>
        <h5 className={`text-xl text-[#27323F] ${poppins.className}`}>Contact</h5>
        <ul className='text-[#0573F0] mt-10 text-base'>
          <li>123 Fifth Avenue, New York, NY 10160</li>
          <li>contact@info.com</li>
          <li>929-242-6868</li>
        </ul>
      </div>
      </div>
      <div className='bg-[#27323F] px-10 py-5 flex flex-col md:flex-row justify-center lg:justify-between text-[#9CA7AB]'>
        <div>
          <p className='text-center md:text-left'>© 2023 Electronic Store. Powered by Electronic Store</p>
        </div>
        <div className='mx-auto lg:mx-0 my-3 md:my-0'>
          <img src='https://websitedemos.net/electronic-store/wp-content/uploads/sites/1055/2022/03/electronic-store-footer-payment-gateway-icon.png'></img>
        </div>
      </div>
    </footer>
  )
}

export default Footer