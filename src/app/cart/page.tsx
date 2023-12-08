"use client"
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import useFetch from '@/hooks/useFetch';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

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

type ProduitType = {
  product_id: number;
  product_name: string;
  product_price: number;
  attributes: string;
  image_url: string;
  category_name: string;
  category_id: number;
}

function Page() {
  const { cart, removeItemFromCart, addItemToCart } = useCart();
  const { data, error, refetch } = useFetch("/api/products");
  let products: ProduitType[] = data;

  const getProductById = (productId: number) => {
    return products?.find((product) => product.product_id === productId);
  };

  const handleRemoveItem = (productId: number) => {
    removeItemFromCart(productId);
  };

  const handleAddToCart  = (product_id:number, quantity:number) => {
   addItemToCart(product_id,quantity);
 };
  return (
    <div className='px-4 md:px-6 pt-6 lg:pt-12 lg:px-10 xl:px-14'>
      <section>
        <h1 className={`text[#27323F] ${poppins.className} text-3xl mb-6`}>Cart</h1>
        {
          cart.items.length > 0 ? (
            <div className='lg:flex mb-8 gap-6'>
              <div className='lg:w-2/3'>
                <table className={`text-[#48515B] hidden md:block ${inter.className}`}>
                  <thead className="bg-[#F7FBFC] border text-base">
                    <tr>
                      <th className='px-4 py-3'></th>
                      <th className='px-4 py-3'>Product</th>
                      <th className='px-4 py-3'>Price</th>
                      <th className='px-4 py-3'>Quantity</th>
                      <th className='pl-4 py-3'>Subtotal</th>
                      <th className='py-3 pr-12'></th>
                    </tr>
                  </thead>
                  <tbody className='border-x border-b'>
                    {products && cart.items.map((item) => {
                      const product = getProductById(item.product_id);

                      return (
                        <tr key={item.product_id}>
                          <td className='px-4 py-3'>
                            <div className='lg:h-16 w-16 xl:h-20 xl:w-20'>
                              <img className='w-full h-full' src={product?.image_url} alt={product?.product_name} ></img>
                            </div>
                          </td>
                          <td className='px-4 py-3 text-[#0573F0]'>{product?.product_name}</td>
                          <td className='px-4 py-3'>{product?.product_price}</td>
                          <td className='px-4 py-3'>
                            <div className="flex py-1 border rounded-lg bg-white">
                              <button
                                onClick={item.quantity>1 ? ()=>handleAddToCart(item.product_id,-1) : ()=>handleAddToCart(item.product_id,0)}
                                className="px-4 py-1 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-4 py-1 ">{item.quantity}</span>
                              <button
                                onClick={()=>handleAddToCart(item.product_id,1)}
                                className="px-4 py-1 cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className='px-4 py-3'>{product?.product_price ? item.quantity * product?.product_price : ""}</td>
                          <td className='pr-12 py-3'><button onClick={() => handleRemoveItem(item.product_id)} className='border rounded-full'><svg className="ast-mobile-svg text-gray-400 ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg></button></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <table className={`text-[#48515B] mb-7 md:hidden ${inter.className}`}>
                  <tbody className='border'>
                    {products && cart.items.map((item) => {
                      const product = getProductById(item.product_id);

                      return (
                        <tr key={item.product_id} className='flex flex-col'>
                          <td className='border-b pr-4 flex justify-end py-3'><button onClick={() => handleRemoveItem(item.product_id)} className='border rounded-full'><svg className="ast-mobile-svg text-gray-400 ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg></button></td>
                          <td className='px-4 flex justify-center border-b py-3'>
                            <div className='lg:h-16 w-16 xl:h-20 xl:w-20'>
                              <img className='w-full h-full' src={product?.image_url} alt={product?.product_name} ></img>
                            </div>
                          </td>
                          <td className='px-4 border-b flex justify-between py-3 text-[#0573F0]'>
                            <div className="text-[#48515B]">Product:</div>
                            <div className='pl-5'>{product?.product_name}</div>
                          </td>
                          <td className='px-4 border-b flex justify-between py-3'>
                            <div className="text-[#48515B]">Price:</div>
                            <div>${product?.product_price}</div>
                          </td>
                          <td className='px-4 py-3 border-b items-center flex justify-between'>
                            <div>Quantity:</div>
                            <div className="flex py-1 border rounded-lg bg-white">
                              <button
                                onClick={item.quantity>1 ? ()=>handleAddToCart(item.product_id,-1) : ()=>handleAddToCart(item.product_id,0)}
                                className="px-4 py-1 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-4 py-1 ">{item.quantity}</span>
                              <button
                                onClick={()=>handleAddToCart(item.product_id,1)}
                                className="px-4 py-1 cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className='px-4 border-b py-3 flex justify-between'>
                            <div>Subtotal</div>
                            <div>${product?.product_price ? item.quantity * product?.product_price : ""}</div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className='lg:w-1/3'>
                <div className='bg-[#F7FBFC] border px-5 py-[14px]'>
                  <h2 className={`text[#27323F] ${poppins.className} text-xl`}>Cart totals</h2>
                </div>
                <div className='border-x border-b px-5'>
                  <table className={`text-[#48515B]  w-full text-base mb-2 ${inter.className}`}>
                    <tbody>
                      <tr className='border-b'>
                        <th className='px-4 w-auto py-3 text-left'>Subtotal</th>
                        <td className='px-4 py-3'>${cart.items.map(item => item.quantity * (getProductById(item.product_id)?.product_price || 0)).reduce((acc, el) => acc + el, 0)}</td>
                      </tr>
                      <tr className='border-b'>
                        <th className='px-4 w-auto py-3 text-left'>Total</th>
                        <td className='px-4 py-3'>${cart.items.map(item => item.quantity * (getProductById(item.product_id)?.product_price || 0)).reduce((acc, el) => acc + el, 0)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={`py-3 mb-5 ${inter.className}`}>
                    <p className='my-4 text-base'>Have a coupon?</p>
                    <button className='text-white text-xl hover:bg-blue-600 bg-[#27323F] w-full py-5'>Proceed to checkout</button>
                  </div>
                </div>
              </div>
            </div>
          ) : <div className='pt-4'>
            <div className={`py-4 bg-[#F7F6F7] text-[#515151] ${inter.className} mb-12 text-base pl-8 border-t-4 border-[#0573F0]`}>
              Your cart is currently empty.
            </div>
            <div className='mb-4'>
              <Link className={`text-white ${poppins.className}`} href="/">
                <button className='px-7 py-4 text-base bg-[#27323F]'>Retrun to shop</button>
              </Link>
            </div>
          </div>
        }
      </section>
    </div>
  )
}

export default Page