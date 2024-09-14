import React from 'react';
import backgroundImage from './newDashboardImg.jpg'; // Ensure the correct path to your image

function NewsDashboard() {
  return (
    <header
      className="py-24 h-max w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center mb-40 mt-10 px-4 sm:px-6 lg:px-8 relative rounded">
        <h1 className="text-2xl text-gray-700  sm:text-3xl md:text-4xl font-bold">
          STAY CONNECTED WITH ALUMNI <span className="text-red-500">NEWS</span> NETWORK
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
          Latest updates and success stories from Abhigyan alumni network
        </p>
      </div>
    </header>
  );
}

export default NewsDashboard;
