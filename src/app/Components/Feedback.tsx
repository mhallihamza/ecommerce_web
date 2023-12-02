import React from 'react';
import Image from 'next/image'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

// Define the type for a single user
type Feedback = {
  id: number;
  fullname: string;
  image: string;
  comment: string
  rating: number;
};

// Define the type for the component props
type FeedbackProps = {
  feedback: Feedback;
};
// Your React component
const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  return (
    <div className='bg-white p-8'>
      <ul id="events-example" className="my-1 text-yellow-500 flex list-none p-0" data-te-rating-init>
  {[0, 1, 2, 3, 4].map((index) => (
    <li key={index}>
      <span className="text-primary [&>svg]:h-5 [&>svg]:w-5" data-te-rating-icon-ref>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </span>
    </li>
  ))}
</ul>
<p className='pt-3 pb-5 text-[#48515B]'>{feedback.comment}</p>
<div className='flex gap-3'>
    <img className='rounded-full' src={feedback.image}></img>
    <div className='flex font-semibold items-center justify-center'>{feedback.fullname}</div>
</div>
    </div>
  );
};

export default Feedback;
