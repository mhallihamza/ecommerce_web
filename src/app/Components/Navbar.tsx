// Navbar.jsx
"use client"
import React from 'react';
import { useState, useContext } from 'react';
import Link from 'next/link'
import { useCart } from '@/context/CartContext';
import { Inter } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import { RiShoppingBasketLine, RiCloseFill  } from 'react-icons/ri';
import { SideCartContext } from '@/context/SideCartContext';

interface SideCartContextProps {
    showcart: boolean;
    handleClick: () => void;
  }
const inter = Inter({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const josefin_Sans = Josefin_Sans({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

function Navbar() {
  const { showcart, handleClick } = useContext(SideCartContext) as SideCartContextProps;
  const [dropdown,setDropdown] = useState(false);
  const [droplink,setDroplink]  = useState(false);
  const { getTotalProductCount } = useCart();
  const navbar = () => {
    setDropdown(prev=>!prev);
  }
  const drop = () => {
    setDroplink(prev=>!prev);
  }
  return (
    <nav className="bg-[#0573f0] lg:px-6 xl:px-6">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-wrap items-center justify-between py-3 lg:pt-3 lg:pb-0">
      <div className='lg:hidden flex justify-between w-full px-2'>
      <div className='flex items-center'>
    <button data-collapse-toggle="navbar-dropdown" onClick={navbar} type="button" className="inline-flex items-center py-2 w-10 h-10 text-sm text-white rounded-lg lg:hidden" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        { dropdown ? <RiCloseFill className="w-8 h-8" /> :
        <svg className="w-6 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        }
    </button>
    <Link href="/">
      <div className='text-white items-center flex px-4 gap-1'>
        <div className="h-6 w-6 rounded-full border-8 border-yellow-300"></div>
        <h1 className={`text-2xl ${josefin_Sans.className}`}>tronmart</h1>
      </div>
    </Link>
       </div>
       <div className='relative text-white'>
        <button onClick={handleClick}>
          { getTotalProductCount()>0 ? <span className='absolute rounded-full flex justify-center items-center w-5 h-5 bg-white -right-[14px] -top-2 text-black'>{getTotalProductCount()}</span> : ""}
          <RiShoppingBasketLine className="h-8 w-8"/>
        </button>
        </div>
    </div>
    <div className={`${dropdown ? "" : "hidden"}  w-full lg:flex md:w-auto`} id="navbar-dropdown">
      <ul className={`flex flex-col flex-wrap relative font-semibold text-base p-4 lg:p-0 mt-4 lg:flex-row lg:mt-0 md:border-0 ${inter.className}`}>
        <li className='md:pr-12 h-12' onMouseEnter={()=>setDroplink(true)} onMouseLeave={()=>setDroplink(false)}>
          <button onClick={drop} className="flex items-center justify-between w-full py-2 px-3 text-[#f7fbfc] rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">All products <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <div className={`z-10  ${droplink ? "hidden lg:block" : "hidden"} font-semibold absolute top-full bg-[#0573f0] divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className={`text-base text-white dark:text-gray-400" ${inter.className}`}>
                  <li>
                    <Link href="/categories/air-conditioner" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Air conditioner</Link>
                  </li>
                  <li>
                    <Link href="/categories/kitchen-appliances" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Kitchen appliances</Link>
                  </li>
                  <li>
                    <Link href="/categories/pcs-laptop" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">PCs & laptop</Link>
                  </li>
                  <li>
                    <Link href="/categories/gadgets" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Gadgets</Link>
                  </li>
                  <li>
                    <Link href="/categories/smart-home" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Smart home</Link>
                  </li>
                </ul>
            </div>
        </li>
        <li className={`lg:hidden ${droplink ? "" : "hidden" }`}>
          <ul className={`text-base text-white dark:text-gray-400" ${inter.className}`}>
                  <li>
                    <a href="/categories/air-conditioner" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Air conditioner</a>
                  </li>
                  <li>
                    <a href="/categories/kitchen-appliances" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Kitchen appliances</a>
                  </li>
                  <li>
                    <a href="/categories/pcs-laptop" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">PCs & laptop</a>
                  </li>
                  <li>
                    <a href="/categories/gadgets" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Gadgets</a>
                  </li>
                  <li>
                    <a href="/categories/smart-home" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Smart home</a>
                  </li>
                </ul>
        </li>
        <li className='md:pr-12 h-12'>
          <Link href="/categories/home-appliances" className="block py-2 pl-3 pr-4 text-[#f7fbfc] md:p-0">Home appliances</Link>
        </li>
        <li className='md:pr-12 h-12'>
          <Link href="/categories/audio-video" className="block py-2 pl-3 pr-4 text-[#f7fbfc] rounded md:p-0">Audio & Video</Link>
        </li>
        <li className='md:pr-12 h-12'>
          <Link href="/categories/refrigerator" className="block py-2 pl-3 pr-4 text-[#f7fbfc] rounded md:p-0">Refrigerator</Link>
        </li>
        <li className='md:pr-12 h-12'>
          <Link href="#" className="block py-2 pl-3 pr-4 text-[#f7fbfc] rounded md:p-0">New arrivals</Link>
        </li>
        <li className='md:pr-12 h-12'>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#f7fbfc] rounded md:p-0">Today&#39;s deal</a>
        </li>
        <li className='md:pr-12 h-12'>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#f7fbfc] rounded md:p-0">Gift cards</a>
        </li>
      </ul>
      <div className='text-white hidden max-[1250px]:items-center lg:flex pl-2'>
        <div className='relative'>
        <button onClick={handleClick}>
          { getTotalProductCount()>0 ? <span className='absolute rounded-full flex justify-center items-center w-5 h-5 bg-white -right-[14px] lg:-top-3 text-black'>{getTotalProductCount()}</span> : ""}
          <RiShoppingBasketLine className="h-6 w-6"/>
        </button>
        </div>
        <div className="border-l border-[#0769da] h-2/3 mx-6"></div>
        <div className='inline whitespace-nowrap'>Log In</div>
      </div>
    </div>
      </div>
    </nav>
  );
}

export default Navbar;