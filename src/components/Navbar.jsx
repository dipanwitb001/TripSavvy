import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/Logo.png'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <>
      <div justify-between>
        <MenuIcon className='stroke-yellow-500 absolute  top-16 left-10'/>
        <img src={Logo} alt="error" className=' absolute  top-0 left-16 h-40 w-52' />
      </div>

      <div className='flex items-center'>
        <input type="text" placeholder='Search' className=' w-10/12 h-7 border border-orange-300 rounded-xl relative top-10 px-px  '/>
        <SearchIcon className='stroke-yellow-500 relative top-10 w-12 ml-2' />
      </div>

      <div className='flex items-cemter'>
        <ShoppingCartIcon className='stroke-yellow-500 mr-10'/>
        <CircleNotificationsIcon className='stroke-yellow-500'/>
        <PersonPinIcon className='stroke-yellow-500'/>
      </div>
    </>
  )
}

export default Navbar
