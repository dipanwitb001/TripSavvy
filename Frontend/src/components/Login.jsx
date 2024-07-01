
import React from 'react';
import taj from '../images/taj.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      {/* <h1>this is login page</h1> */}
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={taj} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-3/12 mx-auto my-auto top-1/2 transform -translate-y-1/2'>
           <form >
             <h1 className="text-white mb-4 text-2xl font-bold text-center">LOG IN</h1>         
             <div className="mb-4">
               <label htmlFor="email" className="block text-white">Your Email</label>
               <input type="email" id="email" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
             </div>
             <div className="mb-4">
               <label htmlFor="password" className="block text-white">Password</label>
               <input type="password" id="password" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
             </div>                   
               <div className="mb-4 flex items-center justify-between">
               <div>
                 <input type="checkbox" id="rememberMe" className="mr-2" />
                 <label htmlFor="rememberMe" className="text-white">Remember Me</label>
               </div>
               <Link to="/forget-password" className="text-blue-500 cursor-pointer">Forget Password</Link>
             </div>                    
             <div className='flex justify-between'>
               <button
                 type='submit'
                 className="w-3/6 p-2 mt-4 mr-1 text-white rounded-md  bg-blue-500"
                 // onClick={() => setAction('Login')}              
               >
                 Login
               </button>
               <Link to="/SignIn">
               <button
                 type='submit'
                 className="w-4/6 p-2 mt-4 mr-1 text-white rounded-md bg-blue-500"
                 //onClick={() => setAction('Sign Up')}
               >
                 Sign Up
               </button>
                </Link>
             </div>
           </form>
         </div>
        </div>
    </div>
  )
}

export default Login

