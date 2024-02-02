// Headers.jsx
import React from 'react';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { Josefin_Sans } from 'next/font/google';

const josefin_Sans = Josefin_Sans({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

function Headers() {
  return (
    <header className='bg-[#0573f0] hidden lg:flex h-16 border-b border-[#0769da]'>
      <div className='max-w-screen-xl mx-auto px-4 lg:px-6 flex justify-between items-center w-full'>
      <Link href="/">
        <div className='text-white items-center flex gap-1'>
          <div className="h-6 w-6 rounded-full border-8 border-yellow-300"></div>
          <h1 className={`text-2xl ${josefin_Sans.className}`}>tronmart</h1>
        </div>
        </Link>
        <div className='flex gap-2'>
          <input className='h-12 pl-2' placeholder='Search Products...'></input>
          <button className='h-12 w-20 flex text-white text-xl justify-center items-center bg-black'>
            <BiSearch />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Headers;