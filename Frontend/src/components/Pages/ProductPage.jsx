import React, { useState } from 'react';

const ProductPage = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.image[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-4">
      {/* Images Section */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Main Image */}
        <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src={activeImg}
            alt={`Product image`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4 overflow-x-auto max-w-md">
          {product.image.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setActiveImg(imgSrc)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300
                ${activeImg === imgSrc ? 'border-blue-600 scale-110' : 'border-transparent hover:border-gray-300'}
              `}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={imgSrc}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col justify-between max-w-xl">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{product.name}</h1>
        {product.description && (
          <p className="text-gray-700 mb-6">{product.description}</p>
        )}

        <div className="text-xl font-bold text-green-700 mb-8">${product.price}</div>

        {/* Add to Cart Button */}
        <button
          type="button"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
