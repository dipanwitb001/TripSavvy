// import React,{useState} from 'react';
// import signIn from '../images/signIn.jpg';
// import { Link } from 'react-router-dom';

// const SignIn = () => {
//   const[loginClicked, setLoginClicked] = useState(false);
//   const[signupClicked, setSignupClicked] = useState(true);


//   return (
//     <div>
//       <div className="relative w-screen h-screen overflow-hidden">
//         <img src={signIn} alt="About" className="absolute top-0 left-0 w-full h-full object-cover" />

//         {/* Dark Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

//         <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-3/12  mx-auto my-auto top-1/2 transform -translate-y-1/2'>
//           <form action="">
//             <h1 className="text-white mb-4 text-2xl font-bold relative left-44">{loginClicked ? 'Login' : 'Sign Up'}</h1>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-white">Your Email</label>
//               <input type="email" id="email" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-white">Password</label>
//               <input type="password" id="password" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
//             </div>
//             <div className="mb-4 flex items-center justify-between">
//               <div>
//                 <input type="checkbox" id="rememberMe" className="mr-2" />
//                 <label htmlFor="rememberMe" className="text-white">Remember Me</label>
//               </div>
//               <span className="text-blue-500 cursor-pointer">Forget Password</span>
//             </div >
//             <div className='flex justify-between'>
//                  <button type='submit'  className={`w-3/6 p-2 mt-4 mr-1 text-white rounded-md 
//                  ${loginClicked? 'bg-gray-500' : 'bg-blue-500'}`} 
//                  onClick={() => {setLoginClicked(true);
//                                 setSignupClicked(false);

//                  }}>Login</button>
//                 <button type=''  className={`w-3/6 p-2 mt-4 mr-1 text-white rounded-md 
//                 ${signupClicked ? 'bg-gray-500' : 'bg-blue-500'}`} 
//                 onClick={() => {setSignupClicked(true);
//                                 setLoginClicked(false);

//                 }}>Sign Up</button>
//             </div>
            
//             {/* <div className="mt-4 text-center">
//               <span className="text-white">New Here? <Link to='/Register' className="text-blue-500">Create an Account</Link></span>
//             </div> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import signIn from '../images/signIn.jpg';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [action, setAction] = useState('Sign Up');
 //const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (action === 'Login') {
      console.log('Logging in...');
      // Handle login logic here
    } else if (action === 'Sign Up') {
      console.log('Signing up...');
      // Handle sign-up logic here
    }
  };

  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={signIn} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-3/12 mx-auto my-auto top-1/2 transform -translate-y-1/2'>
          <form onSubmit={handleSubmit}>
            <h1 className="text-white mb-4 text-2xl font-bold text-center">{action}</h1>
            {action === 'Login' ? <div></div> :
               <div >

                <div className='mb-4'>
               <label htmlFor="name" className="block text-white">Full Name</label>
               <input type="name" id="name" required className="w-full p-2 mt-1 rounded-md bg-gray-200" />
               </div>

              <div className='mb-4'>
               <label htmlFor="name" className="block text-white">User Name</label>
               <input type="name" id="name" required className="w-full p-2 mt-1 rounded-md bg-gray-200" />
               </div>

              <div className='mb-4'>
               <label htmlFor="number" required className="block text-white">Phone no.</label>
               <input
                type="tel"
                id="phone"
                className="w-full p-2 mt-1 rounded-md bg-gray-200"
                placeholder="Enter your phone number"
                required
              />
               </div>

             </div>
            }
           
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Your Email</label>
              <input type="email" id="email" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white">Password</label>
              <input type="password" id="password" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
            </div>
            {action === 'Login'? <div></div>:
              <div >
                <div className="mb-4">
                  <label htmlFor="password" className="block text-white">Confirm Password</label>
                  <input type="password" id="password" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
                </div>
                <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-white">I agree to the <span className='font-bold'>Terms of User</span></label>
              </div>
            </div>
            }
            {action === 'Sign Up'? <div></div> :
              <div className="mb-4 flex items-center justify-between">
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-white">Remember Me</label>
              </div>
              <Link to="/forget-password" className="text-blue-500 cursor-pointer">Forget Password</Link>
            </div>
            }
            
            <div className='flex justify-between'>
              <button
                type='submit'
                className={`w-3/6 p-2 mt-4 mr-1 text-white rounded-md ${action === 'Login' ? 'bg-gray-500' : 'bg-blue-500'}`}
                onClick={() => setAction('Login')}
              >
                Login
              </button>
              <button
                type='submit'
                className={`w-3/6 p-2 mt-4 mr-1 text-white rounded-md ${action === 'Sign Up' ? 'bg-gray-500' : 'bg-blue-500'}`}
                onClick={() => setAction('Sign Up')}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
