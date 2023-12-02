import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

// Define the type for a single user
type Categorie = {
  category_id: number;
  category_name: string;
  category_image: string;
  category_description: string;
  product_count: number;
};

// Define the type for the component props
type CategorieProps = {
  categorie: Categorie;
};

type CategoryMapping = {
  [slug: string]: string;
};

// Your React component
const Categorie: React.FC<CategorieProps> = ({ categorie }) => {
  const categoryMapping: CategoryMapping = {
    'air conditioner': 'air-conditioner',
    'audio & video': 'audio-video',
    'gadgets': 'gadgets',
    'home appliances': 'home-appliances',
    'kitchen appliances': 'kitchen-appliances',
    'pcs & laptop': 'pcs-laptop',
    'refrigerator': 'refrigerator',
    'smart home': 'smart-home',
    
  };
  return (
    <Link href={`/categories/${categoryMapping[categorie.category_name.toLowerCase()]}`}>
    <div className='relative bg-contain bg-center h-56 md:h-72 bg-no-repeat' style={{ backgroundImage: `url(${categorie.category_image})`}}>
      <div className={`absolute w-full text-center  ${poppins.className} bottom-2 md:bottom-4`}>
        <h1 className=''>{categorie.category_name.toUpperCase()}</h1>
        <p className='text-xs px-auto text-[#9CA7AB]'>{categorie.product_count} PRODUCTS</p>
      </div>
    </div>
    </Link>
  );
};

export default Categorie;
