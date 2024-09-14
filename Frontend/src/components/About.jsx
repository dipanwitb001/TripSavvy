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
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';
import person4 from '../images/person4.jpg';
import person5 from '../images/person5.jpg';

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
          Your Guide to Extraordinary Travel
          <span className="block h-1 w-3/4 bg-white mt-2 mx-auto"></span>
        </h1>
        
        {/* Information Box */}
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-4/6 mt-8 mb-12">
          {/* Content */}
          <ImageCard 
            text="person1" 
            image={person1} 
            title="Alex Hartman" 
            para="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert. With a profound love for exploring the world and an unyielding desire to share this passion with others, Alex embarked on a mission to revolutionize the way people plan and experience travel."
            highlight="founder"
          />
          
          <RevImageCard 
            text="person2" 
            image={person2} 
            title="Sophia Patel" 
            para="Sophia Patel, our Head of Travel Planning, leads the charge in curating bespoke itineraries that cater to your every whim. Alex works closely with Sophia Patel, our Destination Specialist, who brings a wealth of knowledge on unique and off-the-beaten-path destinations, ensuring each trip is filled with memorable experiences.."
            highlight="Head of Travel Planning"
          />
          <ImageCard 
            text="person3" 
            image={person3} 
            title="Daniel Garcia" 
            para="Daniel Garcia,Customer Support Lead, is dedicated to providing exceptional service and resolving any travel concerns with utmost care. On the technical side, Rachel Kim, our Lead Developer, ensures the smooth operation of our website, integrating the latest technology to enhance user experience, while Olivia Thompson, our UX Designer, focuses on creating an intuitive and engaging interface.."
            highlight="Customer Support Lead"
          />
          
          <RevImageCard 
            text="person4" 
            image={person4} 
            title="James Taylor" 
            para="James Taylor, our Content Strategist, crafts engaging and informative guides, articles, and visual content that inspire and inform our travelers. He collaborates with Emily Chen, our Social Media Manager, who shares these stories across our platforms, fostering a vibrant community of explorers."
            highlight="Content Strategist"
          />
          <ImageCard 
            text="person5" 
            image={person5} 
            title="Ethan Rogers" 
            para="Ethan Rogers, our Marketing Director, spearheads campaigns that connect with our audience and promote our services, making sure TripSavvy remains your go-to resource for all travel needs. Each team member at TripSavvy is committed to making your journey unforgettable, from the first click to the final adventure."
            highlight="Marketing Director"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

