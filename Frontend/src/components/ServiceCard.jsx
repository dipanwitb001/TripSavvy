// import React from 'react'

// const ServiceCard = ({image,text,title}) => {
//   return (
//     <>
//     <div className='flex flex-col justify-center'>
//         <div className='bg-white  rounded-lg w-5/12  p-10 ml-12'>
//             <div className=''>
//                 <img className='border rounded-lg' src={image} alt={text} />
//             </div> 
//         </div>
//         <div>
//             <h1>{title}</h1>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default ServiceCard

import React from 'react';
import ServiceButton from './ServiceButton';

const ServiceCard = ({ image, text, title }) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-lg shadow-lg w-80 p-6 m-6 transition-transform transform hover:scale-105'>
      {/* Image Section */}
      <div className='w-full h-56'>
        <img className='w-full h-full object-cover rounded-t-lg' src={image} alt={text} />
      </div>
      
      {/* Title Section */}
      <div className='mt-4 flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-semibold text-gray-800'>{title}</h1>
        <div className='p-1 ml-2'>
          <ServiceButton  />
        </div>
      </div>

      {/* Optional Description */}
      {/* Uncomment the below div to add a description */}
      {/* <div className='mt-2 text-gray-600 text-center'>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default ServiceCard;

