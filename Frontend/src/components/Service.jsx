// import React,{useEffect} from 'react'
// import service from '../images/service.jpg';
// import ServiceCard from './ServiceCard';
// import trek from '../images/trek.jpg'
// import { ProductProvider } from './Store/ProductProvider';


// const Service = () => {


//   const {fetchProducts, products} = ProductProvider();
//   useEffect(() => {
//     fetchProducts();
//   },[fetchProducts])
//   return (
//     <div>
//        <div className="relative w-screen min-h-screen overflow-hidden">
//       {/* Background Image */}
//            <img src={service} alt="About" className="absolute top-0 left-0 w-full h-full object-cover" />

//           {/* Overlay */}
//           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

//           <div className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-20">
//               <h1 className="text-5xl text-white font-serif text-center relative italic mt-12">
//               Plan your memories with <span className='text-yellow-400 font-extrabold'>Us</span>
//               <span className="block h-1 w-3/4 bg-white mt-2 mx-auto"></span>
//               </h1>
//               <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-9/12 mt-8 mb-12">
//               <div className='flex flex-row justify-between items-center'>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {products.map((product) => (
//                   <ServiceCard key={product._id} product={product}/>
//                 ))}
//               </div>
//               {/* <ServiceCard image={trek} text="trek" title="Trekking"/>
//               <ServiceCard image={trek} text="trek" title="Trekking"/>
//               <ServiceCard image={trek} text="trek" title="Trekking"/>
//               </div>
              
//               <div className='flex flex-row justify-between items-center'>
//               <ServiceCard image={trek} text="trek" title="Trekking"/>
//               <ServiceCard image={trek} text="trek" title="Trekking"/>
//               <ServiceCard image={trek} text="trek" title="Trekking"/> */}
//               </div>
              
//               </div>
//           </div>
         
//       </div>
//     </div>
//   )
// }

// export default Service
import React, { useEffect } from 'react';
import service from '../images/service.jpg';
import ServiceCard from './ServiceCard';
import { ProductProvider } from './Store/ProductProvider';

const Service = () => {
  const { fetchProducts, products } = ProductProvider();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={service}
          alt="About"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 px-4 sm:px-8 lg:px-16 pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-serif text-center relative italic mt-12 max-w-4xl">
            Plan your memories with{' '}
            <span className="text-yellow-400 font-extrabold">Us</span>
            <span className="block h-1 w-3/4 bg-white mt-2 mx-auto"></span>
          </h1>

          <div className="bg-slate-800 border border-slate-400 rounded-md p-6 sm:p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-full max-w-7xl mt-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
              {products.map((product) => (
                <ServiceCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
