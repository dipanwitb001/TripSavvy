
import React from "react";

const ImageCard = ({ name, role, image, description }) => {
  return (
    <div className="w-64 h-96 bg-slate-900 opacity-50 shadow-lg rounded-lg p-5 text-center flex flex-col justify-between">
      {/* Image Section */}
      <div>
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500 mb-4 transform transition-transform duration-300 hover:scale-125"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-bold text-gray-800 truncate">{name}</h2>
        <h3 className="text-indigo-500 text-sm font-medium">{role}</h3>
        <p className="text-white text-sm overflow-hidden text-ellipsis h-16">
          {description}
        </p>
      </div>

      {/* Button */}
      <button className="mt-2 border-2 border-slate-700 rounded-lg p-2 transform transition-transform duration-300 hover:scale-125 bg-white">
        Learn More
      </button>
    </div>
  );
};

export default ImageCard;
