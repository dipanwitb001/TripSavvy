import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Layout from './Layout.jsx';
import HomeSection from './components/HomeSection.jsx';
import Notification from './components/Notification.jsx';
import SignIn from './components/SignIn.jsx';
import About from './components/About.jsx';
import Service from './components/Service/Service.jsx';
import Contact from './components/Contact/Contact.jsx';
import Mountain from './components/Mountain.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<HomeSection/>} />
      <Route path='/home' element={<HomeSection/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/mountain' element={<Mountain />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
