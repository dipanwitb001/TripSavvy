// 
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductPage from './ProductPage';
// import { ProductProvider } from '../Store/ProductProvider'; // ✅ Zustand store

// const Place = () => {
//   const { productId } = useParams();
//   const { products, fetchProducts } = ProductProvider(); // ✅ Zustand hook

//   useEffect(() => {
//     if (products.length === 0) {
//       fetchProducts(); // fetch only if not already fetched
//     }
//   }, [fetchProducts, products]);

//   const product = products.find((p) => p._id === productId);

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-gray-600 text-xl">Loading product details...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-gray-50">
//       <ProductPage product={product} />
//     </div>
//   );
// };

// export default Place;

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductPage from './ProductPage';
// import { ProductProvider } from '../Store/ProductProvider';

// const Place = () => {
//   const { productId } = useParams();
//   const { products, fetchProducts } = ProductProvider();

//   useEffect(() => {
//     if (products.length === 0) {
//       fetchProducts();
//     }
//   }, [fetchProducts, products]);

//   const product = products.find((p) => p._id === productId);

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen ">
//         <p className="text-gray-600 text-xl">Loading product details...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-900 pt-24 px-4 sm:px-6 lg:px-12">
//       {/* pt-24 pushes content below navbar (adjust if your navbar is taller/shorter) */}
//       <div className="max-w-7xl mx-auto">
//         <ProductPage product={product} />
//       </div>
//     </div>
//   );
// };

// export default Place;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import { ProductProvider } from '../Store/ProductProvider';

const Place = () => {
  const { productId } = useParams();
  const { products, fetchProducts, isLoading } = ProductProvider();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products]);

  const product = products.find((p) => p._id === productId);

  if (isLoading && products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-xl">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-700 pt-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <ProductPage product={product} />
      </div>
    </div>
  );
};

export default Place;
