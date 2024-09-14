// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import backgroundImage from './DashboardImg.jpg'

const messages = [
  "Welcome to the Interview Experiences!",
  "Find insights from various interviews.",
  "Prepare better with real interview experiences.",
  "Enhance Your Chances With In-Depth Reviews"
];

const Dashboard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
    className="py-36 h-max w-full bg-cover bg-center relative"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ zIndex: 0 }}
        ></div>
    <div className="container mx-auto text-center mb-40 mt-10 px-4 sm:px-6 lg:px-8 relative rounded">
      <h1 className="text-2xl text-white  sm:text-3xl md:text-4xl font-bold">
      {messages[index]}
      </h1>
      
    </div>
  </header>
    
  );
};

export default Dashboard;
