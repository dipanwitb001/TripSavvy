import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductProvider } from '../Store/ProductProvider.js';
import ProductPage from './ProductPage.jsx';

const Place = () => {

    const { productId} = useParams();
    const { products} = ProductProvider();

    const product = products.find((p) => p._id === productId);

    if(!product) {
         
        return <p>Loading ...</p>
    }



  return (
    <>
       <div className="relative w-screen min-h-screen overflow-hidden">
            <div className="flex flex-wrap justify-center">
            {/* {product.image.map((i, index) => (
          <img key={index} src={i} alt={`${product.name} - image ${index + 1}`} className="w-80 h-64 object-cover m-4" />
        ))} */}
        <ProductPage product={product}/>
            </div>
       <div className='flex flex-col rounded-lg shadow-lg'>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h2>{product.duration}</h2>
       </div>
       </div>
    </>
  )
}

export default Place;
