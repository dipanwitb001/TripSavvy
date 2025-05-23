// // src/components/ExampleCarouselImage.jsx
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ExampleCarouselImage = ({ text, image }) => {
//   return (
//     <div>
//       <img
//         className="d-block  w-full h-auto object-cover"
//         src={image}
//         alt={text}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//       <div className="carousel-caption d-none d-md-block ">
//         {/* <h5>{text}</h5> */}
//       </div>
//     </div>
//   );
// }

// export default ExampleCarouselImage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = ({ text, image }) => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={text}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  );
}

export default ExampleCarouselImage;
