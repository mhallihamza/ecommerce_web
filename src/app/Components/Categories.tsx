"use client"
import useFetch from '@/hooks/useFetch';
import Categorie from './Categorie';
import Spinner from './Spinner';

type CategoriesType = {
  category_id: number;
  category_name: string;
  category_image: string;
  category_description: string;
  product_count: number;
};

function Categories() {
  const {data,error,refetch} = useFetch('/api/categories');
  let categories:CategoriesType[] | undefined = data;
  return (
    <div className='bg-white border pb-12 md:pb-0 border-gray-300 grid grid-cols-2 md:grid-cols-3 mb-10 md:mb-16 lg:grid-cols-4 gap-4'>
      {categories ? categories.map((category) => (
        <div key={category.category_id}>
          <Categorie categorie={category} />
        </div>
      )) : <div className='h-48 flex lg:col-span-4 justify-center items-center'>
            <Spinner/>
           </div>}
    </div>
  );
}

export default Categories;