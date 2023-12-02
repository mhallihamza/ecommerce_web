"use client"
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Produit from '@/app/Components/Produit';
import QuantitySelector from '@/app/Components/QuantitySelector';
import { useCart } from '@/context/CartContext';
import { Inter } from 'next/font/google';
import useFetch from '@/hooks/useFetch';
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

type ProduitType =  {
  product_id:number;
  product_name:string;
  product_price:number;
  attributes: string;
  image_url:string;
  category_name:string;
  category_id:number;
}

interface Cart {
  items: {
    product_id: number;
    quantity: number;
  }[];
}

function Page({ params }: { params: { product_id: number, product_name: string } }) {
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  const {data,error,refetch} = useFetch(`/api/product/${params.product_id}`);
  let product:ProduitType[] = data;
  const {data:productsData,error:productsError,refetch:productsRefetch} = useFetch(`/api/products/${product[0]?.category_id}`);
  let products:ProduitType[] = productsData && productsData.length > 0 ? productsData.slice(0, 4) : [];
  const description: Record<string, any> = product[0]?.attributes ? JSON.parse(product[0].attributes) : {};
  console.log(products);
  // Function to add an item to the cart for a visitor
const handleAddToCart  = (product_id:number, quantity:number) => {
   addItemToCart(product_id,quantity);
};

  return (
    <div className='bg-slate-100 px-4 md:px-6 xl:pt-12 lg:px-10 xl:px-14 py-6'>
      {
        product.length && (
      <div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
        <div className='lg:col-span-1 xl:pb-12'>
            <img className='w-full object-fill' src={product[0].image_url} alt={product[0].category_name}></img>
        </div>
        <div className={`${inter.className} pb-10 lg:col-span-1`}>
           <h3 className='text-[#777777] lg:text-base text-xs'>{`Home / ${product[0].category_name} / ${product[0].product_name}`}</h3>
           <h1 className={`text-lg lg:text-3xl mt-5 mb-2 font-semibold text-[#27323F] ${poppins.className}`}>{product[0].product_name}</h1>
           <div className='text-[#48515B] mb-1 text-2xl font-semibold'>{`$${product[0].product_price}`}</div>
           <div className='mb-5'>
               <p className='text-sm lg:text-base mb-4 text-[#48515B]'>key features</p>
               <ul  className='list-disc ml-10 text-[#48515B]'>
                 <li>Newest technology</li>
                 <li>Best in class components</li>
                 <li>Dimensions</li>
                 <li>Maintenance free</li>
                 <li>1 year warranty</li>
               </ul>
           </div>
           <div className='pb-4'>
            <div className='mb-5 items-center flex gap-6'>
               <p>Quantité</p>
               <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
            </div>
           <button className='bg-black hover:bg-blue-600 lg:py-3 lg:w-2/3 text-xl py-2 text-white rounded-3xl md:w-1/2 w-full' onClick={() => handleAddToCart(product[0].product_id, quantity)}>Add to cart</button>
           </div>
           <p className='text-sm'>Catgeory: <span className='text-blue-500'>Audio & video</span></p>
        </div>
        </div>
        <div>
          <div className='text-white bg-blue-400 font-semibold text-xl py-2 pl-6 w-full'>Caractéristiques</div>
          <div className='border bg-white px-6 py-8 text-black font-bold'>
            <table className='w-full'>
            <tr>
              <td className='font-bold py-1 border-b border-gray-400 text-gray-700'>AVAILABILITY DATE</td>
              <td className='text-gray-400 py-1 border-b border-gray-400'></td>
            </tr>
            {Object.entries(description).map(([key, value]) => (
      <tr key={key}>
        <td className='font-bold border-b py-1 border-gray-400 text-gray-700'>{key.toUpperCase().replace("_"," ")}</td>
        <td className='text-gray-400 py-1 border-b border-gray-400'>
          {typeof value === 'boolean'
            ? value
              ? 'YES'
              : 'NO'
            : typeof value === 'object' && value !== null && value !== undefined
            ? Object.values(value).every(v => v !== null && v !== undefined)
              ? `${Object.values(value).join(' * ')}`
              : ''
            : String(value).toUpperCase().replace("_"," ")}
        </td>
      </tr>
    ))}
       </table>
          </div>
        </div>
        <div className='mt-16'>
          <h1 className={`text-2xl text-[#27323F] mb-4 ${poppins.className}`}>Related products</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
              products?.map(produit=>(
                <Produit key={produit.product_id} produit={produit}/>
              ))
            }
          </div>
        </div>
      </div>
  )
            }
    </div>
  )
}

export default Page