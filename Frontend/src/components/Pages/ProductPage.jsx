import React, { useState } from 'react'

const ProductPage = ({product}) => {

    // const [images, setImages] = useState({

    // })
    
    const [activeImg, setActiveImg] = useState(product.image[0])

  return (
    <div className='flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-col gap-6'>
            <div className='w-96 h-96 overflow-hidden rounded-xl'>
            <img src={activeImg} alt="" classNmae='w-full h-full ' />
            </div>
            <div className='flex flex-row justify-between h-24'>
                {/* <img src={product.image[0]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(product.image[0])}/>
                <img src={product.image[1]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(product.image[1])}/>
                <img src={product.image[2]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(product.image[2])}/>
                <img src={product.image[3]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(product.image[3])}/>
                <img src={product.image[4]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(product.image[4])}/> */}

                {product.image.map((i,index) => (
                    <img 
                        key={index}
                        src={i}
                        alt=""
                        className={`w-24 h-24 rounded-md cursor-pointer object-cover transition-all duration-300 ease-in-out ${activeImg === i ? 'border-4 border-blue-500' : ''}`}
                    onClick={() => setActiveImg(i)}
                    />
                ))}
            </div>

        </div>
      
    </div>
  )
}

export default ProductPage
