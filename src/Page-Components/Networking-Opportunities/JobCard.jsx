import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      style={{ position: 'relative', zIndex: 1 }}>
      <div className="flex justify-between items-center mb-4">
        <span className="bg-yellow-500 text-white py-1 px-3 rounded-full text-sm">{job.type}</span>
        <span className="text-gray-500 text-sm">{job.salary}</span>
      </div>
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-blue-500 mb-4">{job.company}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="bg-gray-200 py-1 px-3 rounded-full text-sm">{skill}</span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <button className="text-blue-500 hover:text-blue-600 font-bold">View Job</button>
    </div>
  );
};

export default JobCard;
