import React from 'react';
import about from '../images/about.jpg';

const About = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img src={about} alt="About" className="absolute top-0 left-0 w-full h-full object-cover bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  )
}

export default About;

