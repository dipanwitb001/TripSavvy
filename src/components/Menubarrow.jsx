import React from 'react';
import { NavLink } from 'react-router-dom';



function Menurow({Icon, title, text}) {
  return (
    <div className='flex items-center py-3 px-4 '>
      <NavLink
        to={`/${text}`}
        className='flex items-center text-neutral-400 transform transition-transform duration-300 hover:scale-125 hover:text-white'>
        <Icon className=' text-2xl' />
        <h1 className='flex-1 ml-4 font-xl  font-bold leading-loose tracking-widest '>{title}</h1>
      </NavLink>
      
    </div>
  )
}

export default Menurow
