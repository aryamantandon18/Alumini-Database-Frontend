import React from 'react';
import ActionAreaCard from './ActionAreaCard';

const InterviewDetail = ({ interview, handleBackClick }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="p-6 border border-gray-300 rounded-lg shadow-lg lg:w-3/4 md:w-5/6 w-full mx-auto my-6">
        <ActionAreaCard
          title={interview.JobTitle} // Use new field names
          content={interview.Conclusion} // Use new field names
          dateTime={interview.CreatedAt} // Updated to use creation date
          postedBy={interview.CompanyName} // Use new field names
          postedInYear={new Date(interview.CreatedAt).getFullYear()} // Extract year from CreatedAt
          role={interview.JobTitle} // Use new field names
          campusType={interview.OnCampus} // Use new field names
          referral={interview.Referral} // Use new field names
          companyName={interview.CompanyName} // New field
          interviewDate={interview.InterviewDate} // New field
          alumniID={interview.AlumniID} // New field
          experienceID={interview.ExperienceID} // New field
        />
      </div>
      <button
        onClick={handleBackClick}
        className="p-3 mb-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Back
      </button>
    </div>
  );
};

export default InterviewDetail;
