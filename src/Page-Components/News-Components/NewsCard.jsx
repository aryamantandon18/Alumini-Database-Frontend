import React from 'react';

const NewsCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-7 mb-4  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="bg-gray-200 rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/4 h-auto">
          <img src={image} alt="avatar" className="w-full h-full object-cover" />
        </div>
        <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 w-full sm:w-3/4">
          <h3 className="text-xl font-semibold text-red-600 hover:text-red-800 transition-colors duration-200">{title}</h3>
          <p className="text-sm text-gray-500">Posted on {date}</p>
          <br />
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
