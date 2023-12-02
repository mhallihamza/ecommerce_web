import React from 'react'
import Image from 'next/image';
import accueilImage from '../../images/accueil-image.jpg';
import logo from '../../images/electronic-store.png'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
  });

function Banner() {
  return (
    <div className="relative h-[33rem] md:h-[30rem] lg:h-[38rem]">
      <Image
        src={accueilImage}
        alt="Accueil Image"
        fill
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
        className='z-0'
      />
      <div className="absolute p-5 md:p-9 lg:right-[16.7%] xl:right-[20.7%] lg:bottom-1/2 lg:translate-y-1/2 md:bottom-16 lg:w-1/3 bottom-12 right-1/2 transform translate-x-1/2 md:right-[28%] md:w-1/2 w-[93%] z-10 bg-white">
        <Image
        src={logo}
        alt='logo'
        />
        <h1 className={`text-2xl lg:text-4xl lg:leading-normal md:text-3xl md:leading-snug ${poppins.className} md:py-6 text-[#27323F] font-semibold py-3`}>The best home entertainment system is here</h1>
        <p className='text-[#48515B] text-sm'>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
        <button className=' mt-5 font-semibold text-[#0573F0]'>Shop Now</button>
      </div>
    </div>
  )
}

export default Banner