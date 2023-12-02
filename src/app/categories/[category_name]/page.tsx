"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import Produit from '@/app/Components/Produit';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';

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

type CategoriesType = {
  category_id: number;
  category_name: string;
  category_image: string;
  category_description: string;
  product_count: number;
};

type ProduitsType =  {
  product_id:number,
  product_name:string,
  product_price:number,
  image_url:string,
  category_id:number,
}

type CategoryMapping = {
  [slug: string]: string;
};

function Page({ params }: { params: { category_name: string } }) {

      const categoryMapping: CategoryMapping = {
        'air-conditioner': 'Air conditioner',
        'audio-video': 'Audio & video',
        'gadgets':'Gadgets',
        'home-appliances': 'Home appliances',
        'kitchen-appliances': 'Kitchen appliances',
        'pcs-laptop': 'PCs & laptop',
        'refrigerator': 'Refrigerator',
        'smart-home': 'Smart Home',
        
      };
    const {data:categoriesData,error:categoriesError,refetch:categoriesRefetch} = useFetch(`/api/categories/${params.category_name}`);
    let categories: CategoriesType[] = categoriesData;
    const {data:productsData,error,refetch} = useFetch(`/api/products/${categories[0]?.category_id}`);
    let products: ProduitsType[] = productsData;
    console.log(categories,products);
  return (
    <div className='mx-7 xl:mx-24 lg:pt-12 lg:grid lg:grid-cols-4'>
      <div className='border-r hidden lg:block pr-10 col-span-1'>
        <div className='sticky top-3'>
         <h1 className={`text-[#27323F] text-2xl ${poppins.className}`}>Categories</h1>
         <ul className={`text-[#48515B] text-base ${inter.className} xl:gap-4 flex flex-col gap-3 mt-20 pl-6`}>
           <li>Air conditioner</li>
           <li>Audio & video</li>
           <li>Gadgets</li>
           <li>Home appliances</li>
           <li>Kitchen appliances</li>
           <li>PCs & laptop</li>
           <li>Refrigerator</li>
           <li>Smart home</li>
         </ul>
         </div>
      </div>
      <div className='lg:pl-16 lg:col-span-3'>
        <div className='mt-16'>
            <h1 className={`text-[#0573F0] mb-8 text-3xl lg:text-6xl md:text-[40px] ${poppins.className}`}>{categoryMapping[params.category_name]}</h1>
            <div>
              {categories[0]?.category_description}
            </div>
        </div>
        <h2 className='mt-3 md:mt-5 md:mb-10 mb-8'>Showing all {products?.length} results</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {
        products.map(produit=>(
          <div key={produit.product_id}>
             <Produit produit={produit}/>
          </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default Page