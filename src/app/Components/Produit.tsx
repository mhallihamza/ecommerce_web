import React from 'react'
import Link from 'next/link';
// Define the type for a single produit
type Produit =  {
  product_id:number;
  product_name:string;
  product_price:number;
  image_url:string;
  category_name?:string;
  caetgory_id?:number;
}
  
  // Define the type for the component props
  type ProduitProps = {
    produit: Produit;
  };

  export default function Produit({ produit }: ProduitProps): JSX.Element {

  return (
    <Link href={`/product/${produit.product_id}/${produit.product_name.replace(" ","-")}`}>
    <div className='pb-5 mb-10'>
          <img className='h-auto' src={produit.image_url}></img>
          <div className='px-5 pt-3'>
            <ul id="events-example" className="my-1 text-yellow-600 flex list-none p-0" data-te-rating-init>
              {[0, 1, 2, 3, 4].map((index) => (
                <li key={index}>
                  <span className="text-primary [&>svg]:h-5 [&>svg]:w-5" data-te-rating-icon-ref>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
            <h2 className='text-[#27323F] mb-2 text-base'>{produit.product_name}</h2>
            <p className='text-[#48515B] text-sm'>${produit.product_price}</p>
          </div>
        </div>
        </Link>
  )
}

