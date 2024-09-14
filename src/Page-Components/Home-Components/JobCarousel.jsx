import React, { useState } from 'react';
import JobCard from '../Networking-Opportunities/JobCard'; // Make sure to import the JobCard component
import { useLocation, Link } from "react-router-dom";

const JobCarousel = ({ jobs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards to show at once
  const cardWidthPercentage = 100 / (cardsToShow + 1); // Adjust width percentage to fit the "View More" button

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(jobs.length + 1 - cardsToShow, 0);
      return prevIndex < maxIndex ? prevIndex + 1 : maxIndex;
    });
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden">
        <button
          className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow-md top-1/2 transform -translate-y-1/2"
          onClick={handlePrevClick}
        >
          &#8249;
        </button>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(currentIndex * cardWidthPercentage)}%)` }}>
          
          {jobs.map((job, index) => (
            <div key={index} className={`flex-shrink-0 p-5`} style={{ width: `${cardWidthPercentage}%` }}>
              <JobCard job={job} />
            </div>
          ))}
          <div className={`flex-shrink-0 p-2 flex justify-center items-center`} style={{ width: `${cardWidthPercentage}%`, marginLeft: '50px' }}>
            <Link
              to = "/JobSection"
              className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 "
              onClick={() => console.log('View More clicked')}
            >
              View More
            </Link>
          </div>
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow-md top-1/2 transform -translate-y-1/2"
          onClick={handleNextClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default JobCarousel;
