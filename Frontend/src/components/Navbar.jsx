

import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Menubar from './Menubar'; // Adjust the path as needed
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // const [isdarkMode, setDarkMode] = useState(false);

  return (
    <nav className="shadow-md bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full z-10 ">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-1 dark:bg-slate-800">
       

        <div className="flex flex-row justify-between items-center">

          {isMenuOpen ? 
          (
            <CloseIcon 
            className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
            />
          ) :
          (<MenuIcon
            className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          />)}
          {/* Menu Icon */}
          
        
          {/* Title */}
          <h1
            className="text-xl sm:text-2xl md:text-4xl font-bold text-white ml-4 flex items-center"
            aria-label="TripSavvy Logo"
          >
            Trip
            <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 italic">S</span>av
            <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 font-bold">v</span>y
          </h1>
        </div>


        {/* Search Bar */}
        <div className="hidden md:flex flex-row items-center bg-white border border-orange-300 rounded-full w-4/12 px-3">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-blue-600 outline-none border-none py-1 px-2"
            aria-label="Search"
          />
          <SearchIcon className="text-yellow-500 cursor-pointer" />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-2 md:space-x-6">
          <NavLink to="/cart" aria-label="Cart">
            <ShoppingCartIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
          </NavLink>

          <NavLink to="/" aria-label='location'>
            <LocationOnIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer"/>
          </NavLink>
          <NavLink to="/signin" aria-label="Sign In">
            <PersonPinIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
          </NavLink>
        </div>
      </div>
     

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute  left-0 text-white transition-all duration-300 ease-in-out"
        >
          <Menubar />
        </div>
      )}
    </nav>
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
