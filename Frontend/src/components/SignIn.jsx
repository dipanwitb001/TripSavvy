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




 // return (
  //   <div>
  //     <div className="relative w-screen h-screen overflow-hidden">
  //       <img src={signIn} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />

  //       {/* Dark Overlay */}
  //       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  //       <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-3/12 mx-auto my-auto top-1/2 transform -translate-y-1/2'>
  //         <form onSubmit={handleSubmit}>
  //           <h1 className="text-white mb-4 text-2xl font-bold text-center">{action}</h1>
  //            {action === 'Login' ? <div></div> : 
  //              <div >

  //               <div className='mb-4'>
  //              <label htmlFor="name" className="block text-white">Full Name</label>
  //              <input 
  //              type="name" 
  //              id="name" 
  //              name='fullName' 
  //              required 
  //              className="w-full p-2 mt-1 rounded-md bg-gray-200" />
  //              </div>

  //             <div className='mb-4'>
  //              <label htmlFor="name" className="block text-white">User Name</label>
  //              <input type="name" id="name" required className="w-full p-2 mt-1 rounded-md bg-gray-200" />
  //              </div>

  //             <div className='mb-4'>
  //              <label htmlFor="number" required className="block text-white">Phone no.</label>
  //              <input
  //               type="tel"
  //               id="phone"
  //               className="w-full p-2 mt-1 rounded-md bg-gray-200"
  //               placeholder="Enter your phone number"
  //               required
  //             />
  //              </div>

  //            </div>
  //           }
           
  //           <div className="mb-4">
  //             <label htmlFor="email" className="block text-white">Your Email</label>
  //             <input type="email" id="email" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
  //           </div>
  //           <div className="mb-4">
  //             <label htmlFor="password" className="block text-white">Password</label>
  //             <input type="password" id="password" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
  //           </div>
  //           {action === 'Login'? <div></div>:
  //             <div >
  //               <div className="mb-4">
  //                 <label htmlFor="password" className="block text-white">Confirm Password</label>
  //                 <input type="password" id="password" className="w-full p-2 mt-1 rounded-md bg-gray-200" />
  //               </div>
  //               <div>
  //               <input type="checkbox" id="rememberMe" className="mr-2" />
  //               <label htmlFor="rememberMe" className="text-white">I agree to the <span className='font-bold'>Terms of User</span></label>
  //             </div>
  //           </div>
  //           }
  //           {action === 'Sign Up'? <div></div> :
  //             <div className="mb-4 flex items-center justify-between">
  //             <div>
  //               <input type="checkbox" id="rememberMe" className="mr-2" />
  //               <label htmlFor="rememberMe" className="text-white">Remember Me</label>
  //             </div>
  //             <Link to="/forget-password" className="text-blue-500 cursor-pointer">Forget Password</Link>
  //           </div>
  //           }
            
  //           <div className='flex justify-between'>
  //             <button
  //               type='submit'
  //               className={`w-3/6 p-2 mt-4 mr-1 text-white rounded-md ${action === 'Login' ? 'bg-gray-500' : 'bg-blue-500'}`}
  //               onClick={() => setAction('Login')}
                
  //             >
  //               Login
  //             </button>
  //             <button
  //               type='submit'
  //               className={`w-3/6 p-2 mt-4 mr-1 text-white rounded-md ${action === 'Sign Up' ? 'bg-gray-500' : 'bg-blue-500'}`}
  //               onClick={() => setAction('Sign Up')}
  //             >
  //               Sign Up
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );






import React, { useState } from 'react';
import signIn from '../images/signIn.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation';

const SignIn = () => {
  //const [action, setAction] = useState('Sign Up');
 //const [phoneNumber, setPhoneNumber] = useState('');

 const [values,setValues] = useState({
  fullName: '',
  username: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  })

  const [errors, setErrors] = useState({});
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);


  const[isAccountCreated, setAccountCreated] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

const handleInput = (event) => {
  const{name,value,type,checked} = event.target;
  if(type === 'checkbox')
    {
      setCheckboxChecked(checked);
    }
    else{
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  // setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  //setErrors(Validation(values));

  const validationErrors = Validation(values);
    // if (!isCheckboxChecked) {
    //   validationErrors.checkbox = "You must agree to the Terms of Use";
    // }
    
    setErrors(validationErrors);
    // !errors.fullName && !errors.username && !errors.phoneNumber && !errors.email && !errors.password && !errors.confirmPassword
    // !Object.keys(validationErrors).length
  if (!errors.fullName && !errors.username && !errors.phoneNumber && !errors.email && !errors.password && !errors.confirmPassword && !errors.checkbox) {
    axios
      .post('https://tripsavvy-backend.onrender.com/api/v1/users/register', values)
      .then((res) => {
        console.log(res);
        setAccountCreated(true);
        setSuccessMessage('Account created successfully'); //display success message

        // reseting the form fields
        setValues({
          fullName: '',
          username: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } )
      .catch((err) => {
        console.log(err);
        setAccountCreated(false);
      });
  }
};









 











  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={signIn} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-3/12 mx-auto my-auto top-1/2 transform -translate-y-1/2'>

         {/* Display Success Message */}
            { isAccountCreated && (
              <div>
              <div className="mb-4 p-2  text-green-400 rounded-md">
                {successMessage}
              </div>
              <Link to="/Login">
              <button
                type='button'
                className="w-1 p-2 mt-4 mr-1 text-white rounded-md bg-blue-500"
                //onClick={() => setAction('Login')}
                
              >
                Login
              </button>
              </Link>
              </div>
            )}
          {!isAccountCreated && (

              
          <form onSubmit={handleSubmit}>
            <h1 className="text-white mb-4 text-2xl font-bold text-center">Sign Up</h1> 


           


               <div >

                <div className='mb-4'>
               <label htmlFor="name" className="block text-white">Full Name</label>
               <input 
               type="text" 
               id="fullname" 
               name='fullName' 
               value={values.fullName}
               required 
               onChange={handleInput}
               className="w-full p-2 mt-1 rounded-md bg-gray-200" />
               {errors.fullName && <span className='text-red-700'>{errors.fullName}</span>}
               </div>

              <div className='mb-4'>
               <label htmlFor="name" className="block text-white">User Name</label>
               <input 
               type="name" 
               id="username" 
               name='username'
               value={values.username}
               onChange={handleInput}
               required 
               className="w-full p-2 mt-1 rounded-md bg-gray-200" />
               {errors.username && <span className='text-red-700'>{errors.username}</span>}
               </div>

              <div className='mb-4'>
               <label htmlFor="number" required className="block text-white">Phone no.</label>
               <input
                type="number"
                id="phone"
                name='phoneNumber'
                onChange={handleInput}
                value={values.phoneNumber}
                className="w-full p-2 mt-1 rounded-md bg-gray-200"
                placeholder="Enter your phone number"
                required
              />
              {errors.phoneNumber && <span className='text-red-700'>{errors.phoneNumber}</span>}
               </div>

             </div>
            
           
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Your Email</label>
              <input 
              type="email" 
              id="email"
              name='email'
              onChange={handleInput}
              value={values.email}
              required
              className="w-full p-2 mt-1 rounded-md bg-gray-200" />
              {errors.email && <span className='text-red-700'>{errors.email}</span>}
            </div>

            
            <div className="mb-4">
              <label htmlFor="password" className="block text-white">Password</label>
              <input 
              type="password" 
              id="password" 
              name='password'
              onChange={handleInput}
              value={values.password}
              className="w-full p-2 mt-1 rounded-md bg-gray-200" />
              {errors.password && <span className='text-red-700'>{errors.password}</span>}
            </div>
            
              <div >
                <div className="mb-4">
                  <label htmlFor="password" className="block text-white">Confirm Password</label>
                  <input 
                  type="password" 
                  id="confirmPassword"
                  onChange={handleInput}
                  value={values.confirmPassword}
                  name='confirmPassword'
                  className="w-full p-2 mt-1 rounded-md bg-gray-200" />
                  {errors.confirmPassword && <span className='text-red-700'>{errors.confirmPassword}</span>}
                </div>

                <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-white">I agree to the <span className='font-bold'>Terms of User</span></label>
                {errors.checkbox && <span className='text-red-700'>{errors.checkbox}</span>}
                </div>
            </div>
            
            

            
            <div className='flex justify-between'>
              <Link to="/Login">
              <button
                type='button'
                className="w-1 p-2 mt-4 mr-1 text-white rounded-md bg-blue-500"
                //onClick={() => setAction('Login')}
                
              >
                Login
              </button>
              </Link>
              <button
                type='submit'
                className="w-3/6 p-2 mt-4 mr-1 text-white rounded-md bg-blue-500"
                //onClick={() => setAction('Sign Up')}
              >
                Sign Up
              </button>
            </div>
          </form>
           ) }
        </div>
      </div>
    </div>
  );
};

export default SignIn;
