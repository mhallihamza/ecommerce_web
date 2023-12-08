"use client"
import React, { useState, useContext } from 'react'
import Link from 'next/link';
import useFetch from '@/hooks/useFetch';
import { useCart } from '@/context/CartContext';
import { SideCartContext } from '@/context/SideCartContext';

interface SideCartContextProps {
  showcart: boolean;
  handleClick: () => void;
}

type ProduitType = {
  product_id: number;
  product_name: string;
  product_price: number;
  attributes: string;
  image_url: string;
  category_name: string;
  category_id: number;
}

function ShoppingCard() {
  const { cart, removeItemFromCart } = useCart();
  const { showcart, handleClick } = useContext(SideCartContext) as SideCartContextProps;
  const { data, error, refetch } = useFetch(`/api/products`);
  let products: ProduitType[] = data;

  const getProductById = (productId: number) => {
    return products?.find((product) => product.product_id === productId);
  };

  const handleRemoveItem = (productId: number) => {
    removeItemFromCart(productId);
  };


  return (
    <div className={`relative ${showcart ? "" : "hidden"} z-20`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button onClick={handleClick} type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      {cart.items.length > 0 ?
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products && cart.items.map((item) => {
                            const product = getProductById(item.product_id);

                            return (
                              <li key={item.product_id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img src={product?.image_url} alt={product?.product_name} className="h-full w-full object-cover object-center"></img>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{product?.product_name}</a>
                                      </h3>
                                      <p className="ml-4">${product?.product_price.toFixed(2)}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {item.quantity}</p>
                                    <div className="flex">
                                      <button onClick={() => product && handleRemoveItem(product?.product_id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        :
                        <div className='mt-48 text-lg font-medium text-gray-900 flex justify-center'>No products in the cart</div>
                      }
                    </div>
                  </div>
                </div>
                {cart.items.length > 0 ?
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${cart.items.map(item => item.quantity * (getProductById(item.product_id)?.product_price || 0)).reduce((acc, el) => acc + el, 0)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link href="/cart" className="flex items-center justify-center py-3 px-5 rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        <button onClick={handleClick} className="flex items-center justify-center h-full w-full" type="button">
                          View cart
                        </button>
                      </Link>
                    </div>
                    <div className="mt-5">
                      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                  </div>
                  :
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="mt-6">
                      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Continue Shopping</a>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCard