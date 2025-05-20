
// import React, { useState } from 'react';
// import signIn from '../images/signIn.jpg';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Validation from './LoginValidation';

// const SignIn = () => {
//   const [values, setValues] = useState({
//     fullName: '',
//     username: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isCheckboxChecked, setCheckboxChecked] = useState(false);
//   const [isAccountCreated, setAccountCreated] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleInput = (event) => {
//     const { name, value, type, checked } = event.target;
//     if (type === 'checkbox') {
//       setCheckboxChecked(checked);
//     } else {
//       setValues((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = Validation(values);
//     setErrors(validationErrors);

//     if (
//       !validationErrors.fullName &&
//       !validationErrors.username &&
//       !validationErrors.phoneNumber &&
//       !validationErrors.email &&
//       !validationErrors.password &&
//       !validationErrors.confirmPassword &&
//       isCheckboxChecked
//     ) {
//       axios
//         .post('https://tripsavvy-backend.onrender.com/api/v1/users/register', values)
//         .then((res) => {
//           console.log(res);
//           setAccountCreated(true);
//           setSuccessMessage('Account created successfully');
//           setValues({
//             fullName: '',
//             username: '',
//             phoneNumber: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           setAccountCreated(false);
//         });
//     } else if (!isCheckboxChecked) {
//       setErrors((prev) => ({
//         ...prev,
//         checkbox: 'You must agree to the Terms of Use',
//       }));
//     }
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <img
//         src={signIn}
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

//       <div className="relative z-10 flex justify-center items-center w-full h-full p-4">
//         <div className="bg-slate-800 border border-slate-400 rounded-lg p-6 sm:p-8 shadow-xl backdrop-filter backdrop-blur-md bg-opacity-60 w-full max-w-md overflow-y-auto max-h-[90vh]">
//           {isAccountCreated ? (
//             <div>
//               <div className="mb-4 p-2 text-green-400 rounded-md text-center">
//                 {successMessage}
//               </div>
//               <Link to="/Login">
//                 <button
//                   type="button"
//                   className="w-full px-4 py-2 mt-4 text-white rounded-md bg-blue-600 hover:bg-blue-700"
//                 >
//                   Login
//                 </button>
//               </Link>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <h1 className="text-white mb-6 text-3xl font-semibold text-center">Sign Up</h1>

//               <div className="mb-4">
//                 <label htmlFor="fullname" className="block text-white">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullname"
//                   name="fullName"
//                   value={values.fullName}
//                   onChange={handleInput}
//                   required
//                   className="w-full p-2 mt-1 rounded-md bg-gray-200"
//                 />
//                 {errors.fullName && <span className="text-red-600 text-sm">{errors.fullName}</span>}
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="username" className="block text-white">User Name</label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={values.username}
//                   onChange={handleInput}
//                   required
//                   className="w-full p-2 mt-1 rounded-md bg-gray-200"
//                 />
//                 {errors.username && <span className="text-red-600 text-sm">{errors.username}</span>}
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-white">Phone no.</label>
//                 <input
//                   type="number"
//                   id="phone"
//                   name="phoneNumber"
//                   value={values.phoneNumber}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter your phone number"
//                   className="w-full p-2 mt-1 rounded-md bg-gray-200"
//                 />
//                 {errors.phoneNumber && <span className="text-red-600 text-sm">{errors.phoneNumber}</span>}
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-white">Your Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={values.email}
//                   onChange={handleInput}
//                   required
//                   className="w-full p-2 mt-1 rounded-md bg-gray-200"
//                 />
//                 {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="password" className="block text-white">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={values.password}
//                   onChange={handleInput}
//                   className="w-full p-2 mt-1 rounded-md bg-gray-200"
//                 />
//                 {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="confirmPassword" className="block text-white">Confirm Password</label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={values.confirmPassword}
//                   onChange={handleInput}
//                   className="w-full p-2 mt-1 rounded-md bg-gray-200"
//                 />
//                 {errors.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword}</span>}
//               </div>

//               <div className="mb-4 flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   name="checkbox"
//                   checked={isCheckboxChecked}
//                   onChange={handleInput}
//                   className="mr-2"
//                 />
//                 <label htmlFor="rememberMe" className="text-white">
//                   I agree to the <span className="font-bold">Terms of Use</span>
//                 </label>
//               </div>
//               {errors.checkbox && <span className="text-red-600 text-sm">{errors.checkbox}</span>}

//               <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
//                 <Link to="/Login" className="w-full sm:w-1/2">
//                   <button
//                     type="button"
//                     className="w-full px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-800"
//                   >
//                     Login
//                   </button>
//                 </Link>
//                 <button
//                   type="submit"
//                   className="w-full sm:w-1/2 px-4 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import signIn from '../images/signIn.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation';

const SignIn = () => {
  const [values, setValues] = useState({
    fullName: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [isAccountCreated, setAccountCreated] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setCheckboxChecked(checked);
      // Clear checkbox error immediately when checkbox is clicked
      setErrors((prev) => ({ ...prev, checkbox: '' }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);

    // If checkbox is checked, remove checkbox error if present
    if (isCheckboxChecked) {
      delete validationErrors.checkbox;
    }

    setErrors(validationErrors);

    if (
      !validationErrors.fullName &&
      !validationErrors.username &&
      !validationErrors.phoneNumber &&
      !validationErrors.email &&
      !validationErrors.password &&
      !validationErrors.confirmPassword &&
      isCheckboxChecked
    ) {
      axios
        .post('https://tripsavvy-backend.onrender.com/api/v1/users/register', values)
        .then((res) => {
          console.log(res);
          setAccountCreated(true);
          setSuccessMessage('Account created successfully');
          setValues({
            fullName: '',
            username: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
          setCheckboxChecked(false); // Reset checkbox on success
        })
        .catch((err) => {
          console.log(err);
          setAccountCreated(false);
        });
    } else if (!isCheckboxChecked) {
      setErrors((prev) => ({
        ...prev,
        checkbox: 'You must agree to the Terms of Use',
      }));
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={signIn}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 flex justify-center items-center w-full h-full p-4 transform translate-y-10 sm:translate-y-16">
        <div className="bg-slate-800 border border-slate-400 rounded-lg p-6 sm:p-8 shadow-xl backdrop-filter backdrop-blur-md bg-opacity-30 w-full max-w-md overflow-y-auto max-h-[90vh]">
          {isAccountCreated ? (
            <div>
              <div className="mb-4 p-2 text-green-400 rounded-md text-center">
                {successMessage}
              </div>
              <Link to="/Login">
                <button
                  type="button"
                  className="w-full px-4 py-2 mt-4 text-white rounded-md bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h1 className="text-white mb-6 text-3xl font-semibold text-center">Sign Up</h1>

              <div className="mb-4">
                <label htmlFor="fullname" className="block text-white">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleInput}
                  required
                  className="w-full p-2 mt-1 rounded-md bg-gray-200"
                />
                {errors.fullName && <span className="text-red-600 text-sm">{errors.fullName}</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="username" className="block text-white">User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleInput}
                  required
                  className="w-full p-2 mt-1 rounded-md bg-gray-200"
                />
                {errors.username && <span className="text-red-600 text-sm">{errors.username}</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-white">Phone no.</label>
                <input
                  type="number"
                  id="phone"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleInput}
                  required
                  placeholder="Enter your phone number"
                  className="w-full p-2 mt-1 rounded-md bg-gray-200"
                />
                {errors.phoneNumber && <span className="text-red-600 text-sm">{errors.phoneNumber}</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInput}
                  required
                  className="w-full p-2 mt-1 rounded-md bg-gray-200"
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleInput}
                  className="w-full p-2 mt-1 rounded-md bg-gray-200"
                />
                {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-white">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleInput}
                  className="w-full p-2 mt-1 rounded-md bg-gray-200"
                />
                {errors.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword}</span>}
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="checkbox"
                  checked={isCheckboxChecked}
                  onChange={handleInput}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-white">
                  I agree to the <span className="font-bold">Terms of Use</span>
                </label>
              </div>
              {errors.checkbox && <span className="text-red-600 text-sm">{errors.checkbox}</span>}

              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
                <Link to="/Login" className="w-full sm:w-1/2">
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-800"
                  >
                    Login
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-full sm:w-1/2 px-4 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
