"use client"
import React from 'react'
import { Poppins } from 'next/font/google';
import Produit from './Produit';
import useFetch from '@/hooks/useFetch';
import ProductLoader from './ProductLoader';
const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  name: string;
};

const Products : React.FC<Props> = ({ name }) => {
  type Produits =  {
    product_id:number,
    product_name:string,
    product_price:number,
    image_url:string,
    category_name:string,
  }
  const {data,error,refetch} = useFetch("/api/products");
  let produits:Produits[] | undefined = data;
  return (
    <div className={`bg-white ${poppins.className} border shadow-lg border-gray-300 p-4`}>
      <div className='flex gap-4 mb-10'>
        <h1 className='text-2xl text-[#27323F]'>{name}</h1>
        <button className='text-[#0573F0] pt-1'>See more</button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      { produits ?
        produits.filter(produit => produit.category_name === name.toLowerCase()).map(produit=>(
          <div key={produit.product_id}>
             <Produit produit={produit}/>
          </div>
        ))
        : 
          [0,1,2,3].map(element => (
          <ProductLoader key={element}/>
          ))
      }
      </div>
    </div>
  )
}

export default Products