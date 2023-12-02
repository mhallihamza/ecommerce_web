import React from 'react'
import { FaShippingFast, FaCommentDots, FaUndoAlt } from 'react-icons/fa';
import { HiMiniCreditCard } from 'react-icons/hi2';
function Features() {
  return (
<div className='bg-white md:relative lg:-top-24 md:-top-16 md:mb-3 lg:-mb-10 my-10 grid grid-cols-2 md:grid-cols-4 p-6 gap-x-6 gap-y-3 border border-gray-300'>
      <div className='md:flex lg:border-r lg:h-16'>
        <FaShippingFast className='text-blue-600 pb-2 md:h-8 md:w-8 h-6 w-6 md:mr-3'/>
        <div>
           <h1 className='pb-2 lg:text-sm font-semibold text-base'>Free Shipping</h1>
           <p className='pb-2 text-[#9CA7AB] text-xs'>When you spend $80 or more</p>
        </div>
      </div>
      <div className='md:flex lg:border-r lg:h-16'>
        <FaCommentDots className='text-blue-600 pb-2 h-6 w-6 md:h-8 md:w-8 md:mr-3'/>
        <div>
           <h1 className='pb-2 lg:text-sm font-semibold text-base'>We are available 24/7</h1>
           <p className='pb-2 text-[#9CA7AB] text-xs'>Need help? contact us anytime</p>
        </div>
      </div>
      <div className='md:flex lg:border-r lg:h-16'>
        <FaUndoAlt className='text-blue-600 pb-2 h-6 w-6 md:h-8 md:w-8 md:mr-3'/>
        <div>
            <h1 className='pb-2 lg:text-sm font-semibold text-base'>Satisfied or return</h1>
            <p className='pb-2 text-[#9CA7AB] text-xs'>Easy 30-day return policy</p>
        </div>
      </div>
      <div className='md:flex'>
        <HiMiniCreditCard className='text-blue-600 pb-2 h-6 w-6 md:h-8 md:w-8 md:mr-3'/>
        <div>
           <h1 className='pb-2 lg:text-sm font-semibold text-base'>100% secure payments</h1>
           <p className='pb-2 text-[#9CA7AB] text-xs'>Visa, Mastercard, Stripe, Paypal</p>
        </div>
      </div>
    </div>
  )
}

export default Features