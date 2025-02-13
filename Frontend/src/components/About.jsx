// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import aboutImage from "../images/about-1.jpg";
// // import person1 from "../images/person1.jpg";
// // import ImageCard from "../ImageCard";

// // const AboutUs = () => {
// //   const sliderSettings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 1,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="relative h-screen flex justify-center items-center">
// //       {/* Background Image */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center"
// //         style={{ backgroundImage: `url(${aboutImage})` }}
// //       ></div>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// //       {/* Carousel */}
// //       <div className="relative z-10 w-11/12 max-w-4x mx-1">
// //         <Slider {...sliderSettings}>
// //           <ImageCard
// //             name="Alex Hartman"
// //             role="Founder & Visionary Leader"
// //             image={person1}
// //             description="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert."
// //           />
// //           <ImageCard
// //             name="Emily Chen"
// //             role="Social Media Manager"
// //             image={person1}
// //             description="Emily manages TripSavvy's social channels, bringing our journeys to life for followers worldwide."
// //           />
// //           <ImageCard
// //             name="James Taylor"
// //             role="Content Strategist"
// //             image={person1}
// //             description="James ensures our guides are insightful and engaging for all travelers."
// //           />
// //           <ImageCard
// //             name="Rachel Kim"
// //             role="Lead Developer"
// //             image={person1}
// //             description="Rachel spearheads our tech team, making the TripSavvy platform seamless and reliable."
// //           />
// //           <ImageCard
// //             name="Ethan Rogers"
// //             role="Marketing Director"
// //             image={person1}
// //             description="Ethan develops strategies to connect travelers with our services globally."
// //           />
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };



// // export default AboutUs;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import aboutImage from "../images/about-1.jpg";
// import person1 from "../images/person1.jpg";
// import person2 from "../images/person2.jpg";
// import person3 from "../images/person3.jpg";
// import person4 from "../images/person4.jpg";
// import person5 from "../images/person5.jpg";
// import ImageCard from "../ImageCard";

// const AboutUs = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024, // Medium devices
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768, // Small devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="relative h-screen flex flex-col justify-center items-center">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${aboutImage})` }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <div className="flex flex-col items-center p-4 ">
//         <h2 className="text-white">About Us</h2>
//         <p>At TripSavvy, we are passionate about making travel seamless, inspiring, and accessible for everyone. From personalized recommendations to expertly crafted guides, we bring the world closer to you. Whether you're seeking hidden gems or planning your dream vacation, TripSavvy is your trusted partner in creating unforgettable journeys.

//         Discover the world. Discover yourself. With TripSavvy. 🌍✨</p>
//       </div>

//       {/* Carousel */}
//       <div className="relative z-10 w-5/6 box-border items-center justify-center md:w-11/12 max-w-6xl md:max-w-4xl mx-auto px-4 overflow-hidden">
//       <Slider {...sliderSettings}>
//   <ImageCard
//     name="Alex Hartman"
//     role="Founder"
//     image={person1}
//     description="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert."
//   />
//   <ImageCard
//     name="Emily Chen"
//     role="Social Media Manager"
//     image={person2}
//     description="Emily manages TripSavvy's social channels, bringing our journeys to life for followers worldwide."
//   />
//   <ImageCard
//     name="James Taylor"
//     role="Content Strategist"
//     image={person3}
//     description="James ensures our guides are insightful and engaging for all travelers."
//   />
//   <ImageCard
//     name="Rachel Kim"
//     role="Lead Developer"
//     image={person4}
//     description="Rachel spearheads our tech team, making the TripSavvy platform seamless and reliable."
//   />
//   <ImageCard
//     name="Ethan Rogers"
//     role="Marketing Director"
//     image={person5}
//     description="Ethan develops strategies to connect travelers with our services globally."
//   />
// </Slider>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutImage from "../images/about-1.jpg";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";
import person5 from "../images/person5.jpg";
import ImageCard from "../ImageCard";

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative h-auto min-h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden -z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 text-white px-6 py-12 top-12 max-w-6xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          At TripSavvy, we are passionate about making travel seamless, inspiring, and accessible for everyone. From personalized recommendations to expertly crafted guides, we bring the world closer to you. Whether you're seeking hidden gems or planning your dream vacation, TripSavvy is your trusted partner in creating unforgettable journeys.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4 pb-4">
          Discover the world. Discover yourself. With TripSavvy. 🌍✨
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-10 w-11/12 md:w-5/6 max-w-6xl md:max-w-4xl mx-auto px-4 py-8">
        <Slider {...sliderSettings}>
          <ImageCard
            name="Alex Hartman"
            role="Founder"
            image={person1}
            description="At the heart of TripSavvy is its visionary founder, Alex Hartman, a passionate traveler and seasoned industry expert."
          />
          <ImageCard
            name="Emily Chen"
            role="Social Media Manager"
            image={person2}
            description="Emily manages TripSavvy's social channels, bringing our journeys to life for followers worldwide."
          />
          <ImageCard
            name="James Taylor"
            role="Content Strategist"
            image={person3}
            description="James ensures our guides are insightful and engaging for all travelers."
          />
          <ImageCard
            name="Rachel Kim"
            role="Lead Developer"
            image={person4}
            description="Rachel spearheads our tech team, making the TripSavvy platform seamless and reliable."
          />
          <ImageCard
            name="Ethan Rogers"
            role="Marketing Director"
            image={person5}
            description="Ethan develops strategies to connect travelers with our services globally."
          />
        </Slider>
      </div>

      <div className="relative z-10 text-right text-white px-6 py-12 max-w-6xl items-end-">
        <h2 className="text-3xl md:text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg md:text-xl leading-relaxed">
        At TripSavvy, our mission is to make travel seamless, inspiring, and accessible for everyone. We strive to empower travelers with personalized recommendations, sustainable practices, and innovative tools to create unforgettable journeys. 🌍✨
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4 pb-4">
          Discover the world. Discover yourself. With TripSavvy. 🌍✨
        </p>
      </div>

  
<div className="relative bg-black bg-opacity-50 py-8">
  <div className="flex flex-col md:flex-row justify-around text-center text-white p-2">
    <div className="w-1/3 md:w-1/4 p-4">
      <h3 className="text-4xl font-bold text-orange-600">500+</h3>
      <p className="text-lg">Trips Organized</p>
    </div>
    <div className="w-1/3 md:w-1/4 p-4">
      <h3 className="text-4xl font-bold text-orange-600">120+</h3>
      <p className="text-lg">Destinations</p>
    </div>
    <div className="w-1/3 md:w-1/4 p-4">
      <h3 className="text-4xl font-bold text-orange-600">1M+</h3>
      <p className="text-lg">Happy Travelers</p>
    </div>
    <div className="w-1/3 md:w-1/4 p-4">
      <h3 className="text-4xl font-bold text-orange-600">24/7</h3>
      <p className="text-lg">Customer Support</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
