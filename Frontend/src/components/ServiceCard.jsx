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

// import React from 'react';
// import {Link} from 'react-router-dom'
// import ServiceButton from './ServiceButton';

// const ServiceCard = ({product}) => {

//   const displayImage = product.image[0];
//   return (
//     <div className='flex flex-col items-center bg-white rounded-lg shadow-lg w-80 p-6 m-6 transition-transform transform hover:scale-105'>
//       {/* Image Section */}
//       <div className='w-full h-56'>
//         <img className='w-full h-full object-cover rounded-t-lg' src={displayImage} alt={product.name} />
//       </div>
      
//       {/* Title Section */}
//       <div className='mt-4 flex flex-row justify-between items-center'>
//         <h1 className='text-2xl font-semibold text-gray-800'>{product.name}</h1>
//         <div className='p-1 ml-2'>
//          {/* <Link to={`${product.name}`}> */}
//             <ServiceButton key={product._id} product={product} />
//           {/* </Link> */}
          
//         </div>
//       </div>

//       {/* Optional Description */}
//       {/* Uncomment the below div to add a description */}
//       {/* <div className='mt-2 text-gray-600 text-center'>
//         <p>{description}</p>
//       </div> */}
//     </div>
//   );
// }

// export default ServiceCard;

import React from 'react';
import ServiceButton from './ServiceButton';

const ServiceCard = ({ product }) => {
  const displayImage = product.image[0];

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-full max-w-sm p-4 sm:p-6 m-4 sm:m-6 transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-48 sm:h-56">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={displayImage}
          alt={product.name}
        />
      </div>

      {/* Title Section */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center sm:text-left">
          {product.name}
        </h1>
        <div className="mt-3 sm:mt-0 p-1 ml-0 sm:ml-2">
          <ServiceButton key={product._id} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
