// import React from 'react';
// import about from '../images/about-1.jpg';

// const About = () => {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <img src={about} alt="About" className="absolute top-0 left-0 w-full h-full object-cover" />

//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//       <div>
//         <h1 className='text-5xl text-white top-36 left-32 absolute font-serif italic'>Plan your memories with Us</h1>
//         <hr className='color-white' />
//       </div>
//     </div>
//   )
// }

// export default About;
// import React from 'react';
// import about from '../images/about-1.jpg';
// import ImageCard from '../ImageCard';
// import RevImageCard from '../RevImageCard';
// import person1 from '../images/person1.jpg';

// const About = () => {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Background Image */}
//       <img src={about} alt="About" className="absolute top-0 left-0 w-full h-full object-cover" />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

//       {/* Centered Content */}
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center translate-y-36">
//         <h1 className="text-5xl text-white font-serif text-center relative italic -translate-y-20">
//           About Us
//           <span className="block h-1 w-3/4 bg-white mt-2 mx-auto"></span>
//         </h1>
        
//         {/* Information Box */}
//         <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-4/6 mt-8">
//           {/* Add your content here */}
//           {/* <p className="text-white text-lg"> */}
            
//            <ImageCard text="person1" image={person1} title="Rohit Sharma" para="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert. With a profound love for exploring the world and an unyielding desire to share this passion with others, Alex embarked on a mission to revolutionize the way people plan and experience travel."/>

//           <RevImageCard text="person1" image={person1} title="Rohit Sharma" para="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert. With a profound love for exploring the world and an unyielding desire to share this passion with others, Alex embarked on a mission to revolutionize the way people plan and experience travel."/>
//           {/* </p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import about from '../images/about-1.jpg';
import ImageCard from '../ImageCard';
import RevImageCard from '../RevImageCard';
import person1 from '../images/person1.jpg';

const About = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background Image */}
      <img src={about} alt="About" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Centered Content */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-20">
        <h1 className="text-5xl text-white font-serif text-center relative italic mt-12">
          About Us
          <span className="block h-1 w-3/4 bg-white mt-2 mx-auto"></span>
        </h1>
        
        {/* Information Box */}
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-4/6 mt-8 mb-12">
          {/* Content */}
          <ImageCard 
            text="person1" 
            image={person1} 
            title="Rohit Sharma" 
            para="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert. With a profound love for exploring the world and an unyielding desire to share this passion with others, Alex embarked on a mission to revolutionize the way people plan and experience travel."
          />
          
          <RevImageCard 
            text="person1" 
            image={person1} 
            title="Rohit Sharma" 
            para="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert. With a profound love for exploring the world and an unyielding desire to share this passion with others, Alex embarked on a mission to revolutionize the way people plan and experience travel."
          />
        </div>
      </div>
    </div>
  );
}

export default About;

