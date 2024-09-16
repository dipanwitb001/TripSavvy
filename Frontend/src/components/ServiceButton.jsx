import React from 'react';
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ServiceButton = ({product}) => {
  return (
    <div>
      <Link to={`/place/${product._id}`}>
            <button className='bg-orange-400 stroke-white rounded-2xl p-1 border-4 ml-1 mb-1 flex items-center justify-center hover:-translate-y-1 hover:scale-110'><ArrowForwardIosIcon/></button>
      </Link>
      
    </div>
  )
}

export default ServiceButton;
