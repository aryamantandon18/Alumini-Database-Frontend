import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const JobPostingPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (skillsRequired.trim() !== "") {
      setSkills([...skills, skillsRequired]);
      setSkillsRequired("");
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleShowRanks = () => {
    alert("Ranks feature is not implemented yet!");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg my-32">
      <h1 className="text-2xl font-bold mb-4">Rank List of Students</h1>
      <p className="text-center my-4">
        Input the job title and job roles to see the ranklist of students who
        are capable and best fir to this job role.
      </p>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobTitle"
        >
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobDescription"
        >
          Job Description
        </label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="skillsRequired"
        >
          Skills Required
        </label>
        <div className="flex h-8">
          <input
            type="text"
            id="skillsRequired"
            value={skillsRequired}
            onChange={(e) => setSkillsRequired(e.target.value)}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handleAddSkill}
            className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded ml-2 "
          >
            Add
          </button>
        </div>
        <div className="mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 text-blue-700 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
            >
              {skill}
              <button
                onClick={() => handleRemoveSkill(index)}
                className="hover:text-white font-bold py-1 px-2 rounded-full ml-2"
              >
                x
              </button>
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={handleShowRanks}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Show Ranks
      </button>
    </div>
  );
};

export default JobPostingPage;
