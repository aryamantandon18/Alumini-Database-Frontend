import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllInterviews } from "../../features/interviewSlice";
import ActionAreaCard from "./ActionAreaCard";

const InterviewList = ({ handleInterviewClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards to show at once
  const cardWidthPercentage = 100 / cardsToShow; // Each card occupies 1/3 of the container

  const dispatch = useDispatch();
  const interviews = useSelector((state) => state.interviews.interviews);
  const status = useSelector((state) => state.interviews.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllInterviews());
    }
  }, [status, dispatch]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : interviews.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < interviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden">
        <button
          className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow-md top-1/2 transform -translate-y-1/2 hover:bg-gray-200 transition-colors duration-300"
          onClick={handlePrevClick}
        >
          &#8249;
        </button>
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
            width: `${100 * interviews.length}%`,
          }}
        >
          {interviews?.map((interview, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-6 bg-white border rounded-lg shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300"
              style={{ width: `${cardWidthPercentage}%` }}
              onClick={() => handleInterviewClick(interview)}
            >
              <h3 className="text-2xl font-semibold mb-3">{interview.JobTitle}</h3>
              <p className="text-gray-700 mb-3">{interview.Description}</p>
              <div className="text-sm text-gray-600 mb-4">
                <p><strong>Company:</strong> {interview.CompanyName}</p>
                <p><strong>Date:</strong> {new Date(interview.InterviewDate).toLocaleDateString()}</p>
                <p><strong>On Campus:</strong> {interview.OnCampus ? 'Yes' : 'No'}</p>
                <p><strong>Referral:</strong> {interview.Referral ? 'Yes' : 'No'}</p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow-md top-1/2 transform -translate-y-1/2 hover:bg-gray-200 transition-colors duration-300"
          onClick={handleNextClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default InterviewList;
