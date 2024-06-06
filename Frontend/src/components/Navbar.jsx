



import React, { useState, useRef, useEffect } from 'react';
//import Link from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Make sure to import your icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Menubar from './Menubar'; // Adjust the path according to your file structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current) {
        //closeMenu();
        console.log(menuRef.current);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='shadow-md w-full h-32 fixed top-0 left-0 z-10 md:flex items-center justify-between py-2 md:px-10 px-7 bg-gray-900 bg-opacity-50'>
      <div className='flex items-center'>
        <MenuIcon className='stroke-neutral-500 transform transition-transform duration-300 hover:scale-110 hover:stroke-slate-300' onClick={toggleMenu} />
        <h1 className='w-48 h-36 text-4xl p-10 text-white'>
          Trip<span className='text-5xl text-orange-800 italic'>S</span>av<span className='text-5xl text-orange-800 font-bold'>v</span>y
        </h1>
      </div>

      <div className='md:flex md:items-center relative w-3/6'>
        <input type="text" placeholder='Search' className='w-10/12 h-7 border border-orange-300 rounded-xl relative px-px' />
        <SearchIcon className='stroke-yellow-500 relative w-12 ml-2 h-9 hover:stroke-orange-600 hover:bg-orange-200 hover:rounded-full' />
      </div>


      <div className='flex justify-between'>
            <NavLink 
              to="/cart"
              className="stroke-white mr-3 transform transition-transform duration-300 hover:scale-150 hover:stroke-neutral-300" >
              <ShoppingCartIcon />
            </NavLink>
            {/* <ShoppingCartIcon className='stroke-white h-12 transform transition-transform duration-300 hover:scale-150 hover:stroke-neutral-300 relative mr-3 text-8xl' /> */}
            {/* <CircleNotificationsIcon className='stroke-white mr-3 transform transition-transform duration-300 hover:scale-150 hover:stroke-neutral-300' />
            <PersonPinIcon className='stroke-white transform transition-transform duration-300 hover:scale-150 hover:stroke-neutral-300 mr-3' /> */}
            <NavLink 
              to="/notifications"
              className="stroke-white mr-3 transform transition-transform duration-300 hover:scale-150 hover:stroke-neutral-300">
              <CircleNotificationsIcon />
            </NavLink>
          
            <NavLink 
              to="/signin"
              className="stroke-white transform transition-transform duration-300 hover:scale-150 hover:stroke-neutral-300 mr-3">
              <PersonPinIcon />
            </NavLink>
      </div>

      {isMenuOpen && (
        <div ref={menuRef}>
          <Menubar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
















// import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import Logo from '../images/Logo.png'
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// function Navbar() {
//   return (
//     <nav className='top-0 left-0 w-full bg-slate-400'>
//       <div className='px-1 z-10'>
//         <div className='flex  justify-between'>
//           <MenuIcon className='stroke-yellow-500 absolute  top-16 left-10 hover:stroke-orange-500'/>
//           <img src={Logo} alt="error" className=' absolute  top-0 left-16 h-40 w-52' />
//         </div>

//         <div className='flex items-center relative'>
//           <input type="text" placeholder='Search' className=' w-10/12 h-7 border border-orange-300 rounded-xl relative top-10 px-px  '/>
//           <SearchIcon className='stroke-yellow-500 relative top-10 w-12 ml-2 h-9 hover:stroke-orange-500 hover:bg-orange-200 hover:rounded-full' />
//         </div>

//         <div className='flex justify-between w-36 absolute right-12 top-16'>
//           <ShoppingCartIcon className='stroke-yellow-500 hover:stroke-orange-500 '/>
//           <CircleNotificationsIcon className='stroke-yellow-500 hover:stroke-orange-500'/>
//           <PersonPinIcon className='stroke-yellow-500 mr-2 hover:stroke-orange-500'/>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function Navbar() {
//   return (
//     <nav className='top-0 left-0 w-full bg-slate-200'>
//       <div className='px-1 z-10'>
//         <div className='flex  justify-between'>
//           <MenuIcon className='stroke-yellow-500  hover:stroke-orange-500'/>
//           <img src={Logo} alt="error" className='  h-40 w-52' />
//         </div>

//         <div className='flex justify-between'>
//           <input type="text" placeholder='Search' className='  border border-orange-300 rounded-xl   '/>
//           <SearchIcon className='stroke-yellow-500  hover:stroke-orange-500 hover:bg-orange-200 hover:rounded-full' />
//         </div>

//         <div className='flex justify-between '>
//           <ShoppingCartIcon className='stroke-yellow-500 hover:stroke-orange-500 '/>
//           <CircleNotificationsIcon className='stroke-yellow-500 hover:stroke-orange-500'/>
//           <PersonPinIcon className='stroke-yellow-500 mr-2 hover:stroke-orange-500'/>
//         </div>
//       </div>
//     </nav>
//   )
// }

//export default Navbar
