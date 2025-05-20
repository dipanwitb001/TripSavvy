

// import React, { useState, useRef, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import Menubar from './Menubar'; // Adjust the path as needed
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import CloseIcon from '@mui/icons-material/Close';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // const [isdarkMode, setDarkMode] = useState(false);

//   return (
//     <nav className="shadow-md bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full z-10 ">
      
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-1 dark:bg-slate-800">
       

//         <div className="flex flex-row justify-between items-center">

//           {isMenuOpen ? 
//           (
//             <CloseIcon 
//             className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
//             />
//           ) :
//           (<MenuIcon
//             className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           />)}
//           {/* Menu Icon */}
          
        
//           {/* Title */}
//           <h1
//             className="text-xl sm:text-2xl md:text-4xl font-bold text-white ml-4 flex items-center"
//             aria-label="TripSavvy Logo"
//           >
//             Trip
//             <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 italic">S</span>av
//             <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 font-bold">v</span>y
//           </h1>
//         </div>


//         {/* Search Bar */}
//         <div className="hidden md:flex flex-row items-center bg-white border border-orange-300 rounded-full w-4/12 px-3">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-grow bg-transparent text-blue-600 outline-none border-none py-1 px-2"
//             aria-label="Search"
//           />
//           <SearchIcon className="text-yellow-500 cursor-pointer" />
//         </div>

//         {/* Navigation Icons */}
//         <div className="flex items-center space-x-2 md:space-x-6">
//           <NavLink to="/cart" aria-label="Cart">
//             <ShoppingCartIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//           </NavLink>

//           <NavLink to="/" aria-label='location'>
//             <LocationOnIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer"/>
//           </NavLink>
//           <NavLink to="/signin" aria-label="Sign In">
//             <PersonPinIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//           </NavLink>
//           {/* {/* <div className='items-center md:space-x-2'>
//           <LightModeIcon className='text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer'/>
//           </div> */}
//           {/* <div className='md:ml-5'>
//             <LightModeIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//           </div>  */}
//         </div>

            
//       </div>
     

//       {/* Dropdown Menu */}
//       {isMenuOpen && (
//         <div
//           ref={menuRef}
//           className="absolute  left-0 text-white transition-all duration-300 ease-in-out"
//         >
//           <Menubar />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useRef, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Menubar from './Menubar'; // Adjust path if needed
// import { useAuthStore } from './Store/authStore';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const loaction = useLocation();

//   const user = useAuthStore((state) => state.user);
//   const logout = useAuthStore((state) => state.logout);

//   console.log('Navbar user:', user);


//   useEffect(() => {
//     // setIsMenuOpen(false);
//     // setIsMobileMenuOpen(false);
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeMenu();
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//   setIsMenuOpen(false);
//   setIsMobileMenuOpen(false);
// }, [location.pathname]);

//  const handleLogout = () => {
//     logout();
//     navigate('/signin');
//   };

//   return (
//     <nav className="shadow-md bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full z-10">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-1 dark:bg-slate-800">

//         {/* Left Section - Menu and Logo */}
//         <div className="flex flex-row justify-between items-center">
//           {isMenuOpen ? (
//             <CloseIcon
//               className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
//             />
//           ) : (
//             <MenuIcon
//               className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
//               onClick={toggleMenu}
//               aria-label="Toggle Menu"
//             />
//           )}

//           {/* Logo */}
//           <h1
//             className="text-xl sm:text-2xl md:text-4xl font-bold text-white ml-4 flex items-center"
//             aria-label="TripSavvy Logo"
//           >
//             Trip
//             <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 italic">S</span>av
//             <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 font-bold">v</span>y
//           </h1>
//         </div>

//         {/* Search Bar - Desktop Only */}
//         <div className="hidden md:flex flex-row items-center bg-white border border-orange-300 rounded-full w-4/12 px-3">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-grow bg-transparent text-blue-600 outline-none border-none py-1 px-2"
//             aria-label="Search"
//           />
//           <SearchIcon className="text-yellow-500 cursor-pointer" />
//         </div>

//         {/* Right Side Icons - Desktop */}
//         <div className="hidden md:flex items-center space-x-2 md:space-x-6">
//           <NavLink to="/cart" aria-label="Cart">
//             <ShoppingCartIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//           </NavLink>
//           <NavLink to="/" aria-label="Location">
//             <LocationOnIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//           </NavLink>
//           {/* <NavLink to="/signin" aria-label="Sign In">
//             <PersonPinIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//           </NavLink> */}
//            {user ? (
//     <div className="flex items-center space-x-2 cursor-pointer" title="Logout">
//       <span className="text-white mr-2">Hi,</span>
//       <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm uppercase">
//         {user.username.charAt(0)}
//       </span>
//     </div>
//   ) : (
//     <NavLink to="/signin" aria-label="Sign In">
//       <PersonPinIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
//     </NavLink>
//   )}
//         </div>

//         {/* Three-dot Icon - Mobile Only */}
//         <div className="md:hidden relative">
//           <MoreVertIcon
//             className="text-white cursor-pointer hover:text-gray-300"
//             onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//             aria-label="Open mobile menu"
//           />

//           {isMobileMenuOpen && (
//             <div
//               ref={mobileMenuRef}
//               className="absolute right-0 mt-2 w-52 bg-gray-800 rounded-md shadow-lg z-20 p-4"
//             >
//               <div className="flex flex-col space-y-4">
//                 <div className="flex items-center border-b border-gray-600 pb-2">
//                   <SearchIcon className="text-yellow-400 mr-2" />
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="bg-transparent text-white outline-none flex-grow"
//                   />
//                 </div>
//                 <NavLink
//                   to="/cart"
//                   className="flex items-center text-white hover:text-orange-400"
//                 >
//                   <ShoppingCartIcon className="mr-2" /> Cart
//                 </NavLink>
//                 <NavLink
//                   to="/"
//                   className="flex items-center text-white hover:text-orange-400"
//                 >
//                   <LocationOnIcon className="mr-2" /> Location
//                 </NavLink>
//                 {/* <NavLink
//                   to="/signin"
//                   className="flex items-center text-white hover:text-orange-400"
//                 >
//                   <PersonPinIcon className="mr-2" /> Profile
//                 </NavLink> */}

//                  {user ? (
//                   <>
//                     <div className="text-white flex items-center">
//                       <span className="mr-2">Hi,</span>
//                       <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm uppercase">
//                         {user.username.charAt(0)}
//                       </span>
//                     </div>
//                     <button
//                       onClick={handleLogout}
//                       className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <NavLink to="/signin" className="text-white hover:text-orange-400 flex items-center">
//                     <PersonPinIcon className="mr-2" /> Profile
//                   </NavLink>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Dropdown Sidebar Menu */}
//       {isMenuOpen && (
//         <div
//           ref={menuRef}
//           className="absolute left-0 text-white transition-all duration-300 ease-in-out"
//         >
//           <Menubar />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;














import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menubar from './Menubar'; // Adjust path if needed
import { useAuthStore } from './Store/authStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="shadow-md bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-1 dark:bg-slate-800">

        {/* Left Section - Menu and Logo */}
        <div className="flex flex-row justify-between items-center">
          {isMenuOpen ? (
            <CloseIcon
              className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Close Menu"
            />
          ) : (
            <MenuIcon
              className="text-4xl text-neutral-300 transform transition-transform duration-300 hover:scale-125 hover:text-slate-200 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            />
          )}

          {/* Logo */}
          <h1
            className="text-xl sm:text-2xl md:text-4xl font-bold text-white ml-4 flex items-center"
            aria-label="TripSavvy Logo"
          >
            Trip
            <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 italic">S</span>av
            <span className="text-2xl sm:text-3xl md:text-5xl text-orange-800 font-bold">v</span>y
          </h1>
        </div>

        {/* Search Bar - Desktop Only */}
        <div className="hidden md:flex flex-row items-center bg-white border border-orange-300 rounded-full w-4/12 px-3">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-blue-600 outline-none border-none py-1 px-2"
            aria-label="Search"
          />
          <SearchIcon className="text-yellow-500 cursor-pointer" />
        </div>

        {/* Right Side Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-6">
          <NavLink to="/cart" aria-label="Cart">
            <ShoppingCartIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
          </NavLink>
          <NavLink to="/" aria-label="Location">
            <LocationOnIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
          </NavLink>
          {user ? (
            <div
              className="flex items-center space-x-2 cursor-pointer relative"
              title="User menu"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              ref={userMenuRef}
            >
              <span className="text-white mr-2">Hi,</span>
              <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm uppercase">
                {user.username.charAt(0)}
              </span>

              {/* Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-gray-800 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-red-600 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/signin" aria-label="Sign In">
              <PersonPinIcon className="text-white transform transition-transform duration-300 hover:scale-150 hover:text-neutral-300 cursor-pointer" />
            </NavLink>
          )}
        </div>

        {/* Three-dot Icon - Mobile Only */}
        <div className="md:hidden relative">
          <MoreVertIcon
            className="text-white cursor-pointer hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          />

          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="absolute right-0 mt-2 w-52 bg-gray-800 rounded-md shadow-lg z-20 p-4"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <SearchIcon className="text-yellow-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-white outline-none flex-grow"
                  />
                </div>
                <NavLink
                  to="/cart"
                  className="flex items-center text-white hover:text-orange-400"
                >
                  <ShoppingCartIcon className="mr-2" /> Cart
                </NavLink>
                <NavLink
                  to="/"
                  className="flex items-center text-white hover:text-orange-400"
                >
                  <LocationOnIcon className="mr-2" /> Location
                </NavLink>

                {user ? (
                  <>
                    <div className="text-white flex items-center">
                      <span className="mr-2">Hi,</span>
                      <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm uppercase">
                        {user.username.charAt(0)}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <NavLink to="/signin" className="text-white hover:text-orange-400 flex items-center">
                    <PersonPinIcon className="mr-2" /> Profile
                  </NavLink>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Sidebar Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 text-white transition-all duration-300 ease-in-out"
        >
          <Menubar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
