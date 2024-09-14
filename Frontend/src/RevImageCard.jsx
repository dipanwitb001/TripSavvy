import React from 'react'
import Button from './components/Button'


const RevImageCard = ({text,image,title,para,highlight}) => {
  const parts = para.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
       <div className='flex justify-center items-center p-8'>
      {/* Image Section */}
      {/* <div className='flex-shrink-0 w-3/6 p-4'>
        <div className='border-8 p-2 rounded-2xl border-neutral-500'>
          <img src={image} alt={text} className='w-3/6' />
        </div>
      </div> */}
      <div className='flex flex-col justify-center w-1/2 p-10 ml-9'>
        <h1 className='text-5xl text-orange-200 font-serif font-bold p-4 tracking-normal'>
          {title}
        </h1>
        <p className='text-lg leading-relaxed text-white mt-4' style={{ maxWidth: '40ch' }}>
          {/* {para} <span className='text-yellow-700 font-extrabold'>{highlight}</span> */}
          {parts.map((part, index) => 
            part === highlight ? 
              <span key={index} className='text-orange-300 font-bold'>{part}</span> : 
              part
          )}
        </p>
        <Button />
      </div>
      <div className='w-5/12 p-12 ml-10'>
            <div className='border-8 p-2 rounded-2xl border-neutral-500'>
                <img src={image} alt={text} />
            </div>
           
        </div>

      {/* Text Section */}
    </div>
    </>
  )
}

export default RevImageCard
