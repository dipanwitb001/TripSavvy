// import React, { useState } from 'react';

// const ProductPage = ({ product }) => {
//   const [activeImg, setActiveImg] = useState(product.image[0]);

//   const price = Number(product.price);
//   const formattedPrice = !isNaN(price) ? `$${price.toFixed(2)}` : 'Price Unavailable';

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
//       {/* Image Section */}
//       <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
//         <div className="w-full h-[24rem] sm:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden shadow-lg">
//           <img
//             src={activeImg}
//             alt="Main product"
//             className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
//           />
//         </div>

//         <div className="flex gap-4 mt-6 overflow-x-auto">
//           {product.image.map((imgSrc, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveImg(imgSrc)}
//               className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
//                 activeImg === imgSrc
//                   ? 'border-blue-600 ring-2 ring-blue-400 scale-105'
//                   : 'border-transparent hover:border-gray-300'
//               }`}
//             >
//               <img
//                 src={imgSrc}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
//             {product.name}
//           </h1>
//           {product.description && (
//             <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
//           )}
//         </div>

//         <div>
//           <div className="text-2xl font-semibold text-green-700 mt-4">
//             {formattedPrice}
//           </div>

//           <button
//             className="mt-6 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
// import React, { useState, useRef } from 'react';
// import StarRating from './StarRating';

// const ProductPage = ({ product }) => {
//   const [activeImg, setActiveImg] = useState(product.image[0]);
//   const thumbnailsRef = useRef([]);

//   const [adultCount, setAdultCount] = useState(1);
//   const [childCount, setChildCount] = useState(0);

//   const price = Number(product.price);
//   const formattedPrice = !isNaN(price) ? `$${price.toFixed(2)}` : 'Price Unavailable';

//   // Keyboard navigation for thumbnails
//   const handleKeyDown = (e, index) => {
//     if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
//       const nextIndex = (index + 1) % product.image.length;
//       setActiveImg(product.image[nextIndex]);
//       thumbnailsRef.current[nextIndex]?.focus();
//     } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
//       const prevIndex = (index - 1 + product.image.length) % product.image.length;
//       setActiveImg(product.image[prevIndex]);
//       thumbnailsRef.current[prevIndex]?.focus();
//     }
//   };

//   // Input handlers with validation
//   const updateAdultCount = (val) => {
//     const num = Math.max(0, Number(val));
//     setAdultCount(num);
//   };

//   const updateChildCount = (val) => {
//     const num = Math.max(0, Number(val));
//     setChildCount(num);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 text-gray-100 bg-slate-900 rounded-md">
//       {/* Title */}
//       <h1 className="text-4xl font-bold mb-8 text-center md:text-left">{product.name}</h1>

//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left column: Vertical thumbnails */}
//         <div className="flex flex-col gap-4 md:w-24 overflow-y-auto max-h-[480px]">
//           {product.image.map((imgSrc, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveImg(imgSrc)}
//               className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
//                 activeImg === imgSrc
//                   ? 'border-blue-600 ring-2 ring-blue-400 scale-110'
//                   : 'border-transparent hover:border-gray-400'
//               }`}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               ref={(el) => (thumbnailsRef.current[index] = el)}
//               aria-label={`View image ${index + 1}`}
//               aria-pressed={activeImg === imgSrc}
//               tabIndex={0}
//               type="button"
//             >
//               <img
//                 src={imgSrc}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Middle column: Main image bigger */}
//         <div className="flex-grow max-w-lg h-[36rem] rounded-xl overflow-hidden shadow-lg">
//           <img
//             src={activeImg}
//             alt="Main product"
//             className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
//             loading="lazy"
//           />
//         </div>

//         {/* Right column: Product details */}
//         <div className="flex flex-col flex-grow max-w-lg justify-between space-y-6">
//           <div>
//             {/* Duration */}
//             {product.duration && (
//               <p className="text-lg font-medium text-gray-300 mb-2">
//                 Duration: <span className="text-green-400">{product.duration}</span>
//               </p>
//             )}

//             {/* Description */}
//             {product.description && (
//               <p className="text-gray-400 mb-4 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt eligendi odio possimus beatae reiciendis, fugiat officia? Aliquid suscipit quaerat veniam consectetur blanditiis fugit dolores?</p>
//             )}
//           </div>

//           <div>
//             {/* Price */}
//             <p className="text-3xl font-semibold text-green-500 mb-4">{formattedPrice}</p>

//             {/* Rating */}
//             {product.rating && (
//               <>
//                 <StarRating rating={product.rating} />
//                 <p className="mt-1 text-sm text-gray-400">Rating: {product.rating.toFixed(1)} / 5</p>
//               </>
//             )}

//             {/* Guests selection */}
//             <div className="mt-6 bg-gray-800 rounded-lg p-4 text-gray-300">
//               <h3 className="text-xl font-semibold mb-4">Select Guests</h3>

//               <div className="flex flex-col gap-4 max-w-xs">
//                 <label className="flex justify-between items-center">
//                   <span>Adults</span>
//                   <input
//                     type="number"
//                     min={0}
//                     value={adultCount}
//                     onChange={(e) => updateAdultCount(e.target.value)}
//                     className="w-16 text-center rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     aria-label="Number of adults"
//                   />
//                 </label>

//                 <label className="flex justify-between items-center">
//                   <span>Children</span>
//                   <input
//                     type="number"
//                     min={0}
//                     value={childCount}
//                     onChange={(e) => updateChildCount(e.target.value)}
//                     className="w-16 text-center rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     aria-label="Number of children"
//                   />
//                 </label>

//                 <p className="mt-2 font-medium">
//                   Total Persons: <span className="text-blue-400">{adultCount + childCount}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
//               type="button"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <section className="mt-16 max-w-3xl mx-auto px-4">
//         <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
//         <div className="space-y-6">
//           <div className="p-4 bg-gray-800 rounded-lg shadow">
//             <p className="text-gray-300 italic">"Amazing product, high quality, will buy again!"</p>
//             <p className="mt-2 text-sm text-gray-400">- Alice</p>
//           </div>
//           <div className="p-4 bg-gray-800 rounded-lg shadow">
//             <p className="text-gray-300 italic">"Good value for the price."</p>
//             <p className="mt-2 text-sm text-gray-400">- Bob</p>
//           </div>
//           <div className="p-4 bg-gray-800 rounded-lg shadow">
//             <p className="text-gray-300 italic">"Fast shipping and excellent customer service."</p>
//             <p className="mt-2 text-sm text-gray-400">- Charlie</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState, useRef } from 'react';
import StarRating from './StarRating';

const ProductPage = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.image[0]);
  const thumbnailsRef = useRef([]);

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const price = Number(product.price);
  const formattedPrice = !isNaN(price) ? `$${price.toFixed(2)}` : 'Price Unavailable';

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextIndex = (index + 1) % product.image.length;
      setActiveImg(product.image[nextIndex]);
      thumbnailsRef.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevIndex = (index - 1 + product.image.length) % product.image.length;
      setActiveImg(product.image[prevIndex]);
      thumbnailsRef.current[prevIndex]?.focus();
    }
  };

  const updateAdultCount = (val) => {
    const num = Math.max(0, Number(val));
    setAdultCount(num);
  };

  const updateChildCount = (val) => {
    const num = Math.max(0, Number(val));
    setChildCount(num);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-100 bg-slate-900 rounded-md">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">{product.name}</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Thumbnails */}
        <div className="hidden md:flex flex-col gap-4 md:w-24 overflow-y-auto max-h-[480px]">
          {product.image.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setActiveImg(imgSrc)}
              className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                activeImg === imgSrc
                  ? 'border-blue-600 ring-2 ring-blue-400 scale-110'
                  : 'border-transparent hover:border-gray-400'
              }`}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (thumbnailsRef.current[index] = el)}
              aria-label={`View image ${index + 1}`}
              aria-pressed={activeImg === imgSrc}
              tabIndex={0}
              type="button"
            >
              <img
                src={imgSrc}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-grow max-w-lg h-[24rem] sm:h-[30rem] md:h-[36rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={activeImg}
            alt="Main product"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow max-w-lg justify-between space-y-6">
          <div>
            {product.duration && (
              <p className="text-lg font-medium text-gray-300 mb-2">
                Duration: <span className="text-green-400">{product.duration}</span>
              </p>
            )}

            {product.description && (
              <p className="text-gray-400 mb-4 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-green-500 mb-4">{formattedPrice}</p>

            {product.rating !== undefined && product.rating !== null && (
              <>
                <StarRating rating={product.rating} />
                <p className="mt-1 text-sm text-gray-400">Rating: {Number(product.rating).toFixed(1)} / 5</p>
              </>
            )}

            <div className="mt-6 bg-gray-800 rounded-lg p-4 text-gray-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Select Guests</h3>

              <div className="flex flex-col gap-4 max-w-xs">
                <label className="flex justify-between items-center">
                  <span>Adults</span>
                  <input
                    type="number"
                    min={0}
                    value={adultCount}
                    onChange={(e) => updateAdultCount(e.target.value)}
                    className="w-16 text-center rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Number of adults"
                  />
                </label>

                <label className="flex justify-between items-center">
                  <span>Children</span>
                  <input
                    type="number"
                    min={0}
                    value={childCount}
                    onChange={(e) => updateChildCount(e.target.value)}
                    className="w-16 text-center rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Number of children"
                  />
                </label>

                <p className="mt-2 font-medium">
                  Total Persons: <span className="text-blue-400">{adultCount + childCount}</span>
                </p>
              </div>
            </div>

            <button
              className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16 max-w-3xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow">
            <p className="text-gray-300 italic">"Amazing product, high quality, will buy again!"</p>
            <p className="mt-2 text-sm text-gray-400">- Alice</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow">
            <p className="text-gray-300 italic">"Good value for the price."</p>
            <p className="mt-2 text-sm text-gray-400">- Bob</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow">
            <p className="text-gray-300 italic">"Fast shipping and excellent customer service."</p>
            <p className="mt-2 text-sm text-gray-400">- Charlie</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
