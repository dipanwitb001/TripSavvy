// src/components/ExampleCarouselImage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = ({ text, image }) => {
  return (
    <div>
      <img
        className="d-block  w-full h-2/3"
        src={image}
        alt={text}
      />
      <div className="carousel-caption d-none d-md-block ">
        {/* <h5>{text}</h5> */}
      </div>
    </div>
  );
}

export default ExampleCarouselImage;
