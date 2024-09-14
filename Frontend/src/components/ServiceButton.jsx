import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ServiceButton = () => {
  return (
    <div>
      <button className='bg-orange-400 stroke-white rounded-2xl p-1 border-4 ml-1 mb-1 flex items-center justify-center hover:-translate-y-1 hover:scale-110'><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default ServiceButton;
