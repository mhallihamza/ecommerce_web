import Image from 'next/image'
import { Poppins } from 'next/font/google';
import Categories from './Components/Categories';
import Banner from './Components/Banner';
import Features from './Components/Features';
import Products from './Components/Products'
import Carousel from './Components/Carousel';
import Feedback from './Components/Feedback';
import Contact from './Components/Contact';
import Subscribe from './Components/Subscribe';
const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});
export default async function Home() {

  type Feedback = {
    id: number,
    fullname: string,
    image: string,
    comment: string,
    rating:number
  }

  const feedbacks : Feedback[] = [
    {
      id:0,
      fullname:"Rafael Stokes",
      image:"https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-3.jpg",
      comment:"Dolores porro laboriosam molestias est quo. Et et eos. Ab error modi labore sed eaque est. Quaerat aut est fugiat.",
      rating:5
    },
    {
      id:1,
      fullname:"Chelsea Turner",
      image:"https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-1.jpg",
      comment:"Dolorem et cumque consequuntur consequuntur cumque eligendi voluptate. Tempore accusamus tempore consectetur dolor aliquid.",
      rating:5
    },
    {
      id:2,
      fullname:"Jacqueline Mueller",
      image:"https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-6.jpg",
      comment:"Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo vel amet expedita eius facere minima. Dolor et saepe consequuntur.",
      rating:5
    },
    {
      id:3,
      fullname:"Olive Borer",
      image:"https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-2.jpg",
      comment:"Itaque dicta rerum aliquam sit corporis iste omnis. Officia veritatis vel labore et dolor iste velit distinctio.",
      rating:5
    },
    {
      id:4,
      fullname:"Priscilla Jacobson",
      image:"https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-5.jpg",
      comment:"In saepe veniam. Rerum excepturi dolor voluptatibus asperiores ad ut. Veniam molestiae tenetur velit voluptatum.",
      rating:5
    },
    {
      id:5,
      fullname:"Joseph Reinger",
      image:"https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-4.jpg",
      comment:"Saepe doloribus deserunt in. At beatae neque pariatur harum vel. ",
      rating:5
    }
  ]
  return (
    <main className='bg-slate-100'>
    <Banner/>
     <div className='mx-4 md:mx-6 lg:mx-10 xl:mx-12'>
    <Features/>
    <>
      <Categories/>
    </>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-16'>
      <img className='w-full' src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-2.jpg'></img>
      <img className='w-full' src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-1.jpg'></img>
    </div>
    <div className='mb-10'>
    <Products name="Audio & Video"/>
    </div>
    <div className='mb-10'>
    <Products name="Home Appliances"/>
    </div>
    <div>
    <Products name="Air Conditioner"/>
    </div>
    <div className='my-10 md:my-16'>
    <img src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-fwidth-1.jpg'></img>
    </div>
    <div className='mb-10'>
      <Products name='Kitchen Appliances'/>
    </div>
    <div>
      <Products name='Refrigerator'/>
    </div>
    <div className='my-10 md:my-16'>
       <img src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-fwidth-2.jpg'></img>
    </div>
    <div className='mb-10'>
      <Products name='Pcs & Laptop'/>
    </div>
    <div>
      <Products name='Gadgets'/>
    </div>
    <div className='grid my-20 md:grid-cols-2 grid-cols-1'>
      <div className={`bg-white md:px-10 md:py-12 px-5 py-6 ${poppins.className}`}>
        <h4 className="text-[#9CA7AB] text-sm">BRAND&#39;S DEAL</h4>
        <h2 className='text-3xl text-[#27323F] my-6'>Save up to $200 on select Samsung washing machine</h2>
        <p className='text-[#48515B] text-base'>Tortor purus et quis aenean tempus tellus fames.</p>
        <button className='text-[#0573F0] mt-6'>Shop now</button>
      </div>
      <img className='w-[100%] h-[100%]' src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-hwidth-1.jpg'></img>
    </div>
    <div>
    <h2 className={`text-[#27323F] ${poppins.className} text-2xl`}>Top Brands</h2>
    <Carousel/>
    </div>
    <div className='mt-10 mb-64 md:mb-32'>
      <h2 className={`text-[#27323F] ${poppins.className} text-2xl pb-3`}>What every one saying?</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
          feedbacks.map(feedback => (
            <Feedback key={feedback.id} feedback={feedback} />
          ))
        }
      </div>
    </div>
    <Contact/>
    </div>
    <Subscribe/>
    </main>
  )
}
