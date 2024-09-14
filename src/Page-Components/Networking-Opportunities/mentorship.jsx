// src/Page-Components/Networking-Opportunities/MentorshipProgram.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import background from './background.jpg';
import JobCard from './JobCard';
import { selectMentorshipJobs } from '../../features/jobsSlice';
import { Link } from 'react-router-dom'; 
const MentorshipProgram = () => {
  const mentorshipJobs = useSelector(selectMentorshipJobs);

  const buttonStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    padding: '10rem 35rem',
    borderRadius: '0.375rem',
    border: 'none',
    display: 'inline-block',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <div className="text-center py-8">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;700&display=swap');
          body {
            font-family: 'Abhaya Libre', serif;
          }
          h1, p, button {
            font-family: 'Abhaya Libre', serif;
          }
        `}
      </style>
      {/* Mentorship Program Section */}
      <h1 className="text-3xl font-bold mb-4 bg-cyan-600 text-white inline-block py-1.5 px-20 rounded-full">
        Memberships Program
      </h1>
      <p className="text-lg mb-6">
        Engage in our Mentorship Program to connect with experienced alumni who offer guidance, advice, and support in navigating career paths and professional growth.
      </p>
      <p className="text-lg mb-8">
        Become a mentor or find a mentor to guide you in your professional journey.
      </p>

      {/* Display Mentorship Jobs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        {mentorshipJobs.slice(0, 3).map((job) => ( // Display only 3 jobs for mentorship
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-6">
        <Link
          to="/Networking_Opportunities/JobsSection"
          className="bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-full text-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default MentorshipProgram;
