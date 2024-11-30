
import React,{useState} from 'react';
import taj from '../images/taj.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation';

const Login = () => {

  const [values,setValues] = useState({
    username: '',
    email: '',
    password: '',
    })

    const [errors, setErrors] = useState({});

    const[isAccountCreated, setAccountCreated] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleInput = (event) => {
      const{name,value} = event.target;
  
          setValues((prev) => ({ ...prev, [name]: value }));
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
      if (!errors.username && !errors.email && !errors.password ) {
        axios
          .post('https://tripsavvy-backend.onrender.com/api/v1/users/login', values)
          .then((res) => {
            console.log(res);
            setAccountCreated(true);
            setSuccessMessage('Account logged in successfully'); //display success message
    
            // reseting the form fields
            setValues({
              username: '',
              email: '',
              password: '',
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
      {/* <h1>this is login page</h1> */}
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={taj} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-3/12 mx-auto my-auto top-1/2 transform -translate-y-1/2'>

        { isAccountCreated && (
              <div>
              <div className="mb-4 p-2  text-green-400 rounded-md">
                {successMessage}
              </div>
              <Link to="/signin">
              <button
                type='button'
                className="w-1 p-2 mt-4 mr-1 text-white rounded-md bg-blue-500"
                //onClick={() => setAction('Login')}
                
              >
                Sign in
              </button>
              </Link>
              </div>
            )}


        {!isAccountCreated && (


           <form onSubmit={handleSubmit}>
             <h1 className="text-white mb-4 text-2xl font-bold text-center">LOG IN</h1> 


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
                 type='button'
                 className="w-4/6 p-2 mt-4 mr-1 text-white rounded-md bg-blue-500"
                 //onClick={() => setAction('Sign Up')}
               >
                 Sign Up
               </button>
                </Link>
             </div>
           </form>

        )}
         </div>
        </div>
    </div>
  )
}

export default Login

